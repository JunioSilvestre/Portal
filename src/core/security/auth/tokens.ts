/**
 * @file tokens.ts
 * @description JWT generation and verification logic.
 * @author Senior Engineer Logic
 */

// import { SECURITY_CONSTANTS } from '../config/constants';
import { TokenPayload } from '../types/auth.types';
// import jwt from 'jsonwebtoken';

// const JWT_SECRET = process.env.JWT_SECRET || 'super-secret-key';

export const generateAccessToken = (payload: TokenPayload): string => {
    // return jwt.sign(payload, JWT_SECRET, { expiresIn: SECURITY_CONSTANTS.TOKEN_EXPIRY });
    return `mock_access_token_${payload.sub}`;
};

export const generateRefreshToken = (payload: TokenPayload): string => {
    // return jwt.sign(payload, JWT_SECRET, { expiresIn: SECURITY_CONSTANTS.REFRESH_TOKEN_EXPIRY });
    return `mock_refresh_token_${payload.sub}`;
};

export const verifyToken = (token: string): TokenPayload | null => {
    try {
        // return jwt.verify(token, JWT_SECRET) as TokenPayload;
        if (token.startsWith('mock_')) return { sub: '123', role: 'admin', iat: Date.now(), exp: Date.now() + 3600 };
        return null;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (_error) {
        return null;
    }
};
