import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import {
  Calendar,
  Check,
  ChevronDown,
  Clock,
  MapPin,
  PhoneCall,
  Quote,
  Stethoscope,
} from 'lucide-react';
import {
  SPECIALIST_DOCTORS,
  PATIENT_TESTIMONIALS,
  WELLNESS_PACKAGES,
  FAQ_ITEMS,
} from '../data/medkitData';
import { Reveal } from './Reveal';

interface PreFooterSectionsProps {
  onBookService: (serviceName: string) => void;
}

const DEPARTMENT_FILTERS = [
  'All Departments',
  'Family Medicine',
  'Cardiology & Diagnostics',
  'Dental & Oral Care',
] as const;

const CAMPUS_FILTERS = ['All Campuses', 'Orchard Campus', 'Marina Bay Clinic'] as const;

export const PreFooterSections: React.FC<PreFooterSectionsProps> = ({ onBookService }) => {
  const [selectedDept, setSelectedDept] = useState<(typeof DEPARTMENT_FILTERS)[number]>('All Departments');
  const [selectedCampus, setSelectedCampus] = useState<(typeof CAMPUS_FILTERS)[number]>('All Campuses');
  const [openFaqId, setOpenFaqId] = useState<string>(FAQ_ITEMS[0].id);
  const prefersReducedMotion = useReducedMotion();

  const filteredDoctors =
    selectedDept === 'All Departments'
      ? SPECIALIST_DOCTORS
      : SPECIALIST_DOCTORS.filter((doc) => doc.departmentFilter === selectedDept);

  const filteredTestimonials =
    selectedCampus === 'All Campuses'
      ? PATIENT_TESTIMONIALS
      : PATIENT_TESTIMONIALS.filter((t) => t.campus === selectedCampus);

  return (
    <>
      {/* SECTION 1: Meet Our Specialist Physicians */}
      <section id="specialists" className="py-20 sm:py-24 lg:py-28 bg-white relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 right-0 w-96 h-96 rounded-full bg-[#14B8A6]/8 blur-3xl"
        />
        <div className="max-w-[1200px] mx-auto px-4 sm:px-8 relative z-10">
          <Reveal>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
              <div className="max-w-xl">
                <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-[#0F172A] tracking-tight leading-[1.18]">
                  Meet Our Medical Specialists
                </h2>
                <p className="mt-4 text-[15px] sm:text-[16px] text-[#526071] leading-[1.7]">
                  Consult directly with board-certified physicians and dental surgeons committed to
                  thorough diagnostics and unhurried patient care.
                </p>
              </div>

              {/* Apple-Glass Segmented Filter Bar — Mobile Touch Scrollable */}
              <div
                role="tablist"
                aria-label="Filter specialists by department"
                className="apple-glass-pillbar rounded-xl p-1.5 flex items-center gap-1 overflow-x-auto no-scrollbar max-w-full"
              >
                {DEPARTMENT_FILTERS.map((dept) => {
                  const isActive = selectedDept === dept;
                  return (
                    <button
                      key={dept}
                      role="tab"
                      aria-selected={isActive}
                      type="button"
                      onClick={() => setSelectedDept(dept)}
                      className={`px-4 py-2.5 text-[13.5px] font-semibold rounded-lg transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0D9488] ${
                        isActive
                          ? 'bg-white text-[#0F766E] shadow-xs'
                          : 'text-[#526071] hover:text-[#0F172A]'
                      }`}
                    >
                      {dept}
                    </button>
                  );
                })}
              </div>
            </div>
          </Reveal>

          {/* Specialist Cards Grid */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {filteredDoctors.map((doc, idx) => (
              <motion.article
                key={doc.id}
                layout={!prefersReducedMotion}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="apple-glass-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between h-full hover:-translate-y-1 transition-transform duration-200"
              >
                <div>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0F766E] to-[#14B8A6] text-white font-bold text-lg flex items-center justify-center shadow-xs shrink-0">
                      {doc.initials}
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-[17.5px] font-bold text-[#0F172A] leading-snug">
                        {doc.name}
                      </h3>
                      <p className="text-[13.5px] font-semibold text-[#0D9488] mt-0.5">
                        {doc.specialty}
                      </p>
                    </div>
                  </div>

                  {/* Clean Unboxed Metadata with Typographic Separators */}
                  <div className="mt-4 pt-3.5 border-t border-slate-100 text-[12.5px] text-[#64748B] flex flex-wrap items-center gap-x-2 gap-y-1 tabular-nums">
                    <span>{doc.credentials}</span>
                    <span aria-hidden="true">·</span>
                    <span>{doc.experience}</span>
                  </div>

                  <p className="mt-3.5 text-[14px] leading-[1.68] text-[#526071]">
                    {doc.bio}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100/90 space-y-3">
                  <div className="text-[12.5px] text-[#526071] space-y-1.5">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-[#0D9488] shrink-0" />
                      <span>{doc.campus}</span>
                    </div>
                    <div className="flex items-center gap-2 tabular-nums">
                      <Clock className="w-3.5 h-3.5 text-[#0D9488] shrink-0" />
                      <span>{doc.availability}</span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => onBookService(doc.bookingService)}
                    className="w-full h-11 px-4 bg-[#F0FDFA] hover:bg-[#0D9488] text-[#0F766E] hover:text-white border border-[#CCFBF1] hover:border-[#0D9488] text-[13.5px] font-semibold rounded-xl inline-flex items-center justify-center gap-2 transition-colors duration-150 whitespace-nowrap cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0D9488]"
                  >
                    <Calendar className="w-4 h-4 shrink-0" />
                    <span>Book Consultation</span>
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: Patient Stories & Clinical Outcomes (Apple Glass Refractive Showcase) */}
      <section
        id="testimonials"
        className="py-20 sm:py-24 lg:py-28 relative overflow-hidden bg-gradient-to-b from-[#F0FDFA] via-[#ECFDF5]/65 to-white border-y border-[#CCFBF1]/80"
      >
        {/* Soft Ambient Orbs behind Apple Frosted Glass Cards */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-20 top-16 w-80 h-80 rounded-full bg-[#14B8A6]/18 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-8 bottom-10 w-80 h-80 rounded-full bg-[#F59E0B]/12 blur-3xl"
        />

        <div className="max-w-[1200px] mx-auto px-4 sm:px-8 relative z-10">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="max-w-xl">
                <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-[#0F172A] tracking-tight leading-[1.18]">
                  Patient Stories &amp; Clinical Outcomes
                </h2>
                <p className="mt-4 text-[15px] sm:text-[16px] text-[#526071] leading-[1.7]">
                  Real-world care scenarios illustrating how coordinated diagnostics and family
                  medicine simplify recovery.
                </p>
              </div>

              <div
                role="tablist"
                aria-label="Filter patient stories by clinic campus"
                className="apple-glass rounded-xl p-1.5 flex items-center gap-1 overflow-x-auto no-scrollbar max-w-full"
              >
                {CAMPUS_FILTERS.map((campus) => {
                  const active = selectedCampus === campus;
                  return (
                    <button
                      key={campus}
                      role="tab"
                      aria-selected={active}
                      type="button"
                      onClick={() => setSelectedCampus(campus)}
                      className={`px-4 py-2 text-[13.5px] font-semibold rounded-lg transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                        active
                          ? 'bg-[#0D9488] text-white shadow-xs'
                          : 'text-[#526071] hover:text-[#0F172A]'
                      }`}
                    >
                      {campus}
                    </button>
                  );
                })}
              </div>
            </div>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            {filteredTestimonials.map((item, idx) => (
              <motion.blockquote
                key={item.id}
                layout={!prefersReducedMotion}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="apple-glass-card rounded-2xl p-7 sm:p-8 flex flex-col justify-between h-full hover:-translate-y-1 transition-transform duration-200"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#0D9488]/10 text-[#0D9488] flex items-center justify-center mb-5">
                    <Quote className="w-5 h-5" />
                  </div>
                  <p className="text-[15px] sm:text-[15.5px] leading-[1.72] text-[#1E293B]">
                    &ldquo;{item.outcomeQuote}&rdquo;
                  </p>
                </div>

                <footer className="mt-7 pt-5 border-t border-slate-200/65">
                  <div className="text-[16px] font-bold text-[#0F172A]">
                    {item.patientName}
                  </div>
                  <div className="mt-1 text-[13px] text-[#526071] flex flex-wrap items-center gap-x-2 gap-y-0.5">
                    <span>{item.role}</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-medium text-[#0F766E]">{item.campus}</span>
                  </div>
                  <div className="mt-1 text-[12.5px] text-[#64748B] flex flex-wrap items-center gap-x-2">
                    <span>{item.serviceUsed}</span>
                    <span aria-hidden="true">·</span>
                    <span>{item.visitDate}</span>
                  </div>
                </footer>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: Preventive Wellness Packages & Frequently Asked Questions */}
      <section id="packages" className="py-20 sm:py-24 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-8">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-[#0F172A] tracking-tight leading-[1.18]">
                Preventive Health Screening Packages
              </h2>
              <p className="mt-4 text-[15px] sm:text-[16px] text-[#526071] leading-[1.7]">
                Transparent, all-inclusive annual checkups processed in our on-site accredited
                diagnostic laboratory.
              </p>
            </div>
          </Reveal>

          {/* 3 Equal-Height Preventive Packages */}
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            {WELLNESS_PACKAGES.map((pkg, idx) => (
              <Reveal key={pkg.index} delay={idx * 0.06} className="h-full">
                <div
                  className={`rounded-2xl p-7 sm:p-8 flex flex-col justify-between h-full transition-transform duration-200 hover:-translate-y-1 ${
                    pkg.featured
                      ? 'bg-gradient-to-b from-[#0B3B38] via-[#0F766E] to-[#0D9488] text-white shadow-[0_20px_48px_rgba(13,148,136,0.22)]'
                      : 'apple-glass-card text-[#0F172A]'
                  }`}
                >
                  <div>
                    <div
                      className={`text-[13px] font-semibold tabular-nums ${
                        pkg.featured ? 'text-[#5EEAD4]' : 'text-[#0D9488]'
                      }`}
                    >
                      {pkg.index}. {pkg.turnaround}
                    </div>

                    <h3
                      className={`mt-2 text-[21px] font-bold leading-snug ${
                        pkg.featured ? 'text-white' : 'text-[#0F172A]'
                      }`}
                    >
                      {pkg.name}
                    </h3>

                    <p
                      className={`mt-1.5 text-[14px] ${
                        pkg.featured ? 'text-white/85' : 'text-[#526071]'
                      }`}
                    >
                      {pkg.targetGroup}
                    </p>

                    <div className="mt-6 pb-6 border-b border-current/12 flex items-baseline gap-2">
                      <span className="text-[36px] sm:text-[40px] font-extrabold tracking-tight tabular-nums leading-none">
                        {pkg.price}
                      </span>
                      <span
                        className={`text-[13.5px] ${
                          pkg.featured ? 'text-white/80' : 'text-[#64748B]'
                        }`}
                      >
                        / complete assessment
                      </span>
                    </div>

                    <ul className="mt-6 space-y-3.5 text-[14.5px]">
                      {pkg.inclusions.map((inc) => (
                        <li key={inc} className="flex items-start gap-3">
                          <Check
                            className={`w-4.5 h-4.5 shrink-0 mt-0.5 ${
                              pkg.featured ? 'text-[#F59E0B]' : 'text-[#0D9488]'
                            }`}
                          />
                          <span className={pkg.featured ? 'text-white/95' : 'text-[#334155]'}>
                            {inc}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    type="button"
                    onClick={() => onBookService(pkg.bookingService)}
                    className={`mt-8 w-full h-12 px-6 rounded-xl text-[14.5px] font-bold inline-flex items-center justify-center transition-all duration-150 whitespace-nowrap cursor-pointer ${
                      pkg.featured
                        ? 'bg-[#F59E0B] hover:bg-[#FBBF24] text-[#0F172A] shadow-sm'
                        : 'bg-[#0D9488] hover:bg-[#0F766E] text-white'
                    }`}
                  >
                    Select Screening Package
                  </button>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Patient Frequently Asked Questions Split Block */}
          <div id="faq" className="mt-20 sm:mt-24 pt-16 sm:pt-20 border-t border-slate-200/75">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              <Reveal className="lg:col-span-5">
                <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-bold text-[#0F172A] tracking-tight leading-[1.2]">
                  Frequently Asked Questions
                </h2>
                <p className="mt-4 text-[15px] sm:text-[16px] text-[#526071] leading-[1.7]">
                  Everything you need to know before visiting our outpatient clinics, diagnostic
                  suites, or 24-hour emergency unit.
                </p>

                {/* Apple Frosted Glass Quick Reception Support Card */}
                <div className="mt-8 apple-glass rounded-2xl p-6 bg-[#F0FDFA]/65 border border-[#CCFBF1]">
                  <div className="flex items-start gap-4">
                    <span className="w-11 h-11 rounded-xl bg-[#0D9488] text-white flex items-center justify-center shrink-0">
                      <Stethoscope className="w-5 h-5" />
                    </span>
                    <div>
                      <h3 className="text-[16.5px] font-bold text-[#0F172A]">
                        Need Triage Guidance?
                      </h3>
                      <p className="mt-1 text-[14px] text-[#526071] leading-relaxed">
                        Speak directly with our duty nurse desk for same-day slot availability or
                        lab fasting instructions.
                      </p>
                      <a
                        href="tel:+6564829100"
                        className="mt-3.5 inline-flex items-center gap-2 text-[14.5px] font-bold text-[#0F766E] hover:text-[#0D9488] tabular-nums"
                      >
                        <PhoneCall className="w-4 h-4 shrink-0" />
                        <span>+65 6482 9100</span>
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* Smooth Accordion List */}
              <div className="lg:col-span-7 space-y-3.5">
                {FAQ_ITEMS.map((faq, idx) => {
                  const isOpen = openFaqId === faq.id;
                  return (
                    <Reveal key={faq.id} delay={idx * 0.04}>
                      <div className="apple-glass-card rounded-2xl overflow-hidden transition-colors">
                        <button
                          type="button"
                          onClick={() => setOpenFaqId(isOpen ? '' : faq.id)}
                          aria-expanded={isOpen}
                          className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#0D9488]"
                        >
                          <span className="text-[16px] font-bold text-[#0F172A] leading-snug">
                            {faq.question}
                          </span>
                          <ChevronDown
                            className={`w-5 h-5 text-[#0D9488] shrink-0 transition-transform duration-200 ${
                              isOpen ? 'rotate-180' : ''
                            }`}
                          />
                        </button>

                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              initial={prefersReducedMotion ? false : { opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.18 }}
                              className="px-6 pb-5 pt-0 text-[14.5px] sm:text-[15px] leading-[1.7] text-[#526071] border-t border-slate-100/80"
                            >
                              <div className="pt-3.5">{faq.answer}</div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
