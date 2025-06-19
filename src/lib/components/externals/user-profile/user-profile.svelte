<script lang="ts">
	import * as Avatar from '$lib/components/internals/avatar/index';
	import * as DropdownMenu from '$lib/components/internals/dropdown-menu/index.js';
	import IconChevronDown from '@tabler/icons-svelte/icons/chevron-down';
	import IconHome from '@tabler/icons-svelte/icons/home';
	import IconBook from '@tabler/icons-svelte/icons/book';
	import IconQrCode from '@tabler/icons-svelte/icons/qrcode';
	import IconLogout from '@tabler/icons-svelte/icons/logout';
	import { buttonVariants } from '$lib/components/internals/button/button.svelte';

	const routes = [
		{
			label: 'Home',
			icon: IconHome,
			href: '/'
		},
		{
			label: 'Courses',
			icon: IconBook,
			href: '/courses'
		},
		{
			label: 'Dashboard',
			icon: IconQrCode,
			href: '/dashboard'
		}
	];
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger
		class={buttonVariants({ variant: 'secondary', size: 'sm', class: 'flex items-center gap-2' })}
	>
		<p class="text-muted-foreground text-sm">myemail@gmail.com</p>
		<Avatar.Root>
			<Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
			<Avatar.Fallback>CN</Avatar.Fallback>
		</Avatar.Root>
		<IconChevronDown class="text-muted-foreground size-3" />
	</DropdownMenu.Trigger>
	<DropdownMenu.Content>
		<DropdownMenu.Group>
			{#each routes as route}
				<DropdownMenu.Item>
					<route.icon class="size-4" />
					{route.label}
				</DropdownMenu.Item>
			{/each}
			<DropdownMenu.Separator />
			<DropdownMenu.Item>
				<IconLogout class="size-4" />
				Logout
			</DropdownMenu.Item>
		</DropdownMenu.Group>
	</DropdownMenu.Content>
</DropdownMenu.Root>
