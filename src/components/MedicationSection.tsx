import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { ChevronRight, Play, Stethoscope } from 'lucide-react';
import { MEDICATION_ACCORDION } from '../data/medkitData';
import { Reveal } from './Reveal';

interface MedicationSectionProps {
  onWatchVideo: () => void;
}

export const MedicationSection: React.FC<MedicationSectionProps> = ({ onWatchVideo }) => {
  const [activeAccordion, setActiveAccordion] = useState<string | null>(MEDICATION_ACCORDION[0].id);
  const [femaleImgError, setFemaleImgError] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const toggleItem = (id: string) => {
    setActiveAccordion((prev) => (prev === id ? null : id));
  };

  return (
    <section id="medication" className="pb-16 sm:pb-24 lg:pb-28 pt-4 sm:pt-10 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Female Doctor Composite Portrait */}
          <Reveal className="lg:col-span-6 flex items-center justify-center lg:justify-start">
            {!femaleImgError ? (
              <img
                src="/assets/medkit/cura-doctor-female.jpg"
                alt="Female Aurelia Care specialist physician holding prescription chart"
                referrerPolicy="no-referrer"
                onError={() => setFemaleImgError(true)}
                className="w-full max-w-[380px] sm:max-w-[460px] h-auto object-contain select-none"
              />
            ) : (
              <div className="w-full max-w-[440px] aspect-[4/5] rounded-tl-[56px] rounded-br-[56px] bg-gradient-to-br from-[#F0FDFA] to-[#CCFBF1] flex flex-col items-center justify-center p-8 text-center">
                <Stethoscope className="w-14 h-14 text-[#0D9488] mb-3" />
                <span className="text-lg font-bold text-[#0F172A]">Certified Clinical Pharmacy</span>
                <span className="text-sm text-[#526071] mt-1">Evidence-Based Medication Care</span>
              </div>
            )}
          </Reveal>

          {/* Right Column: Copy, Expandable Points & Video CTA */}
          <Reveal delay={0.08} className="lg:col-span-6">
            <h2 className="text-[28px] sm:text-[38px] lg:text-[42px] font-bold text-[#0F172A] tracking-tight leading-[1.18]">
              Find the right
              <br />
              Medication for you
            </h2>

            <p className="mt-4 sm:mt-5 text-[15px] sm:text-[16px] leading-[1.72] text-[#526071]">
              Getting an accurate diagnosis can be one of the most impactful experiences that you
              can have. Our physicians and clinical pharmacists guide every step of your treatment.
            </p>

            {/* Expandable Checklist / Accordion Rows */}
            <div className="mt-7 sm:mt-8 divide-y divide-slate-200/80 border-b border-slate-200/80">
              {MEDICATION_ACCORDION.map((item) => {
                const isOpen = activeAccordion === item.id;
                return (
                  <div key={item.id} className="py-4">
                    <button
                      type="button"
                      onClick={() => toggleItem(item.id)}
                      aria-expanded={isOpen}
                      className="w-full flex items-center gap-3 text-left group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0D9488] rounded-md"
                    >
                      <ChevronRight
                        className={`w-4.5 h-4.5 text-[#0D9488] transition-transform duration-150 shrink-0 ${
                          isOpen ? 'rotate-90' : ''
                        }`}
                      />
                      <span className="text-[15.5px] sm:text-[16px] font-bold text-[#0F172A] group-hover:text-[#0D9488] transition-colors">
                        {item.title}
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.p
                          initial={prefersReducedMotion ? false : { opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.18 }}
                          className="mt-2.5 pl-7.5 text-[14.5px] leading-[1.68] text-[#526071]"
                        >
                          {item.content}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* Watch the Video Apple-Glass Pill Trigger */}
            <div className="mt-8 sm:mt-9">
              <button
                type="button"
                onClick={onWatchVideo}
                className="apple-glass rounded-full p-2 pr-5 inline-flex items-center gap-3.5 group hover:bg-[#F0FDFA]/90 transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0D9488]"
              >
                <span className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#0F766E] to-[#2DD4BF] text-white flex items-center justify-center shadow-[0_8px_22px_rgba(13,148,136,0.3)] group-hover:scale-105 transition-transform duration-150 shrink-0">
                  <Play className="w-4.5 h-4.5 fill-current ml-0.5" />
                </span>
                <span className="text-[15px] font-semibold text-[#0F172A] group-hover:text-[#0D9488] transition-colors whitespace-nowrap">
                  Watch the video
                </span>
              </button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
