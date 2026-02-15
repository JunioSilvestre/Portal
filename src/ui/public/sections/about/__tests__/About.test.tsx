/**
 * @file About.test.tsx
 * @description Testes Unitários para a Seção About.
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import { About } from '../About';

// Mock Framer Motion
jest.mock('framer-motion', () => ({
    motion: {
        div: ({ children, className }: { children: React.ReactNode; className?: string }) => <div className={className}>{children}</div>,
    },
}));

describe('About Section', () => {
    it('renders the section title', () => {
        render(<About />);
        expect(screen.getByText('Our Journey')).toBeInTheDocument();
    });

    it('renders usage statistics', () => {
        render(<About />);
        // Verifica se alguns números estatísticos estão presentes
        expect(screen.getByText('150+')).toBeInTheDocument();
        expect(screen.getByText('98%')).toBeInTheDocument();
    });

    it('renders timeline items', () => {
        render(<About />);
        expect(screen.getByText('Founded')).toBeInTheDocument();
        expect(screen.getByText('Global Expansion')).toBeInTheDocument();
    });
});
