/**
 * @file auth.types.ts
 * @description Authentication related types.
 * @author Senior Engineer Logic
 */

export interface Session {
    id: string;
    userId: string;
    expiresAt: Date;
    ipAddress: string;
    userAgent: string;
}

export interface TokenPayload {
    sub: string; // Subject (User ID)
    role: string;
    iat: number; // Issued At
    exp: number; // Expiration
}

export interface LoginResponse {
    accessToken: string;
    refreshToken: string;
    user: {
        id: string;
        email: string;
        name: string;
    };
}
