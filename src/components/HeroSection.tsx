import React, { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Phone, BriefcaseMedical, Stethoscope } from 'lucide-react';
import { HERO_SERVICE_CARDS, ServiceDetail } from '../data/medkitData';

interface HeroSectionProps {
  onContactUs: () => void;
  onLearnMoreHero: () => void;
  onSelectService: (service: ServiceDetail) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onContactUs,
  onLearnMoreHero,
  onSelectService,
}) => {
  const [heroImgError, setHeroImgError] = useState(false);
  const [failedThumbIds, setFailedThumbIds] = useState<Record<string, boolean>>({});
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="home" className="relative bg-white">
      {/* Main Hero Backdrop — Deep Botanical Forest-Teal to Jade Gradient */}
      <div className="relative overflow-hidden bg-gradient-to-r from-[#0B3B38] via-[#0F625B] to-[#14B8A6] pt-16 pb-32 sm:pt-24 sm:pb-44 lg:pt-28 lg:pb-48">
        {/* Right-side emerald-teal harmonized medical team photograph */}
        {!heroImgError && (
          <div className="pointer-events-none absolute inset-y-0 right-0 w-full md:w-[68%] lg:w-[64%] select-none">
            <img
              src="/assets/medkit/cura-hero-right.jpg"
              alt="Aurelia Care clinical doctors consulting together"
              referrerPolicy="no-referrer"
              onError={() => setHeroImgError(true)}
              className="w-full h-full object-cover object-top opacity-30 md:opacity-92"
              style={{
                WebkitMaskImage:
                  'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.45) 18%, rgba(0,0,0,0.92) 38%, black 55%)',
                maskImage:
                  'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.45) 18%, rgba(0,0,0,0.92) 38%, black 55%)',
              }}
            />
          </div>
        )}

        {/* Measured contrast scrim for crisp WCAG AA legibility */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#09322F]/95 via-[#0D5953]/75 to-transparent md:via-[#0D5953]/46"
        />

        {/* Hero Copy Container — Mobile & Desktop Optimized */}
        <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-8">
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.52, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-xl"
          >
            <h1 className="text-white font-bold tracking-tight leading-[1.14] text-[32px] sm:text-[46px] lg:text-[54px]">
              Healthcare for Your
              <br />
              Family&apos;s Health
            </h1>
            <p className="mt-4 sm:mt-5 text-white/95 text-[15.5px] sm:text-[18px] leading-relaxed max-w-lg font-normal">
              Compassionate specialist &amp; emergency care with international clinical standards.
            </p>

            <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
              <button
                type="button"
                onClick={onContactUs}
                className="h-12 px-7 bg-[#F59E0B] hover:bg-[#FBBF24] active:scale-[0.98] text-[#0F172A] text-[15px] font-bold rounded-xl inline-flex items-center justify-center gap-2.5 shadow-sm transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <Phone className="w-4 h-4 fill-current shrink-0" />
                <span>Contact Us</span>
              </button>

              <button
                type="button"
                onClick={onLearnMoreHero}
                className="h-12 px-7 apple-glass-tint hover:bg-white/25 active:scale-[0.98] text-white text-[15px] font-semibold rounded-xl inline-flex items-center justify-center gap-2.5 transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <BriefcaseMedical className="w-4 h-4 text-[#FBBF24] shrink-0" />
                <span>Learn More</span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 4 Overlapping Apple-Glass Service & Emergency Cards */}
      <div id="hero-cards" className="relative z-20 -mt-20 sm:-mt-28 max-w-[1200px] mx-auto px-4 sm:px-8 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 items-stretch">
          {HERO_SERVICE_CARDS.map((card, idx) => {
            const hasFailed = failedThumbIds[card.id];
            return (
              <motion.div
                key={card.id}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.48, delay: 0.08 + idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="apple-glass-card rounded-2xl p-6 sm:p-7 xl:p-8 text-center flex flex-col items-center justify-between h-full transition-transform duration-200 hover:-translate-y-1"
              >
                <div className="flex flex-col items-center flex-1">
                  <div className="w-[72px] h-[72px] rounded-full overflow-hidden mb-5 bg-[#F0FDFA] flex items-center justify-center ring-4 ring-white/90 shadow-xs shrink-0">
                    {card.image && !hasFailed ? (
                      <img
                        src={card.image}
                        alt={card.title}
                        referrerPolicy="no-referrer"
                        onError={() =>
                          setFailedThumbIds((prev) => ({ ...prev, [card.id]: true }))
                        }
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <Stethoscope className="w-8 h-8 text-[#0D9488]" />
                    )}
                  </div>

                  <h2 className="text-[19px] font-bold text-[#0F172A] leading-snug">
                    {card.title}
                  </h2>

                  <p className="mt-3 text-[14.5px] leading-[1.65] text-[#526071]">
                    {card.shortDescription}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => onSelectService(card)}
                  className="mt-6 h-11 px-6 w-full sm:w-auto bg-[#0D9488] hover:bg-[#0F766E] text-white text-[14px] font-semibold rounded-xl inline-flex items-center justify-center transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0D9488]"
                >
                  Learn More
                </button>
              </motion.div>
            );
          })}

          {/* 4th Card: Emergency Service Gradient + Apple Glass Callout */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.48, delay: 0.26, ease: [0.16, 1, 0.3, 1] }}
            className="bg-gradient-to-b from-[#0F766E] via-[#0D9488] to-[#14B8A6] rounded-2xl shadow-[0_16px_42px_rgba(13,148,136,0.24)] border border-white/20 p-6 sm:p-7 xl:p-8 text-center text-white flex flex-col justify-between h-full transition-transform duration-200 hover:-translate-y-1"
          >
            <div className="flex flex-col items-center justify-center flex-1">
              <h2 className="text-[20px] font-bold text-white leading-snug">
                Emergency Service
              </h2>
              <p className="mt-3.5 text-[14.5px] leading-[1.68] text-white/95">
                Call our 24/7 accident &amp; emergency department for immediate ambulance dispatch and rapid trauma care.
              </p>
            </div>

            <a
              href="tel:+6564829911"
              className="mt-6 w-full apple-glass bg-white/92 hover:bg-white text-[#0F172A] rounded-xl py-4 px-4 transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-white block"
            >
              <span className="block text-[11px] font-bold tracking-widest text-[#0F766E]">
                CALL US NOW
              </span>
              <span className="block text-[18px] xl:text-[19px] font-extrabold text-[#0F172A] tabular-nums mt-1 whitespace-nowrap">
                +65 6482 9911
              </span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
