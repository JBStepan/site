<script lang="ts">
    import type { Link } from "$lib/types"

    interface ProjectcardProps {
        name: string,
        desc: string,
        links?: Link[]
    }

    let { name, desc, links }: ProjectcardProps = $props()
</script>

<!-- <div class="rounded-2xl shadow-2xl border-[1px] border-gray-500 transition-all transform hover:ring-4 hover:ring-white hover:scale-105">
    <h1 class="text-3xl font-bold">{name}</h1>
    <p class=" mt-1 mb-1">{desc}</p>
    {#if links != undefined}
    {#each links as { name, link }}
        <a class="no-underline font-bold relative bottom-0 text-blue-500" target="_blank" rel="noopener noreferrer" href="https://{link}">{name}</a>
    {/each}
    {/if}
</div> -->

<div class="rounded-2xl shadow-2xl border-[1px] border-gray-500 transition-all transform hover:ring-4 hover:ring-white hover:scale-105">
    <!-- svelte-ignore a11y_consider_explicit_label -->
    <div>
        <div class="block p-10 sm:p-6">
            <div class="grid gap-10 sm:gap-6">
                <span class="text-4xl sm:text-2xl font-bold">{name}</span>
                <span class="text-xl sm:text-base font-semibold">{desc}</span>
                {#if links != undefined}
                {#each links as { name, link }}
                    <span><a class="no-underline font-bold relative bottom-0 text-blue-500" target="_blank" rel="noopener noreferrer" href="https://{link}">{name}</a></span>
                {/each}
                {/if}
            </div>
        </div>
    </div>
</div>