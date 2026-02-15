/**
 * @file About.tsx
 * @description Componente da Seção Sobre Nós (About).
 * @author Senior Engineer Logic
 * 
 * Funcionalidades:
 * 1. Timeline Interativa: Apresenta a história da empresa em cards.
 * 2. Stats Counters: Números de impacto visual.
 * 3. Layout Grid Responsivo.
 */

'use client';

import styles from './about.module.css';
import { motion } from 'framer-motion';

// Mock Data para Timeline
const HISTORY = [
    { year: '2020', title: 'Founded', description: 'Started with a vision to redefine digital experiences for startups.' },
    { year: '2022', title: 'Global Expansion', description: 'Opened offices in multiple continents and doubled the team size.' },
    { year: '2024', title: 'Innovation Award', description: 'Recognized as the most innovative tech partner of the year.' },
    { year: '2026', title: 'Future Vision', description: 'Leading the integration of AI agents in web development workflows.' },
];

const STATS = [
    { label: 'Projects Completed', value: '150+' },
    { label: 'Happy Clients', value: '98%' },
    { label: 'Team Members', value: '45' },
    { label: 'Awards Won', value: '12' },
];

export const About = () => {
    return (
        <section id="about" className={styles.aboutContainer} aria-label="About Us">
            <div className={styles.contentWrapper}>

                {/* Cabeçalho da Seção */}
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>Our Journey</h2>
                    <p className={styles.sectionSubtitle}>
                        From humble beginnings to industry leaders, we are driven by curiosity and excellence.
                    </p>
                </div>

                {/* Grid de Timeline */}
                <div className={styles.timelineGrid}>
                    {HISTORY.map((item, index) => (
                        <motion.div
                            key={item.year}
                            className={styles.card}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <span className={styles.cardYear}>{item.year}</span>
                            <h3 className={styles.cardTitle}>{item.title}</h3>
                            <p className={styles.cardText}>{item.description}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Painel de Estatísticas */}
                <div className={styles.statsContainer}>
                    {STATS.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            className={styles.statItem}
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <span className={styles.statNumber}>{stat.value}</span>
                            <span className={styles.statLabel}>{stat.label}</span>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};
