/**
 * @file middleware.ts
 * @description Global Next.js Middleware orchestrating security layers.
 * @author Senior Engineer Logic
 */

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { SECURITY_HEADERS } from './core/security/config/security-headers';
import { checkRateLimit } from './core/security/middleware/rate-limit.middleware';
import { logRequest } from './core/security/middleware/logger.middleware';

export function middleware(request: NextRequest) {
    // 1. Log Request
    logRequest(request);

    // 2. Rate Limiting
    if (!checkRateLimit(request)) {
        return new NextResponse('Too Many Requests', { status: 429 });
    }

    const response = NextResponse.next();

    // 3. Inject Security Headers
    Object.entries(SECURITY_HEADERS).forEach(([key, value]) => {
        response.headers.set(key, value);
    });

    return response;
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
};
