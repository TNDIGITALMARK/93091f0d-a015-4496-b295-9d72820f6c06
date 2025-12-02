export const dynamic = 'force-dynamic'

import { Navigation } from '@/components/apparel/Navigation';
import { HeroSection } from '@/components/apparel/HeroSection';
import { DesignGallery } from '@/components/apparel/DesignGallery';
import { UploadSection } from '@/components/apparel/UploadSection';
import { InquiryForm } from '@/components/apparel/InquiryForm';
import { Footer } from '@/components/apparel/Footer';

export default function Index() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <DesignGallery />
      <UploadSection />
      <InquiryForm />
      <Footer />
    </main>
  );
}
