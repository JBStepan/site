<script lang="ts">
    import { formatDate } from "$lib/utils.js";


    let { data } = $props()
</script>

<svelte:head>
    <title>JB Stepan Blog</title>
</svelte:head>

<section>
    <ul>
        {#each data.posts as post}
            <li>
                <a href={"/blog/" + post.slug}>{post.title}</a>
                <p>{formatDate(post.date)}</p>
                <p>{post.description}</p>
            </li>
        {/each}
    </ul>
</section>