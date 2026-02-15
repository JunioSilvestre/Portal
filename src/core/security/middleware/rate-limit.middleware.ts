/**
 * @file rate-limit.middleware.ts
 * @description Rate Limiting logic (InMemory for demo, Redis for production).
 * @author Senior Engineer Logic
 */

import { NextRequest } from 'next/server';

const WINDOW_SIZE = 60 * 1000; // 1 minute
const MAX_REQUESTS = 100; // Per IP

const requestCounts = new Map<string, { count: number; expiresAt: number }>();

export const checkRateLimit = (req: NextRequest): boolean => {
    const ip = req.ip || 'unknown';
    const now = Date.now();

    const record = requestCounts.get(ip);

    if (record && record.expiresAt > now) {
        if (record.count >= MAX_REQUESTS) {
            return false; // Rate limit exceeded
        }
        record.count++;
    } else {
        requestCounts.set(ip, { count: 1, expiresAt: now + WINDOW_SIZE });
    }

    // Cleanup logic would go here to prevent memory leaks in a real map
    return true;
};
