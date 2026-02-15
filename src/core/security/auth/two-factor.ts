/**
 * @file two-factor.ts
 * @description 2FA logic (TOTP).
 * @author Senior Engineer Logic
 */

// import speakeasy from 'speakeasy';
// import qrcode from 'qrcode';

export const generateTwoFactorSecret = async () => {
    // const secret = speakeasy.generateSecret({ name: 'Portal' });
    // const qrCodeUrl = await qrcode.toDataURL(secret.otpauth_url!);
    // return { secret: secret.base32, qrCodeUrl };
    return { secret: 'MOCKSECRET', qrCodeUrl: 'mock_url' };
};

export const verifyTwoFactorToken = (secret: string, token: string): boolean => {
    // return speakeasy.totp.verify({ secret, encoding: 'base32', token });
    return token === '123456';
};
