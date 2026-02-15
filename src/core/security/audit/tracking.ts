/**
 * @file tracking.ts
 * @description User activity tracking logic.
 * @author Senior Engineer Logic
 */

import { logSecurityEvent } from './logger';
import { SecurityContext } from '../types/security.types';

export const trackActivity = (event: string, context: SecurityContext, details?: Record<string, unknown>) => {
    logSecurityEvent('audit', `Activity: ${event}`, context, details);
};
