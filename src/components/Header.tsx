import React, { useState, useRef, useEffect } from 'react';
import {
  Building2,
  PhoneCall,
  ChevronDown,
  Menu,
  X,
  MapPin,
} from 'lucide-react';
import { BrandLogo } from './BrandLogo';

interface HeaderProps {
  onNavigate: (sectionId: string) => void;
  onBookAppointment: (service?: string) => void;
  onOpenInfoPage: (pageKey: string) => void;
  onSocialSelect: (platform: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onNavigate,
  onBookAppointment,
  onOpenInfoPage,
  onSocialSelect,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<'home' | 'pages' | 'contact' | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLinkClick = (sectionId: string) => {
    setOpenDropdown(null);
    setMobileMenuOpen(false);
    onNavigate(sectionId);
  };

  return (
    <header ref={navRef} className="sticky top-0 z-40 apple-glass-header transition-colors">
      {/* Top Bar Row — Mobile strictly h-16 (64px <= 15% viewport height) */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8">
        <div className="h-16 lg:h-[82px] flex items-center justify-between gap-4 sm:gap-6">
          <BrandLogo onClick={() => handleLinkClick('home')} />

          {/* Desktop Contact & CTA Cluster */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-10">
            <button
              type="button"
              onClick={() => handleLinkClick('appointment')}
              className="flex items-center gap-3.5 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0D9488] rounded-lg cursor-pointer"
            >
              <span className="w-11 h-11 rounded-xl border border-[#CCFBF1] bg-[#F0FDFA]/90 flex items-center justify-center text-[#0D9488] group-hover:bg-[#0D9488] group-hover:text-white transition-colors duration-150 shrink-0">
                <Building2 className="w-5 h-5 stroke-[1.75]" />
              </span>
              <span className="flex flex-col justify-center">
                <span className="text-[12.5px] font-medium text-[#64748B] leading-tight whitespace-nowrap">
                  240 Greenwood Avenue
                </span>
                <span className="text-[15px] font-bold text-[#0F172A] leading-tight mt-1 whitespace-nowrap">
                  River Valley, SG 289215
                </span>
              </span>
            </button>

            <a
              href="tel:+6564829100"
              className="flex items-center gap-3.5 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0D9488] rounded-lg"
            >
              <span className="w-11 h-11 rounded-xl border border-[#CCFBF1] bg-[#F0FDFA]/90 flex items-center justify-center text-[#0D9488] group-hover:bg-[#0D9488] group-hover:text-white transition-colors duration-150 shrink-0">
                <PhoneCall className="w-5 h-5 stroke-[1.75]" />
              </span>
              <span className="flex flex-col justify-center">
                <span className="text-[12.5px] font-medium text-[#64748B] leading-tight whitespace-nowrap">
                  Call Us
                </span>
                <span className="text-[15px] font-bold text-[#0F172A] leading-tight mt-1 tabular-nums whitespace-nowrap">
                  +65 6482 9100
                </span>
              </span>
            </a>

            <button
              type="button"
              onClick={() => onBookAppointment()}
              className="h-11 px-6 bg-[#0D9488] hover:bg-[#0F766E] active:scale-[0.98] text-white text-[14.5px] font-semibold rounded-xl inline-flex items-center justify-center transition-all duration-150 whitespace-nowrap shrink-0 shadow-xs cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0D9488]"
            >
              Book Appointment
            </button>
          </div>

          {/* Mobile Actions (44px accessible touch targets) */}
          <div className="flex lg:hidden items-center gap-2.5">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onBookAppointment();
              }}
              className="h-10 px-3.5 sm:px-4 bg-[#0D9488] hover:bg-[#0F766E] text-white text-[13px] font-semibold rounded-lg inline-flex items-center justify-center whitespace-nowrap shrink-0 cursor-pointer"
            >
              Book
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
              className="w-11 h-11 rounded-xl apple-glass flex items-center justify-center text-[#0F172A] hover:bg-white transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Navigation Bar Row */}
      <div className="hidden lg:block border-t border-slate-200/55">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 h-13 flex items-center justify-between gap-8">
          <nav aria-label="Primary Navigation" className="flex items-center gap-7 text-[14.5px] font-medium text-[#334155] h-full">
            {/* Home Dropdown */}
            <div className="relative h-full flex items-center">
              <button
                type="button"
                onClick={() => setOpenDropdown(openDropdown === 'home' ? null : 'home')}
                className="h-full inline-flex items-center gap-1.5 text-[#0D9488] font-semibold hover:text-[#0F766E] whitespace-nowrap shrink-0 cursor-pointer"
              >
                <span>Home</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-150 ${openDropdown === 'home' ? 'rotate-180' : ''}`} />
              </button>
              {openDropdown === 'home' && (
                <div className="absolute left-0 top-full mt-1 w-56 apple-glass-card bg-white/95 rounded-xl py-2 z-50">
                  <button
                    type="button"
                    onClick={() => handleLinkClick('home')}
                    className="w-full text-left px-4 py-2.5 text-[14px] font-medium text-[#0F172A] hover:bg-[#F0FDFA] hover:text-[#0D9488] cursor-pointer"
                  >
                    Main Medical Campus
                  </button>
                  <button
                    type="button"
                    onClick={() => handleLinkClick('hero-cards')}
                    className="w-full text-left px-4 py-2.5 text-[14px] font-medium text-[#0F172A] hover:bg-[#F0FDFA] hover:text-[#0D9488] cursor-pointer"
                  >
                    Dental &amp; Primary Care
                  </button>
                  <button
                    type="button"
                    onClick={() => handleLinkClick('services')}
                    className="w-full text-left px-4 py-2.5 text-[14px] font-medium text-[#0F172A] hover:bg-[#F0FDFA] hover:text-[#0D9488] cursor-pointer"
                  >
                    24/7 Emergency Unit
                  </button>
                </div>
              )}
            </div>

            <button
              type="button"
              onClick={() => handleLinkClick('about')}
              className="h-full inline-flex items-center hover:text-[#0D9488] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              About Us
            </button>

            <button
              type="button"
              onClick={() => handleLinkClick('services')}
              className="h-full inline-flex items-center hover:text-[#0D9488] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Services
            </button>

            <button
              type="button"
              onClick={() => handleLinkClick('specialists')}
              className="h-full inline-flex items-center hover:text-[#0D9488] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Specialists
            </button>

            <button
              type="button"
              onClick={() => handleLinkClick('testimonials')}
              className="h-full inline-flex items-center hover:text-[#0D9488] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Testimonials
            </button>

            <button
              type="button"
              onClick={() => handleLinkClick('appointment')}
              className="h-full inline-flex items-center hover:text-[#0D9488] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Appointment
            </button>

            {/* Pages Dropdown */}
            <div className="relative h-full flex items-center">
              <button
                type="button"
                onClick={() => setOpenDropdown(openDropdown === 'pages' ? null : 'pages')}
                className="h-full inline-flex items-center gap-1.5 hover:text-[#0D9488] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                <span>Pages</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-150 ${openDropdown === 'pages' ? 'rotate-180' : ''}`} />
              </button>
              {openDropdown === 'pages' && (
                <div className="absolute left-0 top-full mt-1 w-56 apple-glass-card bg-white/95 rounded-xl py-2 z-50">
                  <button
                    type="button"
                    onClick={() => handleLinkClick('packages')}
                    className="w-full text-left px-4 py-2.5 text-[14px] font-medium text-[#0F172A] hover:bg-[#F0FDFA] hover:text-[#0D9488] cursor-pointer"
                  >
                    Health Packages
                  </button>
                  <button
                    type="button"
                    onClick={() => handleLinkClick('faq')}
                    className="w-full text-left px-4 py-2.5 text-[14px] font-medium text-[#0F172A] hover:bg-[#F0FDFA] hover:text-[#0D9488] cursor-pointer"
                  >
                    Patient FAQ
                  </button>
                  <button
                    type="button"
                    onClick={() => handleLinkClick('partners')}
                    className="w-full text-left px-4 py-2.5 text-[14px] font-medium text-[#0F172A] hover:bg-[#F0FDFA] hover:text-[#0D9488] cursor-pointer"
                  >
                    Our Partners
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setOpenDropdown(null);
                      onOpenInfoPage('Job Vacancy');
                    }}
                    className="w-full text-left px-4 py-2.5 text-[14px] font-medium text-[#0F172A] hover:bg-[#F0FDFA] hover:text-[#0D9488] cursor-pointer"
                  >
                    Job Vacancy
                  </button>
                </div>
              )}
            </div>

            {/* Contact Dropdown */}
            <div className="relative h-full flex items-center">
              <button
                type="button"
                onClick={() => setOpenDropdown(openDropdown === 'contact' ? null : 'contact')}
                className="h-full inline-flex items-center gap-1.5 hover:text-[#0D9488] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                <span>Contact</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-150 ${openDropdown === 'contact' ? 'rotate-180' : ''}`} />
              </button>
              {openDropdown === 'contact' && (
                <div className="absolute left-0 top-full mt-1 w-56 apple-glass-card bg-white/95 rounded-xl py-2 z-50">
                  <button
                    type="button"
                    onClick={() => handleLinkClick('appointment')}
                    className="w-full text-left px-4 py-2.5 text-[14px] font-medium text-[#0F172A] hover:bg-[#F0FDFA] hover:text-[#0D9488] cursor-pointer"
                  >
                    Orchard Campus
                  </button>
                  <button
                    type="button"
                    onClick={() => handleLinkClick('appointment')}
                    className="w-full text-left px-4 py-2.5 text-[14px] font-medium text-[#0F172A] hover:bg-[#F0FDFA] hover:text-[#0D9488] cursor-pointer"
                  >
                    Marina Bay Clinic
                  </button>
                  <button
                    type="button"
                    onClick={() => handleLinkClick('footer')}
                    className="w-full text-left px-4 py-2.5 text-[14px] font-medium text-[#0F172A] hover:bg-[#F0FDFA] hover:text-[#0D9488] cursor-pointer"
                  >
                    General Inquiries
                  </button>
                </div>
              )}
            </div>
          </nav>

          {/* Right Social Strip */}
          <div className="flex items-center gap-3">
            <span className="text-[12px] font-bold tracking-wider text-[#64748B] whitespace-nowrap mr-1">
              FOLLOW US :
            </span>
            <div className="flex items-center gap-1.5 text-[#0D9488]">
              <button
                type="button"
                aria-label="Follow Aurelia Care on Facebook"
                onClick={() => onSocialSelect('Facebook')}
                className="w-8 h-8 rounded-full hover:bg-[#F0FDFA] hover:text-[#0F766E] flex items-center justify-center transition-colors cursor-pointer"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M15.12 5.32H17V2.14A26.11 26.11 0 0 0 14.26 2c-2.72 0-4.58 1.66-4.58 4.7v2.62H6.61v3.56h3.07V22h3.68v-9.12h3.06l.46-3.56h-3.52V6.65c0-1.05.29-1.73 1.76-1.73Z" />
                </svg>
              </button>
              <button
                type="button"
                aria-label="Follow Aurelia Care on Twitter"
                onClick={() => onSocialSelect('Twitter')}
                className="w-8 h-8 rounded-full hover:bg-[#F0FDFA] hover:text-[#0F766E] flex items-center justify-center transition-colors cursor-pointer"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23Z" />
                </svg>
              </button>
              <button
                type="button"
                aria-label="Follow Aurelia Care on Instagram"
                onClick={() => onSocialSelect('Instagram')}
                className="w-8 h-8 rounded-full hover:bg-[#F0FDFA] hover:text-[#0F766E] flex items-center justify-center transition-colors cursor-pointer"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6Zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25ZM12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3Z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Frosted Apple-Glass Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-2xl border-t border-slate-200/70 shadow-2xl px-4 sm:px-8 py-5 space-y-4 max-h-[82vh] overflow-y-auto">
          <nav aria-label="Mobile Navigation" className="grid grid-cols-1 gap-1 text-[15px] font-medium text-[#0F172A]">
            {[
              { label: 'Home', id: 'home', active: true },
              { label: 'About Us', id: 'about' },
              { label: 'Services', id: 'services' },
              { label: 'Specialists', id: 'specialists' },
              { label: 'Patient Testimonials', id: 'testimonials' },
              { label: 'Health Packages', id: 'packages' },
              { label: 'Patient FAQ', id: 'faq' },
              { label: 'Make Appointment', id: 'appointment' },
            ].map((navItem) => (
              <button
                key={navItem.id}
                type="button"
                onClick={() => handleLinkClick(navItem.id)}
                className={`text-left px-4 py-3 rounded-xl cursor-pointer transition-colors ${
                  navItem.active
                    ? 'bg-[#F0FDFA] text-[#0D9488] font-semibold'
                    : 'hover:bg-slate-50'
                }`}
              >
                {navItem.label}
              </button>
            ))}
          </nav>

          <div className="pt-4 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-3 text-[13.5px]">
            <div className="flex items-center gap-2.5 text-[#526071]">
              <MapPin className="w-4 h-4 text-[#0D9488] shrink-0" />
              <span>240 Greenwood Ave, River Valley, SG</span>
            </div>
            <a href="tel:+6564829100" className="flex items-center gap-2.5 text-[#0F172A] font-semibold tabular-nums">
              <PhoneCall className="w-4 h-4 text-[#0D9488] shrink-0" />
              <span>+65 6482 9100</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
