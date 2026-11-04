export interface ServiceDetail {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  highlights: string[];
  department: string;
  schedule: string;
  image?: string;
}

export interface SpecialistDoctor {
  id: string;
  name: string;
  specialty: string;
  departmentFilter: 'Family Medicine' | 'Cardiology & Diagnostics' | 'Dental & Oral Care';
  bookingService: string;
  experience: string;
  campus: string;
  credentials: string;
  bio: string;
  availability: string;
  initials: string;
}

export interface PatientTestimonial {
  id: string;
  patientName: string;
  role: string;
  campus: string;
  serviceUsed: string;
  outcomeQuote: string;
  visitDate: string;
}

export interface WellnessPackage {
  index: string;
  name: string;
  targetGroup: string;
  price: string;
  turnaround: string;
  bookingService: string;
  featured?: boolean;
  inclusions: string[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const HERO_SERVICE_CARDS: ServiceDetail[] = [
  {
    id: 'Dental Service',
    title: 'Dental Service',
    shortDescription: 'Precision restorative, preventive, and family dental care certified for comfort.',
    fullDescription:
      'Comprehensive preventive, restorative, and cosmetic dental treatments performed by board-certified dental specialists using low-dose digital imaging and gentle clinical protocols.',
    highlights: [
      'Digital panoramic X-ray & oral diagnostics',
      'Preventive scaling, fillings & root canal therapy',
      'Pediatric & family orthodontic consultations',
    ],
    department: 'Dental & Oral Care Wing — Level 2',
    schedule: 'Mon – Sat · 8:00 AM – 8:00 PM',
    image: '/assets/medkit/service-dental.jpg',
  },
  {
    id: 'Primary Care',
    title: 'Primary Care',
    shortDescription: 'Dedicated family medicine and certified prescriptions tailored to every stage of life.',
    fullDescription:
      'Personalized family medicine, annual wellness screenings, chronic condition management, and certified pharmacy dispensing under international clinical standards.',
    highlights: [
      'Same-day general physician consultations',
      'Chronic blood pressure, diabetes & lipid care',
      'Officially certified in-house pharmacy dispensing',
    ],
    department: 'Outpatient Family Clinic — Level 1',
    schedule: 'Mon – Sun · 6:00 AM – 10:00 PM',
    image: '/assets/medkit/service-primary.jpg',
  },
  {
    id: 'Vaccination',
    title: 'Vaccination',
    shortDescription: 'Certified childhood, seasonal booster, and travel immunizations with cold-chain safety.',
    fullDescription:
      'WHO-compliant childhood immunizations, adult booster programs, and international travel vaccinations stored with continuous cold-chain verification.',
    highlights: [
      'Pediatric & infant immunization schedules',
      'Influenza, Hepatitis, HPV & Tetanus boosters',
      'Official international travel vaccination certificates',
    ],
    department: 'Immunization & Preventive Suite — Level 1',
    schedule: 'Mon – Sun · 7:00 AM – 7:00 PM',
    image: '/assets/medkit/service-vaccination.jpg',
  },
];

export const HEALTHCARE_SERVICES: (ServiceDetail & {
  filledIcon: boolean;
  iconType: 'diagnostic' | 'doctor' | 'lab' | 'emergency';
})[] = [
  {
    id: 'Diagnostic Services',
    title: 'Diagnostic Services',
    shortDescription:
      'We are committed to your health and well-being, offering the very latest in extensive evidence based care.',
    fullDescription:
      'Multi-disciplinary diagnostic evaluations combining high-precision ultrasound, ECG, spirometry, and specialist clinical review for rapid, accurate answers.',
    highlights: [
      '12-lead resting & stress electrocardiography',
      'High-definition abdominal & vascular ultrasound',
      'Comprehensive executive health checkup packages',
    ],
    department: 'Diagnostic Center — Level 2',
    schedule: 'Mon – Fri · 6:00 AM – 10:00 PM',
    filledIcon: true,
    iconType: 'diagnostic',
  },
  {
    id: 'Doctor on Call',
    title: 'Doctor on Call',
    shortDescription:
      'We are committed to your health and well-being, offering the very latest in extensive evidence based care.',
    fullDescription:
      'Licensed Aurelia Care physicians and registered nurses dispatched directly to your home or residence across Orchard, River Valley, and Marina Bay.',
    highlights: [
      'Rapid bedside consultation within 45 minutes',
      'Portable vitals monitoring, IV hydration & wound care',
      'Direct prescription delivery from certified pharmacy',
    ],
    department: 'Mobile Medical Response Unit',
    schedule: '24 Hours · 7 Days a Week',
    filledIcon: false,
    iconType: 'doctor',
  },
  {
    id: 'Laboratory & Radiology',
    title: 'Laboratory & Radiology',
    shortDescription:
      'We are committed to your health and well-being, offering the very latest in extensive evidence based care.',
    fullDescription:
      'ISO-accredited clinical pathology laboratory and low-dose digital radiology delivering fast turnaround blood panels, microbiology, and imaging reports.',
    highlights: [
      'Complete hematology, metabolic & hormone panels',
      'Low-dose digital chest & musculoskeletal X-ray',
      'Same-day digital results reviewed by pathologists',
    ],
    department: 'Pathology & Imaging Wing — Ground Level',
    schedule: 'Mon – Sun · 6:00 AM – 9:00 PM',
    filledIcon: false,
    iconType: 'lab',
  },
  {
    id: 'Emergency Treatment',
    title: 'Emergency Treatment',
    shortDescription:
      'We are committed to your health and well-being, offering the very latest in extensive evidence based care.',
    fullDescription:
      '24-hour accident and emergency trauma bays staffed by emergency medicine specialists, cardiac life-support nurses, and GPS-equipped ambulances.',
    highlights: [
      'Immediate triage & acute trauma stabilization',
      '24/7 ambulance dispatch (+65 6482 9911)',
      'Specialist inpatient & critical care coordination',
    ],
    department: 'Accident & Emergency — Ground Entrance',
    schedule: 'Open 24 Hours Daily',
    filledIcon: true,
    iconType: 'emergency',
  },
];

export const MEDICATION_ACCORDION = [
  {
    id: 'specialists',
    title: 'We Have The Medical Specialists',
    content:
      'Our clinical pharmacists and board-certified physicians collaborate directly to verify dosages, prevent drug interactions, and tailor every prescription to your medical profile.',
  },
  {
    id: 'quality',
    title: 'Quality and Safety at Aurelia Care',
    content:
      'Every medication dispensed at Aurelia Care is sourced from WHO-GMP certified manufacturers with continuous temperature-controlled storage and full batch traceability.',
  },
  {
    id: 'conditions',
    title: 'Diseases and Conditions',
    content:
      'Evidence-based therapeutic protocols covering acute infections, cardiovascular care, respiratory recovery, travel medicine, and long-term metabolic management.',
  },
];

export const SPECIALIST_DOCTORS: SpecialistDoctor[] = [
  {
    id: 'dr-elena-rostova',
    name: 'Dr. Elena Rostova, MD',
    specialty: 'Senior Family Physician',
    departmentFilter: 'Family Medicine',
    bookingService: 'Primary Care',
    experience: '15 Yrs Experience',
    campus: 'Orchard Campus',
    credentials: 'MBBS · MMed (Family Medicine)',
    bio: 'Leads preventive chronic disease management, women’s wellness screenings, and multi-generational family medicine.',
    availability: 'Mon – Sat · 8:30 AM – 5:30 PM',
    initials: 'ER',
  },
  {
    id: 'dr-marcus-lim',
    name: 'Dr. Marcus Lim, FRCP',
    specialty: 'Consultant Cardiologist & Diagnostics',
    departmentFilter: 'Cardiology & Diagnostics',
    bookingService: 'Diagnostic Services',
    experience: '18 Yrs Experience',
    campus: 'Orchard Campus',
    credentials: 'MD · FRCP (Internal Medicine)',
    bio: 'Specializes in non-invasive cardiac imaging, hypertension optimization, and same-day executive diagnostic evaluations.',
    availability: 'Mon – Fri · 9:00 AM – 6:00 PM',
    initials: 'ML',
  },
  {
    id: 'dr-nadia-tan',
    name: 'Dr. Nadia Tan, BDS',
    specialty: 'Restorative & Family Dental Surgeon',
    departmentFilter: 'Dental & Oral Care',
    bookingService: 'Dental Service',
    experience: '12 Yrs Experience',
    campus: 'Marina Bay Clinic',
    credentials: 'BDS · MDS (Prosthodontics)',
    bio: 'Focuses on gentle minimally invasive restorative dentistry, digital smile diagnostics, and pediatric dental care.',
    availability: 'Tue – Sun · 9:00 AM – 7:00 PM',
    initials: 'NT',
  },
  {
    id: 'dr-julian-koh',
    name: 'Dr. Julian Koh, MBBS',
    specialty: 'Immunization & Travel Medicine Lead',
    departmentFilter: 'Family Medicine',
    bookingService: 'Vaccination',
    experience: '11 Yrs Experience',
    campus: 'Marina Bay Clinic',
    credentials: 'MBBS · Dip. Travel Medicine',
    bio: 'Oversees pediatric immunization schedules, adult preventive boosters, and Acute On-Call home medical visits.',
    availability: 'Mon – Sat · 7:30 AM – 4:30 PM',
    initials: 'JK',
  },
];

export const PATIENT_TESTIMONIALS: PatientTestimonial[] = [
  {
    id: 'tm-1',
    patientName: 'Claire Henderson',
    role: 'Product Director · Mother of Two',
    campus: 'Orchard Campus',
    serviceUsed: 'Primary Care & Pediatric Vaccination',
    outcomeQuote:
      'Before finding Aurelia Care, coordinating our children’s immunizations and annual blood panels meant juggling three separate clinics. Dr. Rostova completed both checkups and verified every vaccine record in one calm 40-minute visit.',
    visitDate: 'October 2026',
  },
  {
    id: 'tm-2',
    patientName: 'Raymond Wijaya',
    role: 'Architect · Marathon Runner',
    campus: 'Orchard Campus',
    serviceUsed: 'Diagnostic Services & Cardiology',
    outcomeQuote:
      'After weeks of unexplained chest tightness during training, Dr. Lim ran a 12-lead stress ECG and comprehensive lipid panel the same morning. Having clear diagnostic answers and a tailored recovery plan got me safely back to running within six weeks.',
    visitDate: 'September 2026',
  },
  {
    id: 'tm-3',
    patientName: 'Sophia Alkaff',
    role: 'University Lecturer',
    campus: 'Marina Bay Clinic',
    serviceUsed: 'Dental Service',
    outcomeQuote:
      'I avoided dental clinics for years due to sensitivity anxiety. Dr. Nadia Tan walked me through the digital panoramic scan step by step and completed my crown restoration completely pain-free in two short appointments.',
    visitDate: 'October 2026',
  },
];

export const WELLNESS_PACKAGES: WellnessPackage[] = [
  {
    index: '01',
    name: 'Essential Wellness Screening',
    targetGroup: 'Recommended for adults aged 20–35',
    price: '$165',
    turnaround: 'Same-day digital lab report',
    bookingService: 'Primary Care',
    inclusions: [
      'Physical consultation & BMI / blood pressure review',
      '42-biomarker fasting blood, glucose & lipid profile',
      'Liver, kidney & thyroid baseline function panel',
      '1-on-1 physician lifestyle & nutrition debrief',
    ],
  },
  {
    index: '02',
    name: 'Comprehensive Executive Checkup',
    targetGroup: 'Full cardiovascular & diagnostic evaluation',
    price: '$380',
    turnaround: 'Results & imaging reviewed in 4 hours',
    bookingService: 'Diagnostic Services',
    featured: true,
    inclusions: [
      'Everything in Essential Wellness Screening',
      '12-lead resting ECG & spirometry lung function',
      'Abdominal or pelvic high-definition ultrasound',
      'Vitamin D, B12, iron studies & inflammation markers',
    ],
  },
  {
    index: '03',
    name: 'Complete Dental & Preventive Care',
    targetGroup: 'Annual oral & immunization protection',
    price: '$220',
    turnaround: '60-minute single-visit package',
    bookingService: 'Dental Service',
    inclusions: [
      'Digital panoramic dental X-ray & oral screening',
      'Ultrasonic scaling, airflow polishing & fluoride guard',
      'Quadrivalent seasonal influenza booster vaccination',
      'Personalized preventive oral & immunity care plan',
    ],
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Do I need an advance appointment, or are walk-ins accepted?',
    answer:
      'Walk-in patients are welcomed daily starting at 6:00 AM across both Orchard and Marina Bay clinics. Booking online reserves a dedicated consultation window so you are seen promptly upon arrival.',
  },
  {
    id: 'faq-2',
    question: 'How quickly are laboratory blood test and X-ray results ready?',
    answer:
      'Routine hematology, lipid, glucose, and digital X-ray studies are processed in our on-site accredited lab within 2 to 4 hours, followed by a direct physician walkthrough.',
  },
  {
    id: 'faq-3',
    question: 'How does the 24/7 Doctor on Call home visit service work?',
    answer:
      'Simply call +65 6482 9911 or request "Doctor on Call" in the booking form. A licensed physician and nurse arrive with portable diagnostic equipment and essential certified medications within 45 minutes.',
  },
  {
    id: 'faq-4',
    question: 'Are corporate health plans and international insurance accepted?',
    answer:
      'We support cashless direct billing with major local and international corporate health insurers, and provide itemized medical claims documentation immediately at checkout.',
  },
];

export const CLINIC_LOCATIONS = [
  {
    city: 'Orchard Campus',
    address: '290 Orchard Medical Plaza, Suite 04-12, Singapore 238859',
    phone: '+65 6482 9100',
    email: 'care@aureliacare.org',
  },
  {
    city: 'Marina Bay Clinic',
    address: '12 Marina Boulevard, Tower 2 Health Wing, Singapore 018982',
    phone: '+65 6482 9450',
    email: 'marina@aureliacare.org',
  },
];

export const INFO_PAGES: Record<string, { title: string; subtitle: string; paragraphs: string[] }> = {
  'Job Vacancy': {
    title: 'Careers & Clinical Openings at Aurelia Care',
    subtitle: 'Join our multi-disciplinary healthcare team across Orchard, River Valley, and Marina Bay.',
    paragraphs: [
      'Aurelia Care is welcoming applications from compassionate Family Physicians, Emergency Room Nurses, Dental Specialists, and Certified Clinical Pharmacists.',
      'We provide continuing medical education fellowships, collaborative peer mentorship, and modern diagnostic facilities across all clinic campuses.',
      'Note: This website is a portfolio showcase demonstration and does not process real job applications.',
    ],
  },
  'Charity Program': {
    title: 'Aurelia Community Wellness Initiative',
    subtitle: 'Expanding preventive screenings, senior mobility support, and childhood immunization.',
    paragraphs: [
      'Each month, our mobile clinical outreach concept illustrates complimentary cardiovascular screenings, dental checkups, and nutrition counseling for families.',
      'In partnership with community foundations, preventive health awareness workshops are highlighted quarterly.',
    ],
  },
  'Privacy & Policy': {
    title: 'Showcase Privacy & Demonstration Policy',
    subtitle: 'Demonstration-only interactive booking form — no personal health data is stored.',
    paragraphs: [
      'This website is an interactive design and testimonial showcase demonstration and does not belong to a real medical clinic.',
      'Any entries typed into the appointment form remain purely local to your current browser session for UI preview purposes and are never transmitted to an external medical server.',
    ],
  },
  'Terms of Use': {
    title: 'Showcase Website Terms & Disclaimer',
    subtitle: 'Portfolio & testimonial showcase notice.',
    paragraphs: [
      'All clinic names, addresses, physician profiles, packages, and phone numbers displayed on Aurelia Care are fictional demonstration content created for web design and testimonial showcase purposes.',
      'Do not use this website for real medical advice or medical emergencies. Always contact your local emergency services in an urgent health situation.',
    ],
  },
};
