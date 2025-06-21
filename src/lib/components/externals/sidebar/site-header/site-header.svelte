<script lang="ts">
	import { Button } from '$lib/components/internals/button/index';
	import { Separator } from '$lib/components/internals/separator/index';
	import * as Sidebar from '$lib/components/internals/sidebar/index';
	import DarkMode from '$lib/components/externals/dark-mode/dark-mode.svelte';
	import ThemeSelector from '$lib/components/externals/theme-selector/theme-selector.svelte';
</script>

<header
	class="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)"
>
	<div class="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
		<Sidebar.Trigger class="-ml-1" />
		<Separator orientation="vertical" class="mx-2 data-[orientation=vertical]:h-4" />
		<Button variant="outline" size="sm">Guides</Button>
		<div class="ml-auto flex items-center gap-2">
			<DarkMode />
			<ThemeSelector />
		</div>
	</div>
</header>
