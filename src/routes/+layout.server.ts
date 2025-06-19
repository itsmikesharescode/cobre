import { USER_CONFIG_COOKIE_NAME, userConfigSchema } from '$lib/user-config.svelte';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ cookies }) => {
	const sidebarState = cookies.get('sidebar_state') === 'true' ? true : false;

	const userConfigCookie = cookies.get(USER_CONFIG_COOKIE_NAME);
	const parsedUserConfig = userConfigCookie ? JSON.parse(userConfigCookie) : {};
	const userConfig = userConfigSchema.parse(parsedUserConfig);

	return { sidebarState, userConfig };
};
