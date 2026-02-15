/**
 * @file roles.ts
 * @description Definition of available roles and their hierarchy.
 * @author Senior Engineer Logic
 */

import { UserRole } from '../types/security.types';

export const ROLES: Record<string, UserRole> = {
    ADMIN: 'admin',
    MANAGER: 'manager',
    AUDITOR: 'auditor',
    USER: 'user',
};

export const ROLE_HIERARCHY: Record<UserRole, number> = {
    'admin': 100,
    'manager': 50,
    'auditor': 30,
    'user': 10,
};

export const hasHigherRole = (roleA: UserRole, roleB: UserRole): boolean => {
    return ROLE_HIERARCHY[roleA] > ROLE_HIERARCHY[roleB];
};
