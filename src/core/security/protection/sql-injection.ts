/**
 * @file sql-injection.ts
 * @description SQL Injection prevention helpers.
 * @author Senior Engineer Logic
 */

/**
 * Validates that a sort column is allowed.
 * useful for dynamic 'ORDER BY' clauses which are common injection points.
 */
export const validateSortColumn = (column: string, allowedColumns: string[]): string => {
    if (!allowedColumns.includes(column)) {
        throw new Error(`Invalid sort column: ${column}`);
    }
    return column;
};

/**
 * Basic pattern matcher for SQL keywords in input (Primitive detection).
 * Prefer using ORM/Parameterized queries instead of this manual check.
 */
export const detectSqlInjection = (input: string): boolean => {
    const sqlPattern = /(\b(SELECT|INSERT|UPDATE|DELETE|DROP|UNION|ALTER)\b)|(['"])/i;
    return sqlPattern.test(input);
};
