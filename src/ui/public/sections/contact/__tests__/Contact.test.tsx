/**
 * @file Contact.test.tsx
 * @description Testes Unitários para a Seção Contact.
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import { Contact } from '../Contact';

describe('Contact Section', () => {
    it('renders contact information', () => {
        render(<Contact />);
        expect(screen.getByText("Let's Talk")).toBeInTheDocument();
        expect(screen.getByText('hello@portal.com')).toBeInTheDocument();
    });

    it('renders the contact form fields', () => {
        render(<Contact />);
        expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Message/i)).toBeInTheDocument();
    });

    it('renders the submit button', () => {
        render(<Contact />);
        expect(screen.getByRole('button', { name: /Send Message/i })).toBeInTheDocument();
    });
});
