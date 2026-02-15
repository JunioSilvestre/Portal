/**
 * @file headers.ts
 * @description Configuration for HTTP Security Headers.
 * @author Senior Engineer Logic
 */

export const SECURITY_HEADERS = {
    // Content Security Policy
    // Allows scripts from verified sources (analytics, etc.)
    'Content-Security-Policy': [
        "default-src 'self'",
        "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://vercel.live", // Next.js specific needs
        "style-src 'self' 'unsafe-inline'",
        "img-src 'self' blob: data:",
        "font-src 'self'",
        "object-src 'none'",
        "base-uri 'self'",
        "form-action 'self'",
        "frame-ancestors 'none'",
        "upgrade-insecure-requests",
    ].join('; '),

    // Prevents the browser from MIME-sniffing a response away from the declared content-type
    'X-Content-Type-Options': 'nosniff',

    // Clickjacking protection
    'X-Frame-Options': 'DENY',

    // Cross-site scripting (XSS) filter
    'X-XSS-Protection': '1; mode=block',

    // Referrer Policy
    'Referrer-Policy': 'strict-origin-when-cross-origin',

    // Strict Transport Security (HSTS)
    // Ensures the browser only contacts the server over HTTPS
    'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload',

    // Controls how much information the browser includes with navigations away from a document
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
};
