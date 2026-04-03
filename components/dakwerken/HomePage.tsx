/**
 * Van Elk Dakwerken — CRO-Optimized Homepage
 *
 * Page structure (conversion-first order):
 * 1.  StickyHeader      — always-visible CTA + phone
 * 2.  HeroSection       — outcome headline + dual CTA + quick form
 * 3.  TrustBar          — stats + certifications (credibility shock)
 * 4.  ServicesSection   — clickable service cards → dedicated landing pages
 * 5.  USPSection        — objection removal
 * 6.  ProjectsSection   — before/after visual proof
 * 7.  ReviewsSection    — social proof
 * 8.  EmergencyCTA      — urgency capture (leaks, storm damage)
 * 9.  AboutSection      — humanize the brand
 * 10. ContactForm       — final conversion (form + phone + WhatsApp)
 * 11. Footer            — SEO location links
 * 12. FloatingButtons   — persistent WhatsApp + call + offerte CTAs
 *
 * SEO:
 * - H1: "Uw dak in topconditie — binnen 24 uur een offerte"
 * - H2s: service section, USP section, projects, reviews, emergency, about, contact
 * - Location targeting: Den Haag, Rijswijk, Zoetermeer (in copy + footer links)
 *
 * Dependencies: Tailwind CSS, React 18+
 * No external UI libraries required — all components are self-contained.
 */

import React from 'react';
import StickyHeader from './StickyHeader';
import HeroSection from './HeroSection';
import TrustBar from './TrustBar';
import ServicesSection from './ServicesSection';
import USPSection from './USPSection';
import ProjectsSection from './ProjectsSection';
import ReviewsSection from './ReviewsSection';
import EmergencyCTA from './EmergencyCTA';
import AboutSection from './AboutSection';
import ContactForm from './ContactForm';
import Footer from './Footer';
import FloatingButtons from './FloatingButtons';

export default function HomePage() {
  return (
    <>
      {/* SEO Meta — add to <head> via Next.js metadata API or Helmet */}
      {/*
        title: "Dakwerken Den Haag | Van Elk Dakwerken — Offerte binnen 24 uur"
        description: "Gecertificeerd dakdekkersbedrijf in Den Haag, Rijswijk en Zoetermeer.
          Daklekkage, dakrenovatie, plat dak en meer. 15+ jaar ervaring. Gratis offerte."
        keywords: "dakwerken Den Haag, dakdekker Den Haag, daklekkage reparatie, dakrenovatie,
          dakwerken Rijswijk, dakwerken Zoetermeer, plat dak Den Haag"
      */}

      <StickyHeader />

      <main>
        {/* SECTION 1: Hero — primary conversion point */}
        <HeroSection />

        {/* SECTION 2: TrustBar — instant credibility */}
        <TrustBar />

        {/* SECTION 3: Services — navigation to dedicated landing pages */}
        <ServicesSection />

        {/* SECTION 4: USP — remove objections */}
        <USPSection />

        {/* SECTION 5: Projects — visual proof */}
        <ProjectsSection />

        {/* SECTION 6: Reviews — social proof */}
        <ReviewsSection />

        {/* SECTION 7: Emergency CTA — urgency capture */}
        <EmergencyCTA />

        {/* SECTION 8: About — brand trust */}
        <AboutSection />

        {/* SECTION 9: Contact form — final conversion */}
        <ContactForm />
      </main>

      <Footer />

      {/* Floating CTAs — persistent conversion layer */}
      <FloatingButtons />
    </>
  );
}
