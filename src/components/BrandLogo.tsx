import React from 'react';

interface BrandLogoProps {
  size?: 'sm' | 'md';
  onClick?: () => void;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ size = 'md', onClick }) => {
  const iconDim = size === 'sm' ? 'w-7 h-7' : 'w-9 h-9';
  const textSize = size === 'sm' ? 'text-[20px]' : 'text-[24px]';

  return (
    <a
      href="#home"
      onClick={(e) => {
        if (onClick) {
          e.preventDefault();
          onClick();
        }
      }}
      className="inline-flex items-center gap-3 whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0D9488] rounded-md"
    >
      {/* Bespoke Aurelia Care Botanical Shield & Medical Cross Emblem */}
      <svg
        viewBox="0 0 38 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${iconDim} shrink-0`}
        aria-hidden="true"
      >
        <rect x="3" y="3" width="24" height="24" rx="7" fill="#0F766E" />
        <rect x="11" y="11" width="24" height="24" rx="7" fill="#14B8A6" fillOpacity="0.9" />
        <path
          d="M19 13.5V24.5M13.5 19H24.5"
          stroke="#FFFFFF"
          strokeWidth="2.8"
          strokeLinecap="round"
        />
        <circle cx="29.5" cy="8.5" r="3" fill="#F59E0B" />
      </svg>
      <span
        className={`font-extrabold tracking-tight text-[#0F172A] leading-none ${textSize}`}
        style={{ fontFamily: 'var(--font-display)' }}
      >
        Aurelia<span className="text-[#0D9488]">Care</span>
        <span className="text-[#F59E0B]">.</span>
      </span>
    </a>
  );
};

export const PartnerLogos: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-center">
      {/* 1. NEW JERSEY OLD OAK FOUNDATION */}
      <div className="h-20 px-5 rounded-xl border border-[#CCFBF1]/80 bg-[#F8FAFC] hover:border-[#0D9488]/35 hover:bg-[#F0FDFA] flex items-center justify-center gap-3.5 text-[#526071] hover:text-[#0F766E] transition-all duration-200 select-none">
        <svg viewBox="0 0 48 48" className="w-12 h-12 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M24 38V24" strokeWidth="2.4" strokeLinecap="round" />
          <path d="M16 38H32" strokeWidth="2" strokeLinecap="round" />
          <path d="M24 27L19 23M24 25L29 21" strokeLinecap="round" />
          <path
            d="M12 24C9.5 24 8 21.8 8 19.5C8 17.2 9.8 15.5 12 15.2C12.5 11.5 16 9 20 9.5C21.5 8 23.8 7.5 26 8.5C29.5 7.8 33 10.2 33.8 13.8C36.8 14.3 39 16.8 39 19.8C39 22.5 36.8 24 34 24H12Z"
            fill="currentColor"
            fillOpacity="0.16"
          />
          <rect x="6" y="6" width="36" height="36" rx="4" strokeOpacity="0.28" strokeWidth="1.2" />
        </svg>
        <div className="leading-[1.2] text-left">
          <div className="text-[11px] font-bold tracking-wider">GREENWOOD</div>
          <div className="text-[11px] font-bold tracking-wider">HERITAGE OAK</div>
          <div className="text-[9.5px] font-medium tracking-widest opacity-80">FOUNDATION</div>
        </div>
      </div>

      {/* 2. Vital Tree */}
      <div className="h-20 px-5 rounded-xl border border-[#CCFBF1]/80 bg-[#F8FAFC] hover:border-[#0D9488]/35 hover:bg-[#F0FDFA] flex items-center justify-center gap-3 text-[#526071] hover:text-[#0F766E] transition-all duration-200 select-none">
        <svg viewBox="0 0 48 48" className="w-12 h-12 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.7">
          <path d="M24 40C24 31 21 26 16 22M24 40C24 31 27 26 32 22M24 40V20" strokeLinecap="round" />
          <circle cx="24" cy="12" r="3" fill="currentColor" fillOpacity="0.25" />
          <circle cx="16" cy="15" r="2.8" fill="currentColor" fillOpacity="0.25" />
          <circle cx="32" cy="15" r="2.8" fill="currentColor" fillOpacity="0.25" />
          <circle cx="12" cy="22" r="2.4" fill="currentColor" fillOpacity="0.25" />
          <circle cx="36" cy="22" r="2.4" fill="currentColor" fillOpacity="0.25" />
          <circle cx="20" cy="18" r="2.4" fill="currentColor" fillOpacity="0.25" />
          <circle cx="28" cy="18" r="2.4" fill="currentColor" fillOpacity="0.25" />
        </svg>
        <div className="text-left">
          <div className="text-[20px] font-semibold tracking-tight leading-none" style={{ fontFamily: 'Georgia, serif' }}>
            Vital Tree
          </div>
          <div className="text-[9px] tracking-[0.16em] opacity-75 mt-1.5 font-medium">MEDICAL TRUST</div>
        </div>
      </div>

      {/* 3. HEART CARE CENTER */}
      <div className="h-20 px-5 rounded-xl border border-[#CCFBF1]/80 bg-[#F8FAFC] hover:border-[#0D9488]/35 hover:bg-[#F0FDFA] flex items-center justify-center gap-3.5 text-[#526071] hover:text-[#0F766E] transition-all duration-200 select-none">
        <svg viewBox="0 0 48 48" className="w-12 h-12 shrink-0" fill="none">
          <circle cx="24" cy="9" r="3" fill="currentColor" />
          <path
            d="M24 39C24 39 10 30.5 10 19.5C10 15 13.5 12 17.5 12C20.4 12 22.8 13.7 24 16C25.2 13.7 27.6 12 30.5 12C34.5 12 38 15 38 19.5C38 30.5 24 39 24 39Z"
            stroke="currentColor"
            strokeWidth="3.2"
            strokeLinejoin="round"
          />
          <path d="M16 24H21L23 20L26 28L28 24H32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <div className="leading-[1.2] text-left">
          <div className="text-[11px] font-bold tracking-wider">CARDIO</div>
          <div className="text-[11px] font-bold tracking-wider">VITALITY</div>
          <div className="text-[11px] font-bold tracking-wider">INSTITUTE</div>
        </div>
      </div>

      {/* 4. Life Care */}
      <div className="h-20 px-5 rounded-xl border border-[#CCFBF1]/80 bg-[#F8FAFC] hover:border-[#0D9488]/35 hover:bg-[#F0FDFA] flex items-center justify-center gap-3 text-[#526071] hover:text-[#0F766E] transition-all duration-200 select-none">
        <svg viewBox="0 0 48 48" className="w-12 h-12 shrink-0" fill="none" stroke="currentColor" strokeWidth="2">
          <path
            d="M24 39C24 39 9 30 9 18.8C9 14.2 12.6 11 16.8 11C19.9 11 22.5 12.8 24 15.3C25.5 12.8 28.1 11 31.2 11C35.4 11 39 14.2 39 18.8C39 30 24 39 24 39Z"
            strokeLinejoin="round"
          />
          <circle cx="20" cy="21" r="2.2" />
          <circle cx="28" cy="21" r="2.2" />
          <circle cx="24" cy="25" r="1.8" />
          <path d="M17 29C18.5 27 21 26.5 24 28.5C27 26.5 29.5 27 31 29" strokeLinecap="round" />
        </svg>
        <div className="text-left">
          <div className="text-[20px] font-semibold tracking-tight leading-none">Solace Life</div>
          <div className="text-[9px] tracking-[0.16em] opacity-75 mt-1.5 font-medium">HEALTHCARE ALLIANCE</div>
        </div>
      </div>
    </div>
  );
};
