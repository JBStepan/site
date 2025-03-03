<script lang="ts">
	import { formatDate } from '$lib/utils'
    import Footer from '../../../components/Footer.svelte';
    import NavBar from '../../../components/NavBar.svelte';
    import Tag from './Tag.svelte';

	let { data } = $props()
</script>

<NavBar />
<article class="flex flex-col items-center text-center max-w-[35rem] mx-auto px-1 mt-10 mb-10">
    <div class="self-start text-left mb-5 space-y-3">
        <h1 class=" font-bold text-4xl underline">{data.meta.title}</h1>
        <p>Published on {formatDate(data.meta.date)}</p>
        {#each data.meta.categories as tag }
            <Tag tag={tag} />
        {/each}
    </div>
    <span class="border-b-gray-500 border-b-2 w-full rounded-2xl"> </span>
    <div class="prose prose-invert prose-a:text-blue-500 mx-auto w-full text-left mt-5 ">
        <data.content></data.content>
    </div>
</article>
