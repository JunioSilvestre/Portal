/**
 * @file providers.tsx
 * @description Client-side providers wrapper.
 * Wraps the application with:
 * - NextThemesProvider: Handles light/dark mode theming.
 * - Toaster: Displays toast notifications (Sonner).
 */

"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { Toaster } from "sonner"

export function Providers({ children, ...props }: React.ComponentProps<typeof NextThemesProvider>) {
    return (
        <NextThemesProvider {...props}>
            {children}
            <Toaster />
        </NextThemesProvider>
    )
}
