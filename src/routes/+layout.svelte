<script lang="ts">
	import '../app.css';
	import { Toaster } from '$lib/components/internals/sonner/index';
	import Nav from '$lib/components/externals/nav/nav.svelte';
	import { ModeWatcher, setTheme } from 'mode-watcher';
	import { UserConfig, UserConfigContext } from '$lib/user-config.svelte';
	import { watch } from 'runed';
	import { page } from '$app/state';
	import Footer from '$lib/components/externals/footer/footer.svelte';

	let { children, data } = $props();

	const userConfig = UserConfigContext.set(new UserConfig(data.userConfig));
	const themeColors = { light: '#ffffff', dark: '#09090b' };
	const modeClasses = $derived([
		`layout-${userConfig.current.layout}`,
		`theme-${userConfig.current.activeTheme}`
	]);

	watch.pre(
		() => userConfig.current.activeTheme,
		() => {
			setTheme(userConfig.current.activeTheme);
		}
	);
</script>

<ModeWatcher
	defaultMode="system"
	defaultTheme={userConfig.current.activeTheme}
	{themeColors}
	darkClassNames={['dark', ...modeClasses]}
	lightClassNames={['light', ...modeClasses]}
/>
<Toaster position="bottom-center" />
{#if page.url.pathname !== '/login' && !page.url.pathname.startsWith('/admin')}
	<Nav />
{/if}
{@render children()}
{#if !page.url.pathname.startsWith('/admin')}
	<Footer />
{/if}
