/**
 * @file security.types.ts
 * @description Shared types for security modules.
 * @author Senior Engineer Logic
 */

export type UserRole = 'admin' | 'user' | 'manager' | 'auditor';

export interface Permission {
    resource: string;
    action: 'create' | 'read' | 'update' | 'delete';
}

export interface SecurityContext {
    userId?: string;
    role?: UserRole;
    ip: string;
    userAgent: string;
}
