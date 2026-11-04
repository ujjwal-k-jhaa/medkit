import React from 'react';
import { MapPin, Phone, Mail, Info } from 'lucide-react';
import { BrandLogo, PartnerLogos } from './BrandLogo';
import { Reveal } from './Reveal';

interface FooterSectionProps {
  onNavigate: (sectionId: string) => void;
  onOpenInfoPage: (pageKey: string) => void;
  onSocialSelect: (platform: string) => void;
}

export const FooterSection: React.FC<FooterSectionProps> = ({
  onNavigate,
  onOpenInfoPage,
  onSocialSelect,
}) => {
  return (
    <footer id="footer" className="bg-white pt-12 sm:pt-16">
      {/* Our Partners Section */}
      <Reveal>
        <div id="partners" className="max-w-[1200px] mx-auto px-4 sm:px-8 pb-14 sm:pb-20 text-center">
          <h2 className="text-[18px] font-bold text-[#0F172A] tracking-tight mb-8 sm:mb-9">
            Our Partners
          </h2>
          <PartnerLogos />
        </div>
      </Reveal>

      {/* Stay Connected Apple-Glass Rounded Banner */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8">
        <Reveal>
          <div className="apple-glass bg-[#F0FDFA]/80 border border-[#CCFBF1] rounded-2xl px-6 sm:px-12 py-7 sm:py-8 flex flex-col sm:flex-row items-center justify-between gap-5">
            <h3 className="text-[20px] sm:text-[24px] font-bold text-[#0F172A] tracking-tight text-center sm:text-left">
              Stay connected with Aurelia Care
            </h3>

            <div className="flex items-center gap-3">
              {[
                {
                  name: 'Facebook',
                  svg: (
                    <path d="M15.12 5.32H17V2.14A26.11 26.11 0 0 0 14.26 2c-2.72 0-4.58 1.66-4.58 4.7v2.62H6.61v3.56h3.07V22h3.68v-9.12h3.06l.46-3.56h-3.52V6.65c0-1.05.29-1.73 1.76-1.73Z" />
                  ),
                },
                {
                  name: 'Twitter',
                  svg: (
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23Z" />
                  ),
                },
                {
                  name: 'Instagram',
                  svg: (
                    <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6Zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25ZM12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3Z" />
                  ),
                },
                {
                  name: 'YouTube',
                  svg: (
                    <path d="M21.58 7.19a2.51 2.51 0 0 0-1.77-1.77C18.25 5 12 5 12 5s-6.25 0-7.81.42c-.86.23-1.54.91-1.77 1.77C2 8.75 2 12 2 12s0 3.25.42 4.81c.23.86.91 1.54 1.77 1.77C5.75 19 12 19 12 19s6.25 0 7.81-.42a2.51 2.51 0 0 0 1.77-1.77C22 15.25 22 12 22 12s0-3.25-.42-4.81ZM10 15V9l5.2 3-5.2 3Z" />
                  ),
                },
                {
                  name: 'LinkedIn',
                  svg: (
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z" />
                  ),
                },
              ].map((social) => (
                <button
                  key={social.name}
                  type="button"
                  aria-label={`Connect with Aurelia Care on ${social.name}`}
                  onClick={() => onSocialSelect(social.name)}
                  className="w-11 h-11 rounded-full bg-white text-[#0D9488] hover:bg-[#0D9488] hover:text-white shadow-xs flex items-center justify-center transition-colors duration-150 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0D9488]"
                >
                  <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                    {social.svg}
                  </svg>
                </button>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      {/* Main 4-Column Footer */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8 pt-14 sm:pt-16 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-[16px] font-bold text-[#0F172A]">Quick Links</h4>
            <ul className="mt-5 space-y-3 text-[14.5px] text-[#526071]">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('home')}
                  className="hover:text-[#0D9488] transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('about')}
                  className="hover:text-[#0D9488] transition-colors cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('services')}
                  className="hover:text-[#0D9488] transition-colors cursor-pointer"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('specialists')}
                  className="hover:text-[#0D9488] transition-colors cursor-pointer"
                >
                  Specialists
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('testimonials')}
                  className="hover:text-[#0D9488] transition-colors cursor-pointer"
                >
                  Testimonials
                </button>
              </li>
            </ul>
          </div>

          {/* Other Pages */}
          <div className="lg:col-span-3">
            <h4 className="text-[16px] font-bold text-[#0F172A]">Other Pages</h4>
            <ul className="mt-5 space-y-3 text-[14.5px] text-[#526071]">
              {['Job Vacancy', 'Charity Program', 'Privacy & Policy', 'Terms of Use'].map(
                (page) => (
                  <li key={page}>
                    <button
                      type="button"
                      onClick={() => onOpenInfoPage(page)}
                      className="hover:text-[#0D9488] transition-colors cursor-pointer text-left"
                    >
                      {page}
                    </button>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-4">
            <h4 className="text-[16px] font-bold text-[#0F172A]">Contact Info</h4>
            <ul className="mt-5 space-y-3.5 text-[14.5px] text-[#526071]">
              <li className="flex items-start gap-3">
                <MapPin className="w-4.5 h-4.5 text-[#0D9488] shrink-0 mt-1" />
                <span className="leading-[1.6]">
                  290 Orchard Medical Plaza, Suite 04-12,
                  <br />
                  Singapore 238859
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4.5 h-4.5 text-[#0D9488] shrink-0" />
                <a
                  href="tel:+6564829100"
                  className="hover:text-[#0D9488] transition-colors tabular-nums font-medium text-[#334155]"
                >
                  +65 6482 9100
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4.5 h-4.5 text-[#0D9488] shrink-0" />
                <a
                  href="mailto:care@aureliacare.org"
                  className="hover:text-[#0D9488] transition-colors"
                >
                  care@aureliacare.org
                </a>
              </li>
            </ul>
          </div>

          {/* Make an Appointment */}
          <div className="lg:col-span-3">
            <h4 className="text-[16px] font-bold text-[#0F172A]">Make an Appointment</h4>
            <p className="mt-5 text-[14.5px] leading-[1.7] text-[#526071]">
              Getting an accurate diagnosis can be one of the most impactful experiences that you
              can have.
            </p>
            <a
              href="tel:+6564829911"
              className="mt-6 h-11 px-6 w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#0D9488] hover:bg-[#0F766E] text-white text-[14.5px] font-semibold rounded-xl transition-colors duration-150 tabular-nums whitespace-nowrap"
            >
              <Phone className="w-4 h-4 fill-current shrink-0" />
              <span>+65 6482 9911</span>
            </a>
          </div>
        </div>

        {/* Explicit Showcase & Testimonial Section Disclaimer */}
        <div className="mt-12 apple-glass bg-[#F8FAFC]/90 border border-slate-200/80 rounded-2xl p-4 sm:p-5 flex items-start gap-3.5 text-left">
          <Info className="w-5 h-5 text-[#0D9488] shrink-0 mt-0.5" />
          <p className="text-[13px] sm:text-[13.5px] leading-[1.65] text-[#475569]">
            <strong className="font-bold text-[#0F172A]">Disclaimer:</strong> This website is a
            design demonstration created strictly for portfolio showcase and testimonial section
            purposes—it <strong className="font-semibold text-[#0F172A]">does not belong to or represent a real medical clinic</strong>,
            hospital, or healthcare provider. All physician profiles, locations, packages, and phone
            numbers are fictional sample content.
          </p>
        </div>
      </div>

      {/* Bottom Copyright Bar — 3-Column Mathematical Alignment */}
      <div className="border-t border-slate-200/75">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-8 py-6 sm:py-7 grid grid-cols-1 md:grid-cols-3 items-center gap-3 sm:gap-4 text-[13px] sm:text-[13.5px] text-[#64748B]">
          <div className="flex justify-center md:justify-start">
            <BrandLogo size="sm" onClick={() => onNavigate('home')} />
          </div>
          <p className="text-center">Aurelia Care — Portfolio &amp; Testimonial Showcase</p>
          <p className="text-center md:text-right">Copyright © 2026 Aurelia Care. Concept Showcase.</p>
        </div>
      </div>
    </footer>
  );
};
