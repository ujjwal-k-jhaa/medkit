import React, { useState } from 'react';
import {
  Building,
  Award,
  Hospital,
  Users,
  UserCheck,
  Building2,
  Stethoscope,
} from 'lucide-react';
import { Reveal } from './Reveal';

export const AboutSection: React.FC = () => {
  const [doctorImgError, setDoctorImgError] = useState(false);

  const trustFeatures = [
    {
      title: '24 Hour Healthcare Services',
      description:
        'We are committed to your health and well-being, offering the very latest in comprehensive evidence-based care.',
      icon: Building,
    },
    {
      title: 'International Standards',
      description:
        'We are committed to your health and well-being, offering the very latest in comprehensive evidence-based care.',
      icon: Award,
    },
    {
      title: 'Center of Excellence',
      description:
        'We are committed to your health and well-being, offering the very latest in comprehensive evidence-based care.',
      icon: Hospital,
    },
  ];

  const clinicStats = [
    {
      value: '20 +',
      label: 'Years Of Experience',
      icon: Award,
    },
    {
      value: '8,450 +',
      label: 'Happy Patients',
      icon: Users,
    },
    {
      value: '1,250 +',
      label: 'Doctors and Staff',
      icon: UserCheck,
    },
    {
      value: '425 +',
      label: 'Hospital Rooms',
      icon: Building2,
    },
  ];

  return (
    <>
      {/* Medical Clinic That You Can Trust */}
      <section id="about" className="py-16 sm:py-24 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left Copy & 3 Trust Pillars */}
            <Reveal className="lg:col-span-6">
              <h2 className="text-[28px] sm:text-[38px] lg:text-[42px] font-bold text-[#0F172A] tracking-tight leading-[1.18]">
                Medical Clinic that
                <br />
                you can trust
              </h2>

              <p className="mt-4 sm:mt-5 text-[15px] sm:text-[16px] leading-[1.72] text-[#526071]">
                Getting an accurate diagnosis can be one of the most impactful experiences that you
                can have — especially if you&apos;ve been in search of that answer for a while. At
                Aurelia Care, we help you get there with clarity.
              </p>

              <div className="mt-8 sm:mt-9 space-y-6 sm:space-y-7">
                {trustFeatures.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={item.title} className="flex items-start gap-4 sm:gap-5 group">
                      <div className="w-13 h-13 rounded-2xl apple-glass bg-[#F0FDFA]/80 border border-[#CCFBF1] flex items-center justify-center text-[#0D9488] group-hover:bg-[#0D9488] group-hover:text-white transition-colors duration-200 shrink-0 mt-0.5">
                        <IconComponent className="w-6 h-6 stroke-[1.75]" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-[17px] sm:text-[17.5px] font-bold text-[#0F172A] leading-snug">
                          {item.title}
                        </h3>
                        <p className="mt-1.5 text-[14.5px] sm:text-[15px] leading-[1.68] text-[#526071]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Reveal>

            {/* Right Doctor Composite Portrait */}
            <Reveal delay={0.1} className="lg:col-span-6 flex items-center justify-center lg:justify-end">
              {!doctorImgError ? (
                <img
                  src="/assets/medkit/cura-doctor-male.jpg"
                  alt="Senior Aurelia Care physician holding patient chart in clinic corridor"
                  referrerPolicy="no-referrer"
                  onError={() => setDoctorImgError(true)}
                  className="w-full max-w-[380px] sm:max-w-[460px] h-auto object-contain select-none"
                />
              ) : (
                <div className="w-full max-w-[440px] aspect-[4/5] rounded-tl-[56px] rounded-br-[56px] bg-gradient-to-br from-[#F0FDFA] to-[#CCFBF1] flex flex-col items-center justify-center p-8 text-center">
                  <Stethoscope className="w-14 h-14 text-[#0D9488] mb-3" />
                  <span className="text-lg font-bold text-[#0F172A]">Aurelia Specialist Team</span>
                  <span className="text-sm text-[#526071] mt-1">Board-Certified Physicians</span>
                </div>
              )}
            </Reveal>
          </div>
        </div>
      </section>

      {/* 4-Column Statistics Strip — Soft Botanical Aqua-Sage Band with Apple Glass Icon Tiles */}
      <section id="stats" className="relative overflow-hidden bg-[#F0FDFA] py-14 sm:py-20 border-y border-[#CCFBF1]/85">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[560px] h-32 rounded-full bg-[#14B8A6]/12 blur-3xl"
        />
        <div className="max-w-[1200px] mx-auto px-4 sm:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-4 sm:gap-x-6 lg:gap-0 lg:divide-x lg:divide-[#99F6E4]/65 text-center">
            {clinicStats.map((stat, idx) => {
              const StatIcon = stat.icon;
              return (
                <Reveal key={stat.label} delay={idx * 0.05} className="flex flex-col items-center justify-center px-2 sm:px-4">
                  <div className="w-13 h-13 rounded-2xl apple-glass flex items-center justify-center text-[#0D9488] mb-4">
                    <StatIcon className="w-6 h-6 stroke-[1.75]" />
                  </div>
                  <div className="text-[26px] sm:text-[34px] font-extrabold text-[#0F172A] tabular-nums tracking-tight leading-none">
                    {stat.value}
                  </div>
                  <div className="mt-2.5 text-[13.5px] sm:text-[15px] font-medium text-[#526071]">
                    {stat.label}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
