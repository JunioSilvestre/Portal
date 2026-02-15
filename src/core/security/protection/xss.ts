/**
 * @file xss.ts
 * @description Cross-Site Scripting protection utilities.
 * @author Senior Engineer Logic
 */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { sanitizeInput } from '../validation/sanitization';

/**
 * Middleware-like function to sanitize request body.
 * In a real Next.js middleware, this might involve parsing and re-serializing 
 * (which is complex in Edge runtime), so this is often used in API routes.
 */
export const xssFilter = (input: Record<string, unknown>): Record<string, unknown> => {
    const output: Record<string, unknown> = {};
    for (const key in input) {
        if (typeof input[key] === 'string') {
            output[key] = sanitizeInput(input[key] as string);
        } else if (typeof input[key] === 'object' && input[key] !== null) {
            output[key] = xssFilter(input[key] as Record<string, unknown>);
        } else {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            output[key] = input[key];
        }
    }
    return output;
};
