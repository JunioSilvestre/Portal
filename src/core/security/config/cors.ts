/**
 * @file cors.ts
 * @description CORS (Cross-Origin Resource Sharing) Configuration.
 * @author Senior Engineer Logic
 */

import { SECURITY_CONSTANTS } from './constants';

export const CORS_OPTIONS = {
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
    credentials: true,
    origin: (origin: string | undefined, callback: (err: Error | null, allow?: boolean) => void) => {
        if (!origin || SECURITY_CONSTANTS.CORS_ALLOWED_ORIGINS.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
};
