/**
 * @file auth.middleware.ts
 * @description Authentication verification logic for middleware.
 * @author Senior Engineer Logic
 */

import { NextRequest } from 'next/server';
import { verifyToken } from '../auth/tokens';
import { SecurityContext, UserRole } from '../types/security.types';

export const authenticateRequest = (req: NextRequest): SecurityContext | null => {
    const authHeader = req.headers.get('Authorization');

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return null;
    }

    const token = authHeader.split(' ')[1];
    const payload = verifyToken(token);

    if (!payload) {
        return null;
    }

    return {
        userId: payload.sub,
        role: payload.role as UserRole,
        ip: req.ip || 'unknown',
        userAgent: req.headers.get('user-agent') || 'unknown',
    };
};
