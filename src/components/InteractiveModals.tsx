import React, { useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { X, Check, Clock, Building2, ShieldCheck, Stethoscope, Calendar } from 'lucide-react';
import { INFO_PAGES, ServiceDetail } from '../data/medkitData';

interface ServiceModalProps {
  service: ServiceDetail | null;
  onClose: () => void;
  onBookService: (serviceId: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceModalProps> = ({
  service,
  onClose,
  onBookService,
}) => {
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (service) window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [service, onClose]);

  return (
    <AnimatePresence>
      {service && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="service-modal-title"
          initial={prefersReducedMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/45 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.96, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 8 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="apple-glass-card bg-white/92 rounded-2xl max-w-lg w-full p-6 sm:p-9 relative max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close service details"
              className="w-10 h-10 rounded-full hover:bg-slate-100 flex items-center justify-center text-slate-500 absolute right-4 top-4 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2.5 text-[13px] text-[#0D9488] font-semibold">
              <Stethoscope className="w-4 h-4 shrink-0" />
              <span>Aurelia Care Clinical Department</span>
            </div>

            <h3 id="service-modal-title" className="mt-2.5 text-2xl font-bold text-[#0F172A] pr-8">
              {service.title}
            </h3>

            <p className="mt-3.5 text-[15px] leading-[1.7] text-[#526071]">
              {service.fullDescription}
            </p>

            <div className="mt-6 space-y-3">
              {service.highlights.map((pt) => (
                <div key={pt} className="flex items-start gap-3 text-[14.5px] text-[#334155]">
                  <Check className="w-4.5 h-4.5 text-[#0D9488] shrink-0 mt-0.5" />
                  <span>{pt}</span>
                </div>
              ))}
            </div>

            <div className="mt-7 pt-5 border-t border-slate-200/70 grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-[13.5px] text-[#526071]">
              <div className="flex items-center gap-2.5">
                <Building2 className="w-4.5 h-4.5 text-[#0D9488] shrink-0" />
                <span>{service.department}</span>
              </div>
              <div className="flex items-center gap-2.5 tabular-nums">
                <Clock className="w-4.5 h-4.5 text-[#0D9488] shrink-0" />
                <span>{service.schedule}</span>
              </div>
            </div>

            <div className="mt-8 flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="h-11 px-5 text-[14px] font-semibold text-[#526071] hover:text-[#0F172A] rounded-xl cursor-pointer"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => onBookService(service.id)}
                className="h-11 px-6 bg-[#0D9488] hover:bg-[#0F766E] text-white text-[14px] font-semibold rounded-xl inline-flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <Calendar className="w-4 h-4 shrink-0" />
                <span>Book This Service</span>
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookAppointment: () => void;
}

export const ClinicVideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  onClose,
  onBookAppointment,
}) => {
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="video-modal-title"
          initial={prefersReducedMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/55 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.96, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 8 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="apple-glass-card bg-white/95 rounded-2xl max-w-2xl w-full overflow-hidden max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative bg-gradient-to-br from-[#0B3B38] via-[#0F766E] to-[#14B8A6] p-6 sm:p-10 text-white">
              <button
                type="button"
                onClick={onClose}
                aria-label="Close clinic overview"
                className="w-10 h-10 rounded-full apple-glass-tint hover:bg-white/25 flex items-center justify-center text-white absolute right-4 top-4 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 text-[13px] text-white/90 font-medium pr-10">
                <ShieldCheck className="w-4.5 h-4.5 shrink-0" />
                <span>Aurelia Care Clinical Pharmacy &amp; Diagnostic Tour</span>
              </div>

              <h3 id="video-modal-title" className="mt-3 text-2xl sm:text-3xl font-bold leading-snug max-w-lg">
                Evidence-Based Diagnostics &amp; Certified Medication Care
              </h3>

              <p className="mt-3.5 text-[15px] text-white/95 max-w-xl leading-relaxed">
                Inside our Orchard, River Valley, and Marina Bay clinics, every prescription goes
                through dual physician-pharmacist verification to guarantee safety, authenticity, and
                personalized dosing.
              </p>

              <div className="mt-7 grid grid-cols-1 sm:grid-cols-3 gap-3.5 text-left">
                <div className="apple-glass-tint rounded-xl p-4">
                  <div className="text-xl font-extrabold tabular-nums">100%</div>
                  <div className="text-[13px] text-white/90 mt-1">WHO-GMP Certified Medicines</div>
                </div>
                <div className="apple-glass-tint rounded-xl p-4">
                  <div className="text-xl font-extrabold tabular-nums">24 / 7</div>
                  <div className="text-[13px] text-white/90 mt-1">Emergency &amp; On-Call Physicians</div>
                </div>
                <div className="apple-glass-tint rounded-xl p-4">
                  <div className="text-xl font-extrabold tabular-nums">&lt; 30 min</div>
                  <div className="text-[13px] text-white/90 mt-1">Rapid Lab &amp; Pharmacy Dispensing</div>
                </div>
              </div>
            </div>

            <div className="px-6 sm:px-9 py-5 bg-white/95 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <span className="text-[14px] text-[#526071] text-center sm:text-left">
                Need a specialist consultation or prescription review today?
              </span>
              <div className="flex flex-col-reverse sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="h-11 px-4 text-[14px] font-semibold text-[#526071] hover:text-[#0F172A] cursor-pointer"
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onBookAppointment();
                  }}
                  className="h-11 px-6 bg-[#0D9488] hover:bg-[#0F766E] text-white text-[14px] font-semibold rounded-xl inline-flex items-center justify-center transition-colors cursor-pointer"
                >
                  Schedule Consultation
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

interface InfoPageModalProps {
  pageKey: string | null;
  onClose: () => void;
}

export const InfoPageModal: React.FC<InfoPageModalProps> = ({ pageKey, onClose }) => {
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (pageKey) window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [pageKey, onClose]);

  const page = pageKey ? INFO_PAGES[pageKey] : null;

  return (
    <AnimatePresence>
      {page && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="info-modal-title"
          initial={prefersReducedMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/45 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.96, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 8 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="apple-glass-card bg-white/95 rounded-2xl max-w-lg w-full p-6 sm:p-9 relative max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close information dialog"
              className="w-10 h-10 rounded-full hover:bg-slate-100 flex items-center justify-center text-slate-500 absolute right-4 top-4 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 id="info-modal-title" className="text-2xl font-bold text-[#0F172A] pr-8">
              {page.title}
            </h3>
            <p className="mt-2 text-[14px] font-medium text-[#0D9488]">{page.subtitle}</p>

            <div className="mt-5 space-y-4 text-[15px] leading-[1.7] text-[#526071]">
              {page.paragraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            <div className="mt-7 flex justify-end">
              <button
                type="button"
                onClick={onClose}
                className="h-11 px-6 w-full sm:w-auto bg-[#0D9488] hover:bg-[#0F766E] text-white text-[14px] font-semibold rounded-xl inline-flex items-center justify-center cursor-pointer"
              >
                Got It
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
