<script lang="ts">
    import { page } from '$app/stores';
    import Footer from '../components/Footer.svelte';
    import NavBar from '../components/NavBar.svelte';
</script>

<NavBar />
<div class=" text-center">
    <h1 class=" text-5xl font-bold">{$page.status}: {$page.error?.message}</h1>
</div>

<Footer />