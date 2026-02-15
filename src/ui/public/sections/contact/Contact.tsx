/**
 * @file Contact.tsx
 * @description Componente da Seção Contato (Formulário + Info).
 * @author Senior Engineer Logic
 * 
 * Funcionalidades:
 * 1. Formulário Interativo: Campos controlados para captura de leads.
 * 2. Layout Assimétrico: Informações à esquerda, formulário à direita.
 * 3. Validação Básica: HTML5 required attributes.
 */

'use client';

import styles from './contact.module.css';
import { Mail, MapPin, Phone } from 'lucide-react';

export const Contact = () => {
    return (
        <section id="contact" className={styles.contactContainer} aria-label="Contact Us">
            <div className={styles.contentWrapper}>

                {/* Coluna Esquerda: Informações de Contato */}
                <div className={styles.infoColumn}>
                    <div>
                        <h2 className={styles.sectionTitle}>Let&apos;s Talk</h2>
                        <p className={styles.sectionSubtitle}>
                            Have a project in mind? We&apos;d love to hear about it.
                            Send us a message or visit our office.
                        </p>
                    </div>

                    <div className={styles.contactDetails}>
                        <div className={styles.detailItem}>
                            <Mail className={styles.icon} />
                            <span>hello@portal.com</span>
                        </div>
                        <div className={styles.detailItem}>
                            <Phone className={styles.icon} />
                            <span>+55 (11) 99999-9999</span>
                        </div>
                        <div className={styles.detailItem}>
                            <MapPin className={styles.icon} />
                            <span>Av. Paulista, 1000 - São Paulo, SP</span>
                        </div>
                    </div>
                </div>

                {/* Coluna Direita: Formulário */}
                <div className={styles.formColumn}>
                    <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                        <div className={styles.formGroup}>
                            <label htmlFor="name" className={styles.label}>Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className={styles.input}
                                placeholder="Your Name"
                                required
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="email" className={styles.label}>Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className={styles.input}
                                placeholder="name@company.com"
                                required
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="message" className={styles.label}>Message</label>
                            <textarea
                                id="message"
                                name="message"
                                className={styles.textarea}
                                placeholder="Tell us about your project..."
                                required
                            />
                        </div>

                        <button type="submit" className={styles.submitButton}>
                            Send Message
                        </button>
                    </form>
                </div>

            </div>
        </section>
    );
};
