<script lang="ts">
  import { enhance } from "$app/forms";
  import type { ActionData } from "./$types";

  import NavBar from "../../components/NavBar.svelte";
  import Footer from "../../components/Footer.svelte";

  let { form }: { form: ActionData } = $props()

  // let body: string | undefined = $state(form?.body?.toString() ?? "")
  // let email: string | undefined = $state(form?.email?.toString() ?? "")
  // let subject: string | undefined = $state(form?.subject?.toString() ?? "")
  // let name: string | undefined = $state(form?.name?.toString() ?? "")
</script>

<svelte:head>
  <title>Contact</title>
  <script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>
</svelte:head>

<NavBar />
<section>
  <div class="mt-20 flex items-center justify-center min-w-[557px] mx-auto">
    {#if !form?.success}
    <form method="post" class="p-2" >
      <h2 class="text-3xl font-medium mb-3 text-center">Contact Form</h2>
      <div class="mb-2">
        <h3 class="block font-medium text-md">Email: </h3>
        <input required class="text-black p-1 w-full bg-white rounded-md focus:ring-2 transition duration-300 focus:ring-blue-500 focus:outline-none" type="email" name="email" id="" />
      </div>

      <div class="mb-2">
        <h3 class="block font-medium text-md">Name: </h3>
        <input required class="text-black p-1 w-full bg-white rounded-md focus:ring-2 transition duration-300 focus:ring-blue-500 focus:outline-none" type="text" name="name" id="" />
      </div>

      <div class="mb-2">
        <h3 class="block font-medium text-md">Subject: </h3>
        <input required  class="text-black p-1 w-full bg-white rounded-md focus:ring-2 transition duration-300 focus:ring-blue-500 focus:outline-none" type="text" name="subject" id="" />
      </div>
      
      <div class="mb-2">
        <h3 class="block font-medium text-md">Body: </h3>
        <textarea required class="text-black p-1 w-full bg-white rounded-md focus:ring-2 transition duration-300  focus:ring-blue-500 focus:outline-none" name="content" rows="5" id=""></textarea>
      </div>

      <!--Cloudflare Turnstile-->
      <div
      class="cf-turnstile"
      data-sitekey="0x4AAAAAAAIcvQYrT7rgRHGo"
      data-size="flexible"
      data-theme="dark"
      ></div>
      {#if form?.turnstilefail == true}<p class="text-red-500">Captcha failure!</p>{/if}

      <div class="text-center mt-6">
        <button class="text-black p-2 px-4 rounded-md bg-white outline-none scale-100 transition duration-200 hover:bg-slate-200 hover:scale-105 cursor-pointer" type="submit">Submit</button>
      </div>
    </form>
    {:else if form?.success == true}
    <div class="p-2 text-center">
      <p class="font-bold text-2xl">Thank you for submitting!</p>
      <p class="">Make sure to keep a look out in you inbox for anything from @jbstepan.com 🙂</p>
    </div>
    {/if}
  </div>
</section>
<Footer />