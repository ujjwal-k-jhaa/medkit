import React from 'react';
import {
  Building2,
  UserRoundCheck,
  Stethoscope,
  HeartPulse,
  Clock,
  Phone,
} from 'lucide-react';
import { HEALTHCARE_SERVICES, ServiceDetail } from '../data/medkitData';
import { Reveal } from './Reveal';

interface ServicesSectionProps {
  onSelectService: (service: ServiceDetail) => void;
  onBookAppointment: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  onBookAppointment,
}) => {
  const renderServiceIcon = (type: 'diagnostic' | 'doctor' | 'lab' | 'emergency') => {
    switch (type) {
      case 'diagnostic':
        return <Building2 className="w-6 h-6 stroke-[1.75]" />;
      case 'doctor':
        return <UserRoundCheck className="w-6 h-6 stroke-[1.75]" />;
      case 'lab':
        return <Stethoscope className="w-6 h-6 stroke-[1.75]" />;
      case 'emergency':
        return <HeartPulse className="w-6 h-6 stroke-[1.75]" />;
    }
  };

  return (
    <section id="services" className="py-16 sm:py-24 lg:py-28 bg-white relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 bottom-8 w-80 h-80 rounded-full bg-[#14B8A6]/8 blur-3xl"
      />
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8 relative z-10">
        {/* Centered Header */}
        <Reveal className="text-center max-w-2xl mx-auto">
          <h2 className="text-[28px] sm:text-[38px] lg:text-[42px] font-bold text-[#0F172A] tracking-tight leading-[1.18]">
            We Provide Best Healthcare Services
          </h2>
          <p className="mt-4 text-[15px] sm:text-[16px] text-[#526071] leading-[1.7]">
            Getting an accurate diagnosis can be one of the most impactful experiences that you can have.
          </p>
        </Reveal>

        {/* 2x2 Services Grid + Tall Opening Hours Card */}
        <div className="mt-12 sm:mt-14 grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 gap-5 sm:gap-6 h-full">
            {HEALTHCARE_SERVICES.map((service, idx) => (
              <Reveal key={service.id} delay={idx * 0.05} className="h-full">
                <button
                  type="button"
                  onClick={() => onSelectService(service)}
                  className="w-full h-full text-left apple-glass-card rounded-2xl p-6 sm:p-7 flex items-start gap-4 sm:gap-5 hover:border-[#0D9488]/40 hover:-translate-y-1 transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0D9488]"
                >
                  <span
                    className={`w-13 h-13 rounded-2xl flex items-center justify-center shrink-0 mt-0.5 transition-transform duration-200 ${
                      service.filledIcon
                        ? 'bg-[#0D9488] text-white shadow-xs'
                        : 'bg-[#F0FDFA] border border-[#CCFBF1] text-[#0D9488]'
                    }`}
                  >
                    {renderServiceIcon(service.iconType)}
                  </span>

                  <div className="flex-1">
                    <h3 className="text-[18px] font-bold text-[#0F172A] leading-snug">
                      {service.title}
                    </h3>
                    <p className="mt-2.5 text-[14.5px] leading-[1.68] text-[#526071]">
                      {service.shortDescription}
                    </p>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>

          {/* Right Column: Opening Hours Card with Apple Glass Schedule Panel */}
          <Reveal delay={0.14} className="lg:col-span-4 h-full">
            <div className="h-full bg-gradient-to-b from-[#0F766E] via-[#0D9488] to-[#14B8A6] rounded-2xl shadow-[0_18px_44px_rgba(13,148,136,0.22)] border border-white/20 p-7 sm:p-8 text-white flex flex-col justify-between">
              <div>
                <h3 className="text-[22px] font-bold text-white leading-snug">
                  Opening Hours
                </h3>
                <p className="mt-3.5 text-[14.5px] leading-[1.7] text-white/95">
                  Our outpatient specialists, diagnostic suites, and in-house clinical pharmacy welcome walk-ins and scheduled visits seven days a week.
                </p>

                <div className="mt-6 apple-glass-tint rounded-xl px-4 py-1 divide-y divide-white/20 text-[14px] sm:text-[14.5px]">
                  <div className="py-3.5 flex items-center justify-between gap-4">
                    <span className="font-semibold text-white whitespace-nowrap">Mon-Fri</span>
                    <span className="inline-flex items-center gap-2 text-white/95 tabular-nums whitespace-nowrap">
                      <Clock className="w-4 h-4 opacity-90 shrink-0" />
                      <span>6am - 10pm</span>
                    </span>
                  </div>

                  <div className="py-3.5 flex items-center justify-between gap-4">
                    <span className="font-semibold text-white whitespace-nowrap">Sat-Sun</span>
                    <span className="inline-flex items-center gap-2 text-white/95 tabular-nums whitespace-nowrap">
                      <Clock className="w-4 h-4 opacity-90 shrink-0" />
                      <span>6am - 8pm</span>
                    </span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={onBookAppointment}
                className="mt-8 w-full h-12 bg-[#F59E0B] hover:bg-[#FBBF24] active:scale-[0.98] text-[#0F172A] text-[14.5px] font-bold px-5 rounded-xl inline-flex items-center justify-center gap-2.5 shadow-xs transition-all duration-150 whitespace-nowrap cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <Phone className="w-4 h-4 fill-current text-[#0F172A] shrink-0" />
                <span>Book Appointment</span>
              </button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
