/**
 * @file user.schema.ts
 * @description Zod Schema for User validation.
 * @author Senior Engineer Logic
 */

import { z } from 'zod';

export const userRegistrationSchema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    password: z.string().min(12).regex(/[A-Z]/, 'Must contain uppercase').regex(/[0-9]/, 'Must contain number'),
});

export const userLoginSchema = z.object({
    email: z.string().email(),
    password: z.string(),
});
