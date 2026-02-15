/**
 * @file sanitization.ts
 * @description Input sanitization utilities to prevent XSS/Injection.
 * @author Senior Engineer Logic
 */

// import { escape } from 'querystring';

/**
 * Basic HTML escape to prevent XSS.
 * For robust sanitization, use a library like DOMPurify or sanitize-html.
 */
export const sanitizeInput = (input: string): string => {
    return input
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
};

export const sanitizeObject = (obj: Record<string, unknown>): Record<string, unknown> => {
    const newObj: Record<string, unknown> = {};
    for (const key in obj) {
        if (typeof obj[key] === 'string') {
            newObj[key] = sanitizeInput(obj[key] as string);
        } else if (typeof obj[key] === 'object' && obj[key] !== null) {
            newObj[key] = sanitizeObject(obj[key] as Record<string, unknown>);
        } else {
            newObj[key] = obj[key];
        }
    }
    return newObj;
};
