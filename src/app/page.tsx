/**
 * @file page.tsx
 * @description Página Inicial (Landing Page) da Aplicação.
 * @author Senior Engineer Logic
 * 
 * Estrutura:
 * Compõe todas as seções principais (Hero, About, Works, Contact) em uma única página scrollável.
 * Cada seção possui seu próprio ID para navegação via âncoras (Smooth Scroll).
 */

import { Hero } from "@/ui/public/sections/hero/Hero";
import { About } from "@/ui/public/sections/about/About";
import { Works } from "@/ui/public/sections/works/Works";
import { Contact } from "@/ui/public/sections/contact/Contact";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Seção 1: Hero (Destaque) */}
      <Hero />

      {/* Seção 2: About (Sobre Nós e Timeline) */}
      <About />

      {/* Seção 3: Works (Portfólio com Filtros) */}
      <Works />

      {/* Seção 4: Contact (Formulário e Info) */}
      <Contact />
    </main>
  );
}
