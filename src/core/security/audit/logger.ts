/**
 * @file logger.ts
 * @description Centralized audit logger.
 * @author Senior Engineer Logic
 */

import { SecurityContext } from '../types/security.types';

type LogLevel = 'info' | 'warn' | 'error' | 'audit';

export const logSecurityEvent = (level: LogLevel, message: string, context?: SecurityContext, metadata?: Record<string, unknown>) => {
    const timestamp = new Date().toISOString();

    // In production, this would ship to ELK/Datadog/CloudWatch
    console.log(JSON.stringify({
        timestamp,
        level,
        message,
        userId: context?.userId || 'anonymous',
        ip: context?.ip || 'unknown',
        role: context?.role || 'none',
        ...metadata
    }));
};
