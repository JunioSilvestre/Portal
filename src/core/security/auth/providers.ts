/**
 * @file providers.ts
 * @description OAuth Provider configuration and logic.
 * @author Senior Engineer Logic
 */

export const AUTH_PROVIDERS = {
    GOOGLE: {
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        scope: ['email', 'profile'],
    },
    GITHUB: {
        clientId: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
        scope: ['user:email'],
    }
};

export const getProviderAuthUrl = (provider: keyof typeof AUTH_PROVIDERS) => {
    // Logic to generate OAuth URL
    return `https://auth.example.com/${provider.toLowerCase()}`;
};
