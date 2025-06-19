<script lang="ts">
	import SectionCards from '$lib/components/externals/sidebar/section-cards/section-cards.svelte';
	import ChartAreaInteractive from '$lib/components/externals/sidebar/chart-area-interactive/chart-area-interactive.svelte';
</script>

<main class="flex flex-1 flex-col">
	<div class="@container/main flex flex-1 flex-col gap-2">
		<div class="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
			<SectionCards />
			<div class="px-4 lg:px-6">
				<ChartAreaInteractive />
			</div>
			<!--  <DataTable {data} /> -->
		</div>
	</div>
</main>
