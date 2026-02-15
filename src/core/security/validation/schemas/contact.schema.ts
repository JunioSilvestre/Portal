/**
 * @file contact.schema.ts
 * @description Zod Schema for Contact Form.
 * @author Senior Engineer Logic
 */

import { z } from 'zod';

export const contactFormSchema = z.object({
    name: z.string()
        .min(2, 'Name must be at least 2 characters')
        .max(100, 'Name must be less than 100 characters')
        .regex(/^[a-zA-Z\s]*$/, 'Name must only contain letters and spaces'),

    email: z.string()
        .email('Invalid email address')
        .max(255, 'Email is too long'),

    message: z.string()
        .min(10, 'Message must be at least 10 characters')
        .max(5000, 'Message is too long')
        .trim(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
