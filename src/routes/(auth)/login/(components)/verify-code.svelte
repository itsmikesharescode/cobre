<script lang="ts">
	import { superForm, type SuperValidated } from 'sveltekit-superforms';
	import type { Infer } from 'sveltekit-superforms';
	import { verifyCodeSchema, type VerifyCodeSchema } from './schema';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import { toast } from 'svelte-sonner';
	import * as InputOTP from '$lib/components/internals/input-otp/index';
	import * as Form from '$lib/components/internals/form/index';
	import Button from '$lib/components/internals/button/button.svelte';
	import IconArrowLeft from '@tabler/icons-svelte/icons/arrow-left';
	import { REGEXP_ONLY_DIGITS } from 'bits-ui';
	interface Props {
		verifyCodeForm: SuperValidated<Infer<VerifyCodeSchema>>;
	}

	const { verifyCodeForm }: Props = $props();

	const form = superForm(verifyCodeForm, {
		validators: zodClient(verifyCodeSchema),
		id: crypto.randomUUID(),
		onUpdate: async ({ result, form: internal }) => {
			const { status, data } = result;
			switch (status) {
				case 200:
					toast.success(data.msg);
					break;

				case 401:
					toast.error(data.msg);
					break;
			}
		}
	});

	const { form: formData, enhance, submitting } = form;
</script>

<section class="bg-secondary flex w-full max-w-sm flex-col gap-6 rounded-lg p-6">
	<div class="flex flex-col gap-2">
		<p class="text-center text-lg">Please check your email</p>
		<span class="text-muted-foreground text-center text-sm">
			We have sent a verification code to your email. You can either click the link in the email or
			enter the code below.
		</span>
	</div>

	<form method="POST" action="?/verifyCodeEvent" use:enhance class="flex flex-col gap-2">
		<Form.Field {form} name="code" class="flex flex-col items-center justify-center">
			<Form.Control>
				{#snippet children({ props })}
					<InputOTP.Root
						{...props}
						maxlength={6}
						pattern={REGEXP_ONLY_DIGITS}
						bind:value={$formData.code}
					>
						{#snippet children({ cells })}
							<InputOTP.Group class="bg-background rounded-lg">
								{#each cells.slice(0, 3) as cell (cell)}
									<InputOTP.Slot {cell} />
								{/each}
							</InputOTP.Group>
							<InputOTP.Separator />
							<InputOTP.Group class="bg-background rounded-lg">
								{#each cells.slice(3, 6) as cell (cell)}
									<InputOTP.Slot {cell} />
								{/each}
							</InputOTP.Group>
						{/snippet}
					</InputOTP.Root>
				{/snippet}
			</Form.Control>
			<Form.Description>Please enter the 6 digit code sent to your email.</Form.Description>
			<Form.FieldErrors />
		</Form.Field>
		<Form.Button>Confirm</Form.Button>
	</form>

	<div class="flex flex-wrap items-center justify-center gap-2">
		<p class="text-muted-foreground text-sm">Didn't recieve the email?</p>
		<Button variant="link">Resend code</Button>
	</div>

	<Button href="/login" variant="link">Back to login</Button>
</section>
