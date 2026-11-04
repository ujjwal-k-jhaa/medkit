import React, { useState, useEffect, RefObject } from 'react';
import { MapPin, Phone, Mail, Calendar, ChevronDown, CheckCircle2 } from 'lucide-react';
import { CLINIC_LOCATIONS } from '../data/medkitData';
import { Reveal } from './Reveal';

interface AppointmentSectionProps {
  selectedService: string;
  onServiceChange: (service: string) => void;
  nameInputRef: RefObject<HTMLInputElement | null>;
}

const SERVICE_OPTIONS = [
  'Dental Service',
  'Primary Care',
  'Vaccination',
  'Diagnostic Services',
  'Doctor on Call',
  'Laboratory & Radiology',
  'Emergency Treatment',
];

export const AppointmentSection: React.FC<AppointmentSectionProps> = ({
  selectedService,
  onServiceChange,
  nameInputRef,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [message, setMessage] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [bookingConfirmation, setBookingConfirmation] = useState<{
    refCode: string;
    name: string;
    service: string;
    date: string;
  } | null>(null);

  useEffect(() => {
    if (selectedService) {
      setBookingConfirmation(null);
    }
  }, [selectedService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!name.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }
    if (!date) {
      setErrorMsg('Please choose your preferred appointment date.');
      return;
    }
    if (!selectedService) {
      setErrorMsg('Please select a medical service.');
      return;
    }

    const code = `AC-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingConfirmation({
      refCode: code,
      name: name.trim(),
      service: selectedService,
      date,
    });
  };

  const resetForm = () => {
    setBookingConfirmation(null);
    setName('');
    setEmail('');
    setDate('');
    onServiceChange('');
    setMessage('');
    setErrorMsg('');
  };

  return (
    <section id="appointment" className="relative py-8 lg:py-14">
      {/* Soft Botanical Aqua-Sage Band with Ambient Refraction Glow */}
      <div className="relative bg-[#F0FDFA] border-y border-[#CCFBF1]/85">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-12 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#14B8A6]/15 blur-3xl hidden lg:block"
        />

        <div className="max-w-[1200px] mx-auto px-4 sm:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Make Appointment Info & 2 Clinic Campuses */}
            <Reveal className="lg:col-span-6 pt-12 pb-2 lg:py-20">
              <h2 className="text-[28px] sm:text-[38px] lg:text-[42px] font-bold text-[#0F172A] tracking-tight leading-[1.18]">
                Make Appointment
              </h2>

              <p className="mt-4 sm:mt-5 text-[15px] sm:text-[16px] leading-[1.72] text-[#526071]">
                Getting an accurate diagnosis can be one of the most impactful experiences that you
                can have — especially if you&apos;ve been in search of that answer for a while. We
                can help you get there.
              </p>

              {/* Two Clinic Campuses — Apple-Glass Location Cards on Mobile/Desktop */}
              <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                {CLINIC_LOCATIONS.map((loc) => (
                  <div key={loc.city} className="apple-glass rounded-2xl p-5 flex flex-col">
                    <h3 className="text-[16.5px] font-bold text-[#0F172A]">
                      {loc.city}
                    </h3>
                    <ul className="mt-3.5 space-y-2.5 text-[14px] text-[#526071]">
                      <li className="flex items-start gap-2.5 sm:min-h-[46px]">
                        <MapPin className="w-4 h-4 text-[#0D9488] shrink-0 mt-1" />
                        <span className="leading-[1.55]">{loc.address}</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <Phone className="w-4 h-4 text-[#0D9488] shrink-0" />
                        <a
                          href={`tel:${loc.phone.replace(/\s+/g, '')}`}
                          className="hover:text-[#0D9488] transition-colors tabular-nums font-semibold text-[#334155]"
                        >
                          {loc.phone}
                        </a>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <Mail className="w-4 h-4 text-[#0D9488] shrink-0" />
                        <a
                          href={`mailto:${loc.email}`}
                          className="hover:text-[#0D9488] transition-colors truncate"
                        >
                          {loc.email}
                        </a>
                      </li>
                    </ul>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Right Column: Elevated Overlapping Apple-Glass Appointment Card */}
            <Reveal delay={0.1} className="lg:col-span-6 pb-12 lg:pb-0 lg:-my-12 relative z-10">
              <div className="apple-glass-card bg-white/92 rounded-2xl p-6 sm:p-9 lg:p-10">
                {bookingConfirmation ? (
                  <div className="py-6 sm:py-8 text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-[#0D9488]/14 text-[#0D9488] flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-9 h-9" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#0F172A]">
                      Appointment Preview Confirmed
                    </h3>
                    <p className="text-[15px] text-[#526071] max-w-md mx-auto leading-relaxed">
                      Thank you, <span className="font-semibold text-[#0F172A]">{bookingConfirmation.name}</span>. Your showcase booking preview for <span className="font-semibold text-[#0D9488]">{bookingConfirmation.service}</span> is ready.
                    </p>
                    <div className="bg-[#F0FDFA] border border-[#CCFBF1] rounded-xl p-4 max-w-xs mx-auto text-[14px] text-[#334155] space-y-1.5 tabular-nums">
                      <div>
                        Reference ID: <span className="font-bold text-[#0F172A]">{bookingConfirmation.refCode}</span>
                      </div>
                      <div>
                        Preferred Date: <span className="font-bold text-[#0F172A]">{bookingConfirmation.date}</span>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={resetForm}
                      className="mt-3 h-12 px-7 w-full sm:w-auto bg-[#0D9488] hover:bg-[#0F766E] text-white text-[14.5px] font-semibold rounded-xl transition-colors cursor-pointer"
                    >
                      Book Another Appointment
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-4">
                    <div>
                      <label htmlFor="appt-name" className="sr-only">
                        Your Name
                      </label>
                      <input
                        ref={nameInputRef}
                        id="appt-name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your Name"
                        className="w-full h-12 px-4 text-[15px] text-[#0F172A] placeholder:text-[#94A3B8] bg-white/95 border border-[#DCE4EE] rounded-xl focus:outline-none focus:border-[#0D9488] focus:ring-3 focus:ring-[#0D9488]/12 transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="appt-email" className="sr-only">
                        Your Email
                      </label>
                      <input
                        id="appt-email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your Email"
                        className="w-full h-12 px-4 text-[15px] text-[#0F172A] placeholder:text-[#94A3B8] bg-white/95 border border-[#DCE4EE] rounded-xl focus:outline-none focus:border-[#0D9488] focus:ring-3 focus:ring-[#0D9488]/12 transition-all"
                      />
                    </div>

                    <div className="relative">
                      <label htmlFor="appt-date" className="sr-only">
                        Appointment Date
                      </label>
                      <input
                        id="appt-date"
                        type={date ? 'date' : 'text'}
                        onFocus={(e) => {
                          e.currentTarget.type = 'date';
                        }}
                        onBlur={(e) => {
                          if (!e.currentTarget.value) {
                            e.currentTarget.type = 'text';
                          }
                        }}
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        placeholder="dd/mm/yyyy"
                        className="w-full h-12 px-4 pr-11 text-[15px] text-[#0F172A] placeholder:text-[#64748B] bg-white/95 border border-[#DCE4EE] rounded-xl focus:outline-none focus:border-[#0D9488] focus:ring-3 focus:ring-[#0D9488]/12 transition-all tabular-nums"
                      />
                      <Calendar className="pointer-events-none w-4.5 h-4.5 text-[#475569] absolute right-4 top-1/2 -translate-y-1/2" />
                    </div>

                    <div className="relative">
                      <label htmlFor="appt-service" className="sr-only">
                        Select Services
                      </label>
                      <select
                        id="appt-service"
                        value={selectedService}
                        onChange={(e) => onServiceChange(e.target.value)}
                        className={`w-full h-12 px-4 pr-11 text-[15px] bg-white/95 border border-[#DCE4EE] rounded-xl appearance-none focus:outline-none focus:border-[#0D9488] focus:ring-3 focus:ring-[#0D9488]/12 transition-all cursor-pointer ${
                          selectedService ? 'text-[#0F172A]' : 'text-[#64748B]'
                        }`}
                      >
                        <option value="">Select Services</option>
                        {SERVICE_OPTIONS.map((opt) => (
                          <option key={opt} value={opt} className="text-[#0F172A]">
                            {opt}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="pointer-events-none w-4.5 h-4.5 text-[#64748B] absolute right-4 top-1/2 -translate-y-1/2" />
                    </div>

                    <div>
                      <label htmlFor="appt-message" className="sr-only">
                        Your Message
                      </label>
                      <textarea
                        id="appt-message"
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Your Message"
                        className="w-full p-4 text-[15px] text-[#0F172A] placeholder:text-[#94A3B8] bg-white/95 border border-[#DCE4EE] rounded-xl resize-none focus:outline-none focus:border-[#0D9488] focus:ring-3 focus:ring-[#0D9488]/12 transition-all"
                      />
                    </div>

                    {errorMsg && (
                      <p role="alert" className="text-[13.5px] font-medium text-red-600">
                        {errorMsg}
                      </p>
                    )}

                    <div className="pt-1">
                      <button
                        type="submit"
                        className="h-12 px-7 w-full sm:w-auto bg-[#0D9488] hover:bg-[#0F766E] active:scale-[0.98] text-white text-[15px] font-semibold rounded-xl inline-flex items-center justify-center transition-all duration-150 whitespace-nowrap cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0D9488]"
                      >
                        Make an Appointment
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
