/**
 * @file Hero.tsx
 * @description Componente da Seção Hero (Destaque Inicial).
 * @author Senior Engineer Logic
 * 
 * Funcionalidades:
 * 1. Design Impactante: Título grande, gradientes e elementos flutuantes (Blobs).
 * 2. CTA Claro: Botões de ação principal ("Get Started") e secundária ("View Work").
 * 3. Responsivo: Ajusta tamanho de fonte e layout para mobile/desktop.
 * 4. Acessibilidade: Uso semântico de <section> e <h1>.
 */

'use client'; // Necessário para interatividade (se houver) e animações futuras

import Link from 'next/link';
import styles from './hero.module.css';
import { motion } from 'framer-motion'; // Vamos adicionar um pouco de "tempero" com animação de entrada

export const Hero = () => {
  return (
    <section className={styles.heroContainer} aria-label="Introduction">
      {/* Elementos Visuais de Fundo (Blobs e Overlay) */}
      <div className={styles.backgroundOverlay} />
      <div className={`${styles.decorationBlob} ${styles.blob1}`} />
      <div className={`${styles.decorationBlob} ${styles.blob2}`} />

      {/* Conteúdo Principal (Texto e CTAs) */}
      <div className={styles.content}>

        {/* Badge Animado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={styles.badge}
        >
          🚀 Welcome to the Future using Next.js 14
        </motion.div>

        {/* Título Principal */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={styles.title}
        >
          Building Digital Experiences <br />
          That Matter.
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={styles.subtitle}
        >
          We craft premium web applications with a focus on performance,
          accessibility, and stunning aesthetics. Let&apos;s build something amazing together.
        </motion.p>

        {/* Botões de Ação (CTAs) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className={styles.ctaGroup}
        >
          <Link href="/get-starting">
            <button className={styles.primaryButton}>
              Get Started
            </button>
          </Link>

          <Link href="/#works">
            <button className={styles.secondaryButton}>
              View Case Studies
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
