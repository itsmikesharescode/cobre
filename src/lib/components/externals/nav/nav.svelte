<script lang="ts">
	import ThemeSelector from '$lib/components/externals/theme-selector/theme-selector.svelte';
	import DarkMode from '$lib/components/externals/dark-mode/dark-mode.svelte';
	import UserProfile from '../user-profile/user-profile.svelte';
	import Button from '$lib/components/internals/button/button.svelte';
	import { page } from '$app/state';
	import IconMenu2 from '@tabler/icons-svelte/icons/menu-2';
	import * as Sheet from '$lib/components/internals/sheet/index';
	import { buttonVariants } from '$lib/components/internals/button/button.svelte';
	import { innerWidth } from 'svelte/reactivity/window';

	const routes = [
		{
			label: 'Home',
			href: '/'
		},
		{
			label: 'Courses',
			href: '/courses'
		},
		{
			label: 'Dashboard',
			href: '/dashboard'
		}
	];

	const user = $derived(page.data.user);

	let isMobile = $derived.by(() => {
		if (innerWidth.current && innerWidth.current > 640) return false;
		return false;
	});

	$effect(() => {
		if (page.url.pathname) {
			isMobile = false;
		}
	});
</script>

<nav
	class="sticky top-0 z-40 flex w-full items-center justify-between border-b p-2 backdrop-blur-lg"
>
	<!--Desktop-->
	<div class="container mx-auto hidden items-center justify-between sm:flex">
		<div class="flex items-center gap-4">
			{#each routes as route}
				<a
					href={route.href}
					class="text-muted-foreground hover:text-primary text-sm transition-colors"
				>
					{route.label}
				</a>
			{/each}
		</div>

		<div class="flex items-center gap-2">
			<DarkMode />
			{#if user}
				<UserProfile />
			{:else}
				<Button href="/login" variant="outline">Login</Button>
				<Button>Get Started</Button>
			{/if}
		</div>
	</div>

	<!--Mobile-->
	<div class="container mx-auto flex items-center justify-between sm:hidden">
		<Sheet.Root bind:open={isMobile}>
			<Sheet.Trigger class={buttonVariants({ variant: 'outline', size: 'sm' })}>
				<IconMenu2 class="size-[1.2rem]" />
			</Sheet.Trigger>
			<Sheet.Content side="left" class="flex flex-col justify-between">
				<div class="mt-10 flex flex-col gap-4 p-8">
					{#each routes as route}
						<a
							href={route.href}
							class="text-muted-foreground hover:text-primary p-2 text-sm transition-colors"
						>
							{route.label}
						</a>
					{/each}
				</div>

				<div class="flex flex-col p-10">
					{#if user}
						<UserProfile />
					{:else}
						<Button href="/login" variant="outline">Login</Button>
					{/if}
				</div>
			</Sheet.Content>
		</Sheet.Root>

		<div class="flex items-center gap-2">
			<DarkMode />
			<Button>Get Started</Button>
		</div>
	</div>
</nav>
