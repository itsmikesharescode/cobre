import { superValidate } from 'sveltekit-superforms';
import type { Actions, PageServerLoad } from './$types';
import { loginSchema, verifyCodeSchema } from './(components)/schema';
import { zod } from 'sveltekit-superforms/adapters';
import { fail } from '@sveltejs/kit';

export const load: PageServerLoad = async () => {
	return {
		loginForm: await superValidate(zod(loginSchema)),
		verifyCodeForm: await superValidate(zod(verifyCodeSchema))
	};
};

export const actions: Actions = {
	loginEvent: async ({ request }) => {
		const form = await superValidate(request, zod(loginSchema));

		if (!form.valid) return fail(400, { form });

		return { form, msg: 'Login successful' };
	},

	verifyCodeEvent: async ({ request }) => {
		const form = await superValidate(request, zod(verifyCodeSchema));
		console.log(form.data);
		if (!form.valid) return fail(400, { form });

		return { form, msg: 'Code verified' };
	}
};
