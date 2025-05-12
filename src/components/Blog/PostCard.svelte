<script lang="ts">
    let { title, description, date, link }: { title: string, description: string, date: string, link: string } = $props()
</script>

<div class="rounded-2xl shadow-2xl border-[1px] border-gray-500 transition-all transform hover:ring-4 hover:ring-white hover:scale-105">
    <!-- svelte-ignore a11y_consider_explicit_label -->
    <a href={link}>
        <div class="block p-10 sm:p-6">
            <div class="grid gap-10 sm:gap-6">
                <span class="text-4xl sm:text-2xl font-bold">{title}</span>
                <span class="text-xl sm:text-base font-semibold">{description}</span>
                <span class="text-base sm:text-sm">{date}</span>
            </div>
        </div>
    </a>
</div>