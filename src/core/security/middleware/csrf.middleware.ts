/**
 * @file csrf.middleware.ts
 * @description CSRF Token verification (Double Submit Cookie pattern).
 * @author Senior Engineer Logic
 */

import { NextRequest } from 'next/server';

export const verifyCsrfToken = (req: NextRequest): boolean => {
    // Skip for safe methods
    if (['GET', 'HEAD', 'OPTIONS'].includes(req.method)) {
        return true;
    }

    const csrfCookie = req.cookies.get('csrf-token')?.value;
    const csrfHeader = req.headers.get('x-csrf-token');

    if (!csrfCookie || !csrfHeader || csrfCookie !== csrfHeader) {
        return false;
    }

    return true;
};
