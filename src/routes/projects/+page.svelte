<script lang="ts">
    import NavBar from "../../components/NavBar.svelte";
    import Footer from "../../components/Footer.svelte";
    import ProjectCard from "../../components/ProjectCard.svelte";
    import type { Projects } from "$lib/types"

    const projects: Projects[] = [
        { name: "WeatherInbox", desc: "Get a daily email with your personalized forecast of the weather.", links: [{ name: "Site", link: "weatherinbox.net" }]},
        { name: "Space Sandbox Horror Game", desc: "A pre-devolpment game thats sorta based on Notch's 0x10c", links: [{ name: "Site", link: "jshort.xyz/space-horror-game"}] },
        { name: "JB Stepan URL Shortener", desc: "A dead simple url shortener", links: [{name: "Site", link: "jshort.xyz"}] },
    ]

</script>

<svelte:head>
    <title>Projects</title>
</svelte:head>

<NavBar />

<main class="mt-[6rem]">
    
    <div class="flex justify-center flex-row flex-wrap gap-6 mt-4">
        {#each projects as pro }
            <ProjectCard name={pro.name} desc={pro.desc} links={pro.links} />
        {/each}
    </div>

    <Footer />
</main>
