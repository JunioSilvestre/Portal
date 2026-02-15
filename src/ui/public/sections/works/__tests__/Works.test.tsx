/**
 * @file Works.test.tsx
 * @description Testes Unitários para a Seção Works.
 */

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Works } from '../Works';

// Mock Framer Motion
jest.mock('framer-motion', () => ({
    motion: {
        div: ({ children, className, onClick }: { children: React.ReactNode; className?: string; onClick?: () => void }) => (
            <div className={className} onClick={onClick}>{children}</div>
        ),
    },
    AnimatePresence: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

describe('Works Section', () => {
    it('renders the section title', () => {
        render(<Works />);
        expect(screen.getByText('Selected Works')).toBeInTheDocument();
    });

    it('filters projects when a category is clicked', () => {
        render(<Works />);

        // Inicialmente mostra todos
        expect(screen.getByText('E-Commerce Dashboard')).toBeInTheDocument(); // Web App
        expect(screen.getByText('Fitness Tracker')).toBeInTheDocument(); // Mobile App

        // Clica no filtro "Mobile App"
        const mobileFilter = screen.getByRole('button', { name: 'Mobile App' });
        fireEvent.click(mobileFilter);

        // Deve mostrar apenas Mobile Apps
        expect(screen.getByText('Fitness Tracker')).toBeInTheDocument();
        // Não deve mostrar Web Apps (dependendo de como o mock remove do DOM, no React Testing Library com AnimatePresence mockado pode ser trick, mas vamos tentar o queryByText)
        expect(screen.queryByText('E-Commerce Dashboard')).not.toBeInTheDocument();
    });
});
