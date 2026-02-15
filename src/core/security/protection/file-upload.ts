/**
 * @file file-upload.ts
 * @description Secure file upload validation.
 * @author Senior Engineer Logic
 */

const ALLOWED_MIME_TYPES = ['image/jpeg', 'image/png', 'application/pdf'];
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

export interface FileValidationResult {
    isValid: boolean;
    error?: string;
}

export const validateFile = (file: File): FileValidationResult => {
    if (file.size > MAX_FILE_SIZE) {
        return { isValid: false, error: 'File size exceeds 5MB limit.' };
    }

    if (!ALLOWED_MIME_TYPES.includes(file.type)) {
        return { isValid: false, error: 'Invalid file type. Only JPG, PNG, and PDF are allowed.' };
    }

    // Additional checks (magic bytes) would go here for stricter validation
    return { isValid: true };
};
