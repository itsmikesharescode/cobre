import { browser } from '$app/environment';
import type { LayoutLoad } from './$types.js';

export const load: LayoutLoad = ({ data }) => {
	if (!browser) return data;

	return { ...data, userConfig: data.userConfig };
};
