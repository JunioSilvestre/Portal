/**
 * @file rbac.ts
 * @description Role-Based Access Control logic.
 * @author Senior Engineer Logic
 */

import { UserRole, Permission } from '../types/security.types';
import { PERMISSIONS } from './permissions';

// Map roles to permissions
const ROLE_PERMISSIONS: Record<UserRole, Permission[]> = {
    admin: Object.values(PERMISSIONS.USERS), // Admin has all user permissions
    manager: [PERMISSIONS.USERS.READ, PERMISSIONS.USERS.UPDATE],
    auditor: [PERMISSIONS.USERS.READ, PERMISSIONS.REPORTS.READ],
    user: [],
};

export const hasPermission = (role: UserRole, requiredPermission: Permission): boolean => {
    const permissions = ROLE_PERMISSIONS[role] || [];
    return permissions.some(
        (p) => p.resource === requiredPermission.resource && p.action === requiredPermission.action
    );
};
