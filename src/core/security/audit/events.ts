/**
 * @file events.ts
 * @description Definition of auditing events.
 * @author Senior Engineer Logic
 */

export const AUDIT_EVENTS = {
    LOGIN_SUCCESS: 'auth.login.success',
    LOGIN_FAILURE: 'auth.login.failure',
    LOGOUT: 'auth.logout',
    USER_CREATED: 'user.created',
    USER_DELETED: 'user.deleted',
    PASSWORD_CHANGED: 'user.password_changed',
    ACCESS_DENIED: 'security.access_denied',
    SENSITIVE_DATA_ACCESSED: 'security.sensitive_data_accessed',
};
