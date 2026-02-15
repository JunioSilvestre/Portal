/**
 * @file permissions.ts
 * @description Granular permissions definition.
 * @author Senior Engineer Logic
 */

import { Permission } from '../types/security.types';

export const PERMISSIONS = {
    USERS: {
        CREATE: { resource: 'user', action: 'create' } as Permission,
        READ: { resource: 'user', action: 'read' } as Permission,
        UPDATE: { resource: 'user', action: 'update' } as Permission,
        DELETE: { resource: 'user', action: 'delete' } as Permission,
    },
    REPORTS: {
        READ: { resource: 'report', action: 'read' } as Permission,
    },
};
