'use client';
import React from 'react';
import { Navigation } from '@/components/Navigation';
import ResponsibleDisclosureContent from '@/components/responsible-disclosure/ResponsibleDisclosureContent';
import { ContactCTA } from '@/components/shared/ContactCTA';
import Footer from '@/components/Footer';

export default function ResponsibleDisclosure() {
  return (
    <div className='min-h-screen bg-white'>
      <Navigation customColor='text-white' />
      <ResponsibleDisclosureContent />
      <ContactCTA
        title='Have Security Concerns?'
        description='Contact our security team directly to report vulnerabilities'
        buttonText='Contact Security Team'
        buttonLink='/contact'
      />
      <Footer />
    </div>
  );
}
