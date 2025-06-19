<script lang="ts">
	import Login from './(components)/login.svelte';
	import VerifyCode from './(components)/verify-code.svelte';
	import { page } from '$app/state';

	const { data } = $props();

	const pageParam = $derived(page.url.searchParams.get('step'));
</script>

<main class="relative flex h-screen flex-col items-center justify-center gap-4">
	<section class="flex items-center gap-2">
		<div class="size-12 rounded-lg bg-red-300"></div>
		<h3 class="text-lg font-semibold">Mike LMS.</h3>
	</section>
	{#if pageParam === 'code'}
		<VerifyCode verifyCodeForm={data.verifyCodeForm} />
	{:else}
		<Login loginForm={data.loginForm} />
	{/if}

	<section
		class="text-muted-foreground flex max-w-xs flex-wrap items-center justify-center gap-1 text-sm"
	>
		<p>By clicking continue, you agree to our</p>
		<a href="/terms-of-service" class="hover:text-primary underline transition-all"
			>Terms of Service</a
		>
		<p>and</p>
		<a href="/privacy-policy" class="hover:text-primary underline transition-all">Privacy Policy</a>
	</section>
</main>
