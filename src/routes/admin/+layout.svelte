<script lang="ts">
	import * as Sidebar from '$lib/components/internals/sidebar/index.js';
	import AppSidebar from '$lib/components/externals/sidebar/app-sidebar/app-sidebar.svelte';
	import SiteHeader from '$lib/components/externals/sidebar/site-header/site-header.svelte';

	const { children } = $props();
</script>

<Sidebar.Provider
	style="--sidebar-width: calc(var(--spacing) * 72); --header-height: calc(var(--spacing) * 12);"
>
	<AppSidebar variant="inset" />
	<Sidebar.Inset>
		<SiteHeader />

		{@render children()}
	</Sidebar.Inset>
</Sidebar.Provider>
