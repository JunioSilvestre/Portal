/**
 * @file logger.middleware.ts
 * @description Middleware for logging requests.
 * @author Senior Engineer Logic
 */

import { NextRequest } from 'next/server';

export const logRequest = (req: NextRequest) => {
    console.log(`[${req.method}] ${req.nextUrl.pathname} - IP: ${req.ip || 'unknown'}`);
};
