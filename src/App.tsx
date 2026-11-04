/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useRef, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { MedicationSection } from './components/MedicationSection';
import { AppointmentSection } from './components/AppointmentSection';
import { PreFooterSections } from './components/PreFooterSections';
import { FooterSection } from './components/FooterSection';
import {
  ServiceDetailModal,
  ClinicVideoModal,
  InfoPageModal,
} from './components/InteractiveModals';
import { ServiceDetail } from './data/medkitData';

export default function App() {
  const [selectedServiceModal, setSelectedServiceModal] = useState<ServiceDetail | null>(null);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [activeInfoPage, setActiveInfoPage] = useState<string | null>(null);
  const [appointmentService, setAppointmentService] = useState<string>('');
  const [socialBannerMsg, setSocialBannerMsg] = useState<string | null>(null);
  const nameInputRef = useRef<HTMLInputElement | null>(null);

  // Dynamically hydrate canonical URL & og:url for client-side SPA SEO
  useEffect(() => {
    const currentUrl = window.location.origin + window.location.pathname;
    let canonicalLink = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', currentUrl);

    let ogUrlMeta = document.querySelector<HTMLMetaElement>('meta[property="og:url"]');
    if (!ogUrlMeta) {
      ogUrlMeta = document.createElement('meta');
      ogUrlMeta.setAttribute('property', 'og:url');
      document.head.appendChild(ogUrlMeta);
    }
    ogUrlMeta.setAttribute('content', currentUrl);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleBookAppointment = (preselectedService?: string) => {
    if (preselectedService) {
      setAppointmentService(preselectedService);
    }
    setSelectedServiceModal(null);
    scrollToSection('appointment');
    window.setTimeout(() => {
      nameInputRef.current?.focus({ preventScroll: true });
    }, 450);
  };

  const handleSocialSelect = (platform: string) => {
    setSocialBannerMsg(
      `Aurelia Care Showcase (${platform}): Demonstration social channel preview.`
    );
    window.setTimeout(() => {
      setSocialBannerMsg((current) =>
        current?.includes(platform) ? null : current
      );
    }, 3500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#0F172A] overflow-x-hidden">
      <Header
        onNavigate={scrollToSection}
        onBookAppointment={handleBookAppointment}
        onOpenInfoPage={(pageKey) => setActiveInfoPage(pageKey)}
        onSocialSelect={handleSocialSelect}
      />

      <main className="flex-1">
        <HeroSection
          onContactUs={() => handleBookAppointment()}
          onLearnMoreHero={() => scrollToSection('about')}
          onSelectService={(service) => setSelectedServiceModal(service)}
        />

        <AboutSection />

        <ServicesSection
          onSelectService={(service) => setSelectedServiceModal(service)}
          onBookAppointment={() => handleBookAppointment()}
        />

        <MedicationSection onWatchVideo={() => setVideoModalOpen(true)} />

        <AppointmentSection
          selectedService={appointmentService}
          onServiceChange={setAppointmentService}
          nameInputRef={nameInputRef}
        />

        {/* Additional Pre-Footer Sections: Specialists, Patient Testimonials, Wellness Packages & FAQ */}
        <PreFooterSections
          onBookService={(serviceName) => handleBookAppointment(serviceName)}
        />
      </main>

      <FooterSection
        onNavigate={scrollToSection}
        onOpenInfoPage={(pageKey) => setActiveInfoPage(pageKey)}
        onSocialSelect={handleSocialSelect}
      />

      {/* Interactive Apple-Glass Modals */}
      <ServiceDetailModal
        service={selectedServiceModal}
        onClose={() => setSelectedServiceModal(null)}
        onBookService={(serviceId) => handleBookAppointment(serviceId)}
      />

      <ClinicVideoModal
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
        onBookAppointment={() => handleBookAppointment('Primary Care')}
      />

      <InfoPageModal
        pageKey={activeInfoPage}
        onClose={() => setActiveInfoPage(null)}
      />

      {/* Non-intrusive Frosted Glass Toast */}
      {socialBannerMsg && (
        <div
          role="status"
          className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-5 sm:bottom-5 z-50 apple-glass-card bg-[#0F766E]/92 text-white border-white/25 text-sm font-medium px-5 py-3.5 rounded-2xl shadow-xl sm:max-w-sm"
        >
          {socialBannerMsg}
        </div>
      )}
    </div>
  );
}
