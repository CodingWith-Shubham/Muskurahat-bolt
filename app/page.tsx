'use client';

import { Navbar } from '@/components/ui/navbar';
import { HeroSection } from '@/components/ui/hero-section';
import { MenuSection } from '@/components/ui/menu-section';
import { GallerySection } from '@/components/ui/gallery-section';
import { TestimonialsSection } from '@/components/ui/testimonials-section';
import { CharitySection } from '@/components/ui/charity-section';
import { FounderVision } from '@/components/ui/founder-vision';
import { TeamSection } from '@/components/ui/team-section';
import { ContactSection } from '@/components/ui/contact-section';
import { Footer } from '@/components/ui/footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <MenuSection />
      <GallerySection />
      <TestimonialsSection />
      <CharitySection />
      <FounderVision />
      <TeamSection />
      <ContactSection />
      <Footer />
    </main>
  );
}