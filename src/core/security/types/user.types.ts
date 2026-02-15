/**
 * @file user.types.ts
 * @description User entity types.
 * @author Senior Engineer Logic
 */

import { UserRole } from './security.types';

export interface User {
    id: string;
    email: string;
    passwordHash: string;
    name: string;
    role: UserRole;
    isTwoFactorEnabled: boolean;
    isEmailVerified: boolean;
    createdAt: Date;
    updatedAt: Date;
    lastLoginAt?: Date;
}
