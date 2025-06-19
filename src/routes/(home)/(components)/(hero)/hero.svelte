<script lang="ts">
	import Button from '$lib/components/internals/button/button.svelte';
</script>

<section class="flex flex-col gap-4">
	<div class="flex flex-col items-center gap-2">
		<p class="text-muted-foreground border p-2 text-xs font-semibold">
			Your Online Learning Web App
		</p>
		<h1 class="text-center text-6xl font-bold">Elevate Your Leaning Experience</h1>
		<p class="text-muted-foreground mt-10 max-w-2xl text-center">
			Discover a new way to learn with our modern, interactive learning management system. Access
			high-quality courses anytime, anywhere.
		</p>
	</div>

	<div class="mt-10 flex flex-wrap items-center justify-center gap-2">
		<Button>Explore Courses</Button>
		<Button>Sign In</Button>
	</div>
</section>
