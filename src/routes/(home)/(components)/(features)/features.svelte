<script lang="ts">
	import * as Card from '$lib/components/internals/card/index.js';
	import IconBrandDatabricks from '@tabler/icons-svelte/icons/brand-databricks';
	import IconRepeat from '@tabler/icons-svelte/icons/repeat';
	import IconChartDots from '@tabler/icons-svelte/icons/chart-dots';
	import IconMessageCircleUser from '@tabler/icons-svelte/icons/message-circle-user';

	const features = [
		{
			icon: IconBrandDatabricks,
			title: 'Comprehensive Courses',
			description: 'Access a wide range of carefully curated courses designed by industry experts.'
		},
		{
			icon: IconRepeat,
			title: 'Interactive Learning',
			description:
				'Engage with interactive content, quizzes, and assignements to enhance your learning experience.'
		},
		{
			icon: IconChartDots,
			title: 'Progress Tracking',
			description:
				'Monitor your progress and achievements with detailed analytics and personalized recommendations.'
		},
		{
			icon: IconMessageCircleUser,
			title: 'Community Support',
			description:
				'Connect with a vibrant community of learners and experts to share knowledge and get help.'
		}
	];
</script>

<section class="grid w-full gap-4 md:grid-cols-2 lg:grid-cols-4">
	{#each features as feature}
		<Card.Root class="w-full ">
			<Card.Header class="gap-4">
				<feature.icon class="size-10" />
				<Card.Title>{feature.title}</Card.Title>
			</Card.Header>
			<Card.Content>
				<Card.Description>{feature.description}</Card.Description>
			</Card.Content>
		</Card.Root>
	{/each}
</section>
