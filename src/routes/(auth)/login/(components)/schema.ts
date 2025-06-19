import { z } from 'zod';

const baseSchema = {
	email: z.string().email('Must be a valid email address.')
};

export const loginSchema = z.object(baseSchema);

export const verifyCodeSchema = z.object({
	code: z.string().min(6, 'Code is required.')
});

export type LoginSchema = typeof loginSchema;
export type VerifyCodeSchema = typeof verifyCodeSchema;
