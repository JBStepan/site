<script lang="ts">
	import { formatDate } from '$lib/utils'

	let { data } = $props()
</script>

<article class="flex flex-col items-center text-center max-w-fit mx-auto">
    <div class="self-start text-left mb-5 space-y-3">
        <h1 class=" font-bold text-4xl underline">{data.meta.title}</h1>
        <p>Published on {formatDate(data.meta.date)}</p>
    </div>

    <div class="prose mx-auto w-full text-left">
        <data.content></data.content>
    </div>
</article>
