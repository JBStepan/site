<script lang="ts">
    import BlogHeader from "../../components/Blog/BlogHeader.svelte";
    import Footer from "../../components/Footer.svelte";

    let { children, data } = $props()
</script>

<div>
    <div class=" text-center">
        <BlogHeader />
    </div>

    <main>
        {@render children?.()}
    </main>

    <div class="text-center">
        <Footer />
    </div>
</div>

<style>
    /* :root {
        cursor:url("data:image/svg+xml;utf8, <svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' style='font-size: 24px'><text y='20'>🖕</text></svg>"), auto
    } */
</style>