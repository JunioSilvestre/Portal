/**
 * @file useHeader.ts
 * @description Custom hook for Header logic. Handles scroll detection and state management.
 * @usage Used in `Header.tsx` to control layout and style variants.
 * 
 * @senior_improvements
 * 1. Performance: Debounce or Throttle the `scroll` event listener to reduce main thread work (e.g., using `lodash.throttle` or a custom utility).
 * 2. UX: Implement `scrollDirection` detection (up/down) to hide the header when scrolling down and show it when scrolling up (Smart Hide).
 * 3. Reusability: Accept a `threshold` argument (currently hardcoded to 50px) to make the hook more flexible for different pages.
 * 4. Context: If header state needs to be accessed by other components (e.g., a Sidebar), consider moving this state to a React Context.
 */

import { useState, useEffect, useRef, useCallback } from 'react';

export const useHeader = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // --- Auto-close Timer Ref ---
    // Stores the timer ID to clear it on unmount or interaction
    const autoCloseTimerRef = useRef<NodeJS.Timeout | null>(null);

    // --- Scroll Detection (Throttled) ---
    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    setIsScrolled(window.scrollY > 50);
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [setIsScrolled]);

    // --- Mobile Menu Actions ---
    const closeMobileMenu = useCallback(() => setIsMobileMenuOpen(false), []);

    const toggleMobileMenu = useCallback(() => setIsMobileMenuOpen((prev) => !prev), []);

    /**
     * Resets the 10-second auto-close timer.
     * Should be called on any user interaction within the menu.
     */
    const resetAutoCloseTimer = useCallback(() => {
        if (autoCloseTimerRef.current) clearTimeout(autoCloseTimerRef.current);
        // We only want to set the timer if the menu is actually open.
        // However, checking isMobileMenuOpen here might cause dependency cycles if not careful.
        // A ref can track the open state if needed, or we just trust the caller.
        // In this specific flow, we check state inside the effect or rely on the fact 
        // that this is called when interaction happens.

        // Use a ref to access the latest state without triggering re-renders of the function?
        // Or simpler: just standard dependency.
        if (isMobileMenuOpen) {
            autoCloseTimerRef.current = setTimeout(() => {
                console.log('Auto-closing mobile menu due to inactivity.');
                closeMobileMenu();
            }, 10000); // 10 seconds
        }
    }, [isMobileMenuOpen, closeMobileMenu]);

    // --- Mobile Menu Logic ---
    useEffect(() => {
        if (isMobileMenuOpen) {
            // 1. Lock Body Scroll
            document.body.style.overflow = 'hidden';

            // 2. Start Auto-close Timer (10s of inactivity)
            resetAutoCloseTimer();

            // 3. Add Escape Key Listener
            const handleEsc = (e: KeyboardEvent) => {
                if (e.key === 'Escape') closeMobileMenu();
            };
            window.addEventListener('keydown', handleEsc);

            return () => {
                // Cleanup: Unlock scroll, clear timer, remove listener
                document.body.style.overflow = '';
                if (autoCloseTimerRef.current) clearTimeout(autoCloseTimerRef.current);
                window.removeEventListener('keydown', handleEsc);
            };
        }
    }, [isMobileMenuOpen, resetAutoCloseTimer, closeMobileMenu]);

    return {
        isScrolled,
        isMobileMenuOpen,
        toggleMobileMenu,
        closeMobileMenu,
        resetAutoCloseTimer, // Exposed for component interaction
    };
};
