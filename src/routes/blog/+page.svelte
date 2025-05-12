<script lang="ts">
    import { formatDate } from "$lib/utils.js";
    import PostCard from "../../components/Blog/PostCard.svelte";
    import NavBar from "../../components/NavBar.svelte";

    let { data } = $props()
</script>

<svelte:head>
    <title>JB Stepan Blog</title>
</svelte:head>

<NavBar />

<!-- <div>
    <h1 class="mx-100 p-2 m-10 text-3xl font-bold text-center">Latest Posts</h1>
    <div class=" grid gap-10 m-0 box-border grid-cols-3 mx-100">
        {#each data.posts as post}
            <PostCard title={post.title} description={post.description} date={formatDate(post.date)} link={"/blog/" + post.slug}/>
        {/each}
    </div>
</div> -->

<div>
    <h1 class="mx-auto p-2 m-10 text-3xl font-bold text-center">Latest Posts</h1>
    <div class="grid gap-10 m-0 box-border grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:mx-100 sm:mx-100">
        {#each data.posts as post}
            <PostCard title={post.title} description={post.description} date={formatDate(post.date)} link={"/blog/" + post.slug}/>
        {/each}
    </div>
</div>