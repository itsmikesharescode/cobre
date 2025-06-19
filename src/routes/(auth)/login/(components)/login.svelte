<script lang="ts">
	import * as Form from '$lib/components/internals/form/index';
	import { Input } from '$lib/components/internals/input/index';
	import { superForm, type Infer, type SuperValidated } from 'sveltekit-superforms';
	import { loginSchema, type LoginSchema } from './schema';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import { toast } from 'svelte-sonner';
	import Button from '$lib/components/internals/button/button.svelte';
	import { Separator } from '$lib/components/internals/separator/index';
	import IconBrandGoogle from '@tabler/icons-svelte/icons/brand-google';
	import IconArrowLeft from '@tabler/icons-svelte/icons/arrow-left';
	import { goto } from '$app/navigation';

	interface Props {
		loginForm: SuperValidated<Infer<LoginSchema>>;
	}

	const { loginForm }: Props = $props();

	const form = superForm(loginForm, {
		validators: zodClient(loginSchema),
		id: crypto.randomUUID(),
		onUpdate: async ({ result }) => {
			const { status, data } = result;
			switch (status) {
				case 200:
					toast.success(data.msg);
					await goto('?step=code', { replaceState: true });
					break;

				case 401:
					toast.error(data.msg);
					break;
			}
		}
	});

	const { form: formData, enhance, submitting } = form;
</script>

<Button href="/" class="absolute top-4 left-4" variant="secondary">
	<IconArrowLeft />
	Back
</Button>

<section class="bg-secondary flex w-full max-w-sm flex-col gap-6 rounded-lg p-6">
	<div class="flex flex-col gap-2">
		<h2 class="text-2xl font-semibold">Hello!</h2>
		<p class="text-muted-foreground text-sm">Login with your Google Account</p>
	</div>
	<Button>
		<IconBrandGoogle />
		Sign in with Google Account
	</Button>

	<div class="relative flex items-center justify-center">
		<Separator />
		<p class="bg-secondary absolute p-2 text-sm">Or continue with</p>
	</div>

	<form method="POST" action="?/loginEvent" use:enhance class="flex flex-col gap-2">
		<Form.Field {form} name="email">
			<Form.Control>
				{#snippet children({ props })}
					<Form.Label>Email</Form.Label>
					<Input {...props} bind:value={$formData.email} placeholder="abc@example.com" />
				{/snippet}
			</Form.Control>
			<Form.FieldErrors />
		</Form.Field>
		<Form.Button>Continue with email</Form.Button>
	</form>
</section>
