<script lang="ts">
    import NavBar from "../../components/NavBar.svelte";
    import Footer from "../../components/Footer.svelte";
    import ProjectCard from "../../components/ProjectCard.svelte";
    import type { Projects } from "$lib/types"

    const projects: Projects[] = [
        { name: "WeatherInbox", desc: "Get a daily email with your personalized forecast of the weather.", links: [{ name: "Site", link: "weatherinbox.net" }]},
        { name: "Space Sandbox Horror Game", desc: "A pre-devolpment game thats sorta based on Notch's 0x10c", links: [{ name: "Doc", link: "jshort.xyz/space-horror-game"}] },
        { name: "JB Stepan URL Shortener", desc: "A dead simple url shortener", links: [{name: "Site", link: "jshort.xyz"}] },
        { name: "The SAURON Universe", desc: "The SAURON Universe is a living, real-time fictional world told through documents, fake websites, and interactive media, anchored by the SAURON Project — an off-the-record FBI/CIA/NSA surveillance operation — but has since grown into a fully realized universe that mirrors our world day to day.", links:[ { name:"Wiki", link:"https://sauron.jbstepan.com" }]}
    ]

</script>

<svelte:head>
    <title>Projects</title>
</svelte:head>

<NavBar />

<main class="mt-[6rem]">
    
    <div class="grid gap-10 m-0 box-border grid-cols-1 lg:grid-cols-3 lg:mx-100 mx-auto">
        {#each projects as pro }
            <ProjectCard name={pro.name} desc={pro.desc} links={pro.links} />
        {/each}
    </div>

    <Footer />
</main>
