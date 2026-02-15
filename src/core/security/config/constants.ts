/**
 * @file constants.ts
 * @description Security-related constants and configuration values.
 * @author Senior Engineer Logic
 */

export const SECURITY_CONSTANTS = {
    BCRYPT_ROUNDS: 12,
    SESSION_MAX_AGE: 60 * 60 * 24 * 7, // 7 days
    TOKEN_EXPIRY: '15m',
    REFRESH_TOKEN_EXPIRY: '7d',
    PASSWORD_MIN_LENGTH: 12,
    MAX_LOGIN_ATTEMPTS: 5,
    LOCKOUT_DURATION: 60 * 15, // 15 minutes
    CORS_ALLOWED_ORIGINS: process.env.ALLOWED_ORIGINS?.split(',') || ['http://localhost:3000'],
};
