/**
 * @file Hero.test.tsx
 * @description Testes Unitários para a Seção Hero.
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import { Hero } from '../Hero';

// Mock do framer-motion para evitar erros de animação no JSDOM
jest.mock('framer-motion', () => ({
    motion: {
        div: ({ children, className }: { children: React.ReactNode; className?: string }) => <div className={className}>{children}</div>,
        h1: ({ children, className }: { children: React.ReactNode; className?: string }) => <h1 className={className}>{children}</h1>,
        p: ({ children, className }: { children: React.ReactNode; className?: string }) => <p className={className}>{children}</p>,
    },
}));

describe('Hero Section', () => {
    it('renders the main heading', () => {
        render(<Hero />);
        // Verifica se o título principal está presente
        const heading = screen.getByRole('heading', { level: 1, name: /Building Digital Experiences/i });
        expect(heading).toBeInTheDocument();
    });

    it('renders the call to action buttons', () => {
        render(<Hero />);
        // Verifica se os botões existem
        const getStartedBtn = screen.getByRole('button', { name: /Get Started/i });
        const viewWorkBtn = screen.getByRole('button', { name: /View Case Studies/i });

        expect(getStartedBtn).toBeInTheDocument();
        expect(viewWorkBtn).toBeInTheDocument();
    });

    it('renders the welcome badge', () => {
        render(<Hero />);
        expect(screen.getByText(/Welcome to the Future/i)).toBeInTheDocument();
    });
});
