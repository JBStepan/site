import type { Webhook } from '$lib/types';
import type { Actions } from './$types';

async function handleTurnstile(ip: string, token: string, platform: Readonly<App.Platform>) {
    const turnstileURL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';
    console.log(platform.env.TURNSTILEKEY)
    const result = await fetch(turnstileURL, {
        body: JSON.stringify({
          secret: platform.env.TURNSTILEKEY,
          response: token,
          remoteip: ip
        }),
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
    });

    const outcome = await result.json()

    console.log(outcome)
        
    if(outcome.success == false) {
        return false
    }

    return true;
}

async function generateWebhook(data: Webhook, platform: Readonly<App.Platform>) {
    const content = {
        content: "<@270756167570030592>",
        embeds: [
            {
                title: "New Contact form",
                color: 4975390,
                fields: [
                    {
                        name: "Name",
                        value: data.name,
                        inline: true,
                    },
                    {
                        name: "E-Mail",
                        value: data.email,
                        inline: true
                    },
                    {
                        name: "Subject",
                        value: data.subject,
                        inline: false
                    },
                    {
                        name: "Body",
                        value: data.body,
                        inline: false
                    }
                ],
                timestamp: new Date()
            }
        ]
    }
    
    const f = await fetch(platform?.env?.DISCORD_WEBHOOK, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(content)
    })

    if (f.status != 200) {
        console.error("[Webhook] Webhook did not work")
    }
}

export const actions = {
    default: async ({ request, platform }) => {
        const formData = await request.formData()

        /// Handle Turnstile logic
        const token = formData.get('cf-turnstile-response') as string;
        const ip = request.headers.get('CF-Connecting-IP') as string;

        const turnstile = await handleTurnstile(ip, token, platform as Readonly<App.Platform>)

        if (turnstile == false) {
            return { success: false, turnstilefail: true }
        }

        /// Handle submitting
        const email = formData.get("email") as string
        const name = formData.get("name") as string
        const subject = formData.get("subject") as string
        const body = formData.get("content") as string

        await generateWebhook({ email: email, name: name, subject: subject, body: body}, platform as Readonly<App.Platform>)

        return { success: true, turnstilefail: false }
    }
} satisfies Actions;