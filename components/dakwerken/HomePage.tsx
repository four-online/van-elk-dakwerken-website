/**
 * Van Elk Dakwerken — Homepage
 *
 * Page structure (aligned with kkfh-nl design language):
 * 1.  StickyHeader        — always-visible CTA + phone
 * 2.  HeroSection         — outcome headline + dual CTA + quick form
 * 3.  TrustBar            — stats + certifications (credibility shock)
 * 4.  ServicesSection     — product offerings (service cards)
 * 5.  USPSection          — unique selling points / objection removal
 * 6.  RenovationPlans     — renovation packages (inspection → repair → full reno)
 * 7.  ReviewsSection      — customer testimonials
 * 8.  ProjectsSection     — customer experience showcase + video proof
 * 9.  ImpressionGallery   — impression gallery / visual portfolio
 * 10. ResourceGrid        — FAQ resource grid
 * 11. EmergencyCTA        — quality & service guarantee + urgency capture
 * 12. AboutSection        — value proposition / brand story
 * 13. ContactForm         — final conversion (form + phone + WhatsApp)
 * 14. Footer              — SEO location links
 * 15. FloatingButtons     — mobile panel / persistent CTAs
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
import RenovationPlans from './RenovationPlans';
import ReviewsSection from './ReviewsSection';
import ProjectsSection from './ProjectsSection';
import ImpressionGallery from './ImpressionGallery';
import ResourceGrid from './ResourceGrid';
import EmergencyCTA from './EmergencyCTA';
import AboutSection from './AboutSection';
import ContactForm from './ContactForm';
import Footer from './Footer';
import FloatingButtons from './FloatingButtons';

export default function HomePage() {
  return (
    <>
      <StickyHeader />

      <main>
        {/* 1. Hero — primary conversion point */}
        <HeroSection />

        {/* 2. TrustBar — instant credibility */}
        <TrustBar />

        {/* 3. Services — product offerings */}
        <ServicesSection />

        {/* 4. USP — unique selling points */}
        <USPSection />

        {/* 5. Renovation plans — inspection → repair → full reno */}
        <RenovationPlans />

        {/* 6. Customer testimonials */}
        <ReviewsSection />

        {/* 7. Customer experience showcase + video */}
        <ProjectsSection />

        {/* 8. Impression gallery */}
        <ImpressionGallery />

        {/* 9. FAQ resource grid */}
        <ResourceGrid />

        {/* 10. Emergency CTA / quality guarantee */}
        <EmergencyCTA />

        {/* 11. About / value proposition */}
        <AboutSection />

        {/* 12. Contact form — final conversion */}
        <ContactForm />
      </main>

      <Footer />

      {/* Mobile panel / floating CTAs */}
      <FloatingButtons />
    </>
  );
}
