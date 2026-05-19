<script lang="ts">
    import '../app.css'

    let { children } = $props()
</script>

<main>
    <p class=" bg-blue-500 text-center p-1 font-bold">
        Yes I know the site looks bad. Imma redo it at somepoint.
    </p>
    {@render children()}
</main>