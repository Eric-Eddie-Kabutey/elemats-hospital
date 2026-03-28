import { 
  Calendar, 
  Heart, 
  Hospital, 
  Clock, 
  Users, 
  GraduationCap, 
  ShieldCheck, 
  Star 
} from "lucide-react";



export const HERO_CONTENT = {
  title: "Seamless Dental Care",
  description: "Whether it's a routine checkup or a major procedure, our experienced professionals are just a call away. Experience healthcare that's tailored to your needs.",
  ctaText: "Book Appointment",
  image: "/images/hero.jpg",
  floatingCard: {
    title: "98%",
    description: "Client satisfaction with our service",
    image: "/images/hero.jpg",
  },
};

export const CARE_FOR_ITEMS = [
  {
    title: "General Dentistry",
    description: "Comprehensive oral health examinations and treatments for the whole family.",
    image: "/images/hero.jpg",
  },
  {
    title: "Orthodontics",
    description: "Modern solutions for teeth alignment, including clear aligners and traditional braces.",
    image: "/images/hero.jpg",
  },
  {
    title: "Cosmetic Dentistry",
    description: "Enhance your smile with whitening, veneers, and other aesthetic procedures.",
    image: "/images/hero.jpg",
  },
  {
    title: "Pediatric Care",
    description: "Gentle and friendly dental care specifically designed for children.",
    image: "/images/hero.jpg",
  },
];

export const SERVICES_TABS = [
  { id: "clinical", label: "Clinical Services", description: "for Private Individuals and Families" },
  { id: "medical", label: "Medical Services", description: "for Corporate Organisations" },
];

export const SERVICE_CARDS = {
  clinical: [
    { 
      title: "Primary Care", 
      description: "First-point-of-contact medical care for individuals and families, focusing on prevention and wellness.", 
      image: "/WhatWeOffer/PrimaryCare.jpg" 
    },
    { 
      title: "Clinics and Specialties", 
      description: "Diverse outpatient clinics providing specialized medical attention tailored to specific health needs.", 
      image: "/WhatWeOffer/ClinicsSpecialties.jpg" 
    },
    { 
      title: "Surgery", 
      description: "Advanced surgical procedures performed by expert surgeons in a state-of-the-art sterile environment.", 
      image: "/WhatWeOffer/Surgery.jpg" 
    },
    { 
      title: "OB/GYN Services", 
      description: "Comprehensive care for women's health, including prenatal, delivery, and gynecological support.", 
      image: "/WhatWeOffer/OB-GYN Services.jpg" 
    },
    { 
      title: "Specialist Services", 
      description: "Access to world-class consultants across various medical disciplines for complex health issues.", 
      image: "/WhatWeOffer/Specialist Services.jpg" 
    },
    { 
      title: "Endoscopy", 
      description: "Minimally invasive diagnostic procedures using high-definition imaging to visualize internal organs.", 
      image: "/WhatWeOffer/Endoscopy.jpg" 
    },
    { 
      title: "Radio Diagnostics", 
      description: "High-precision imaging services including X-rays and scans for accurate medical diagnosis.", 
      image: "/WhatWeOffer/Radio Diagnostics.jpg" 
    },
    { 
      title: "Medical Laboratory Services", 
      description: "Full-range pathological testing and analysis to support accurate clinical decision-making.", 
      image: "/WhatWeOffer/Medical Laboratory Services.jpg" 
    },
  ],
  medical: [
    { 
      title: "Wellness Screening", 
      description: "Proactive health assessments and checkups designed for corporate employees and executives.", 
      image: "/WhatWeOffer/Wellness Screening.jpg" 
    },
    { 
      title: "Retainership Services", 
      description: "Tailored medical retainership plans for organizations to ensure employee health and productivity.", 
      image: "/WhatWeOffer/Retainership Services.jpg" 
    },
    { 
      title: "Ambulance & Support", 
      description: "Rapid-response emergency medical support and ambulance evacuation services available 24/7.", 
      image: "/WhatWeOffer/Ambulance Evacuation & Emergency Medical Support.jpg" 
    },
    { 
      title: "Medical Outsourcing", 
      description: "Professional management of onsite clinic services and medical staffing for corporate bodies.", 
      image: "/WhatWeOffer/Medical Outsourcing & Onsite Clinic Services.jpg" 
    },
    { 
      title: "Hearse Services", 
      description: "Respectful and professional funeral logistics and transportation services for families.", 
      image: "/WhatWeOffer/Hearse Services.jpg" 
    },
    { 
      title: "Pre-employment Services", 
      description: "Comprehensive medical fitness evaluations for prospective employees to ensure workplace safety.", 
      image: "/WhatWeOffer/Pre-employment Services.jpg" 
    },
    { 
      title: "HMO Partnerships", 
      description: "Seamless integration with major Health Management Organizations for hassle-free care delivery.", 
      image: "/WhatWeOffer/HMO Partnerships.jpg" 
    },
    { 
      title: "Home Nursing Care", 
      description: "Dedicated professional nursing services provided in the comfort and privacy of your home.", 
      image: "/WhatWeOffer/Home Nursing Care.jpg" 
    },
  ],
};

export const CARE_FOR_SYMPTOMS = [
  { text: "Period cramps that won't go away", position: "center", index: 0 },
  { text: "Uncomfortable sore throat", position: "right", index: 0 },
  { text: "PCOS complications", position: "center", index: 1 },
  { text: "That lump in your breast", position: "right", index: 1 },
  { text: "Abdominal pain", position: "center", index: 2 },
  { text: "Uncontrollable coughing", position: "left", index: 2 },
  { text: "That weird skin rash", position: "left", index: 1 },
  { text: "Persistent nausea", position: "right", index: 2 },
  { text: "That burning sensation when you pee", position: "center", index: 2 },
  { text: "That annoying headache", position: "left", index: 0 }
];

export const NAV_LINKS = [
  { label: "Who We Are", href: "/about" },
  { 
    label: "What We Do", 
    href: "/services",
    subCategories: [
      {
        label: "Clinical Services",
        links: SERVICE_CARDS.clinical.map(s => ({ label: s.title, href: `/services/${s.title.toLowerCase().replace(/\s+/g, '-')}` }))
      },
      {
        label: "Medical Services",
        links: SERVICE_CARDS.medical.map(s => ({ label: s.title, href: `/services/${s.title.toLowerCase().replace(/\s+/g, '-')}` }))
      }
    ]
  },
  { 
    label: "Resources", 
    href: "/resources",
    subCategories: [
      {
        label: "Hospital Guide",
        links: [{ label: "Patient Guide", href: "/resources/patient-guide" }]
      },
      {
        label: "Our Hub",
        links: [{ label: "Blogs", href: "/resources/blogs" }]
      }
    ]
  },
  { label: "Careers", href: "/careers" },
];

export const CARE_FOR_IMAGES = {
  left: [
    "/careFor/headache.jpg",
    "/careFor/That-weird-skin-rash.jpg",
    "/careFor/Uncontrollable-coughing.jpg"
  ],
  center: [
    "/careFor/cramps.jpg",
    "/careFor/pcos-complications.jpg",
    "/careFor/Abdominal-pain.jpg"
  ],
  right: [
    "/careFor/soar-throat.jpg",
    "/careFor/that-lump-in-your-breast.jpg",
    "/careFor/nausea.jpg"
  ]
};

export const ABOUT_US = {
  subtitle: "about us",
  title: "A Simple Way to Save on Dental Care",
  description: "Our team of skilled and experienced dental professionals strives to create a comfortable and welcoming environment for each and every patient. We offer a wide range of services designed to keep your smile healthy and bright.",
  stats: {
    label: "98%",
    text: "Client satisfaction with our service",
  },
  images: ["/images/hero.jpg", "/images/hero.jpg", "/images/hero.jpg"],
};

export const TESTIMONIALS = [
  {
    name: "Kevin Martin",
    role: "Health screenings for seniors",
    feedback: "Our visual designer lets you quickly and easily drag and drop your own way to custom-apps for both desktop, mobile & also tab for report.",
    image: "/images/hero.jpg",
    rating: 5,
  },
  {
    name: "Sarah Jenkins",
    role: "Dental Transformation",
    feedback: "I've never felt more comfortable at a dentist's office. The team is professional, kind, and the results are absolutely stunning.",
    image: "/images/hero.jpg",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Orthodontic Patient",
    feedback: "The Invisalign process was seamless. I highly recommend Elemats for anyone looking for modern dental solutions.",
    image: "/images/hero.jpg",
    rating: 5,
  },
];

export const FAQ_ITEMS = [
  {
    question: "How often should I visit the dentist?",
    answer: "We generally recommend a checkup every six months to maintain optimal oral health and catch potential issues early.",
  },
  {
    question: "What should I bring to my first appointment?",
    answer: "Please bring your ID, insurance information, and any previous dental records if available.",
  },
  {
    question: "Do you offer emergency dental services?",
    answer: "Yes, we provide same-day emergency appointments for urgent dental issues like severe pain or broken teeth.",
  },
  {
    question: "Are payment plans available?",
    answer: "We offer various financing options and payment plans to ensure high-quality care is accessible to everyone.",
  },
];

export const FOOTER_CONTENT = {
  brand: "Elemats",
  description: "Your partner in modern, elegant dental and healthcare solutions.",
  sections: [
    {
      title: "Solutions",
      links: ["Checkups", "Braces", "Whitening", "Implants"],
    },
    {
      title: "Resources",
      links: ["Blog", "Education", "Privacy", "Terms"],
    },
    {
      title: "Careers",
      links: ["Openings", "Culture", "Benefits"],
    },
  ],
  socials: [
    { platform: "Facebook", href: "#" },
    { platform: "Instagram", href: "#" },
    { platform: "LinkedIn", href: "#" },
    { platform: "X", href: "#" },
  ],
  contact: {
    phone: "012 345 6789",
    email: "care@elemats.com",
    address: "123 Health Ave, Wellness City",
  },
};

export const FLOATING_SOCIALS = [
  { platform: "WhatsApp", icon: "💬", href: "https://wa.me/..." },
  { platform: "Instagram", icon: "📸", href: "#" },
  { platform: "Facebook", icon: "👤", href: "#" },
  { platform: "X", icon: "𝕏", href: "#" },
];

export const PARTNERS = [
  { name: "Brussels Airlines", logo: "/partners/Brussels_airlines.jpg" },
  { name: "CFA", logo: "/partners/CFA-Logo_RGB_hi-res.png" },
  { name: "IOM", logo: "/partners/IOM.png" },
  { name: "NEA", logo: "/partners/NEA.png" },
  { name: "Red Cross", logo: "/partners/Red_Cross.jpg" },
];


export const WORK_CULTURE = [
  {
    id: 1,
    title: "Shared Respect",
    description: "A workplace built on mutual trust where every medical professional's voice is heard and valued.",
    icon: Heart,
    img: "/career/banner/1 (1).jpg"
  },
  {
    id: 2,
    title: "Family Bond",
    description: "We work as a close-knit clinical family, celebrating successes and supporting each other's growth.",
    icon: Users,
    img: "/career/banner/1 (2).jpg"
  },
  {
    id: 3,
    title: "Career Elevation",
    description: "Access to advanced medical training and specialized certifications to advance your clinical journey.",
    icon: GraduationCap,
    img: "/career/banner/1 (3).jpg"
  },
  {
    id: 4,
    title: "Supportive Culture",
    description: "Genuine care and professional support from leadership to ensure your well-being and success.",
    icon: ShieldCheck,
    img: "/career/banner/1 (4).jpg"
  },
  {
    id: 5,
    title: "Vibrant Community",
    description: "A lively and energetic medical team spirit that makes every clinical day a rewarding experience.",
    icon: Star,
    img: "/career/banner/1 (5).jpg"
  },
  {
    id: 6,
    title: "Hospital Pride",
    description: "Belonging to a premier medical institution dedicated to excellence in modern patient care.",
    icon: Hospital,
    img: "/career/banner/1 (6).jpg"
  }
];

export const OPEN_ROLES = [
  {
    id: "senior-dental-surgeon",
    title: "Senior Dental Surgeon",
    category: "Full-time",
    location: "Wellness City",
    description: "Seeking a dedicated dental professional with 5+ years of experience to lead our specialized clinics.",
    requirements: [
      "Bachelor of Dental Surgery (BDS) or equivalent.",
      "Minimum of 5 years post-qualification experience.",
      "Valid practicing license from the Medical and Dental Council.",
      "Strong leadership and clinical management skills."
    ],
    documents: [
      "Curriculum Vitae (CV)",
      "Educational certificates",
      "Valid Practicing License",
      "Two professional references"
    ],
    email: "careers@elemats.com",
    phone: "+220 123 4567"
  },
  {
    id: "nursing-officer",
    title: "Nursing Officer",
    category: "Full-time",
    location: "Wellness City",
    description: "Join our nursing team to provide high-caliber patient care and ensure clinical excellence.",
    requirements: [
      "Registered Nurse (RN) certification.",
      "2+ years of clinical experience in a hospital setting.",
      "Exemplary patient care and communication skills.",
      "Ability to work in a fast-paced environment."
    ],
    documents: [
      "Updated CV",
      "Nursing Council Registration",
      "Academic Transcript"
    ],
    email: "hr@elemats.com",
    phone: "+220 987 6543"
  },
  {
    id: "clinical-psychology-intern",
    title: "Clinical Psychology Intern",
    category: "Internship",
    location: "Wellness City",
    description: "A developmental role for final year students looking to gain hands-on experience in a premier institution.",
    requirements: [
      "Final year student or recent graduate in Psychology.",
      "Foundational knowledge of clinical assessment.",
      "Strong empathetic and listening skills.",
      "Commitment to patient confidentiality."
    ],
    documents: [
      "Letter of introduction from University",
      "Most recent results/transcript",
      "Personal statement"
    ],
    email: "internship@elemats.com",
    phone: "+220 111 2222"
  },
  {
    id: "medical-lab-scientist",
    title: "Medical Lab Scientist",
    category: "Part-time",
    location: "Wellness City",
    description: "Ensuring high-precision diagnostics and laboratory management. 3 flexible days per week.",
    requirements: [
      "B.MLS or equivalent qualification.",
      "Registration with MLSCN.",
      "Proficiency in hematology and clinical chemistry.",
      "Attention to detail and accuracy."
    ],
    documents: [
      "CV",
      "Current practicing license",
      "Degree certificate"
    ],
    email: "lab@elemats.com",
    phone: "+220 333 4444"
  }
];

export const BLOG_POSTS = [
  {
    id: "oral-health-children",
    title: "The Importance of Oral Health in Children",
    excerpt: "Developing good oral habits early can set the foundation for a lifetime of healthy smiles. Here's a guide for parents on ensuring children's dental wellness.",
    date: "March 20, 2026",
    category: "Pediatrics",
    image: "/images/hero.jpg"
  },
  {
    id: "preparing-dental-visit",
    title: "How to Prepare for Your First Dental Visit at Elemats",
    excerpt: "Feeling nervous? Our step-by-step guide walks you through what to expect during your first appointment at our state-of-the-art facility.",
    date: "March 15, 2026",
    category: "Patient Guide",
    image: "/images/hero.jpg"
  },
  {
    id: "advanced-imaging-tech",
    title: "Understanding Our Advanced Diagnostic Imaging Technology",
    excerpt: "Explore how Elemats uses cutting-edge 3D imaging to provide high-precision diagnostics and personalized treatment plans for our patients.",
    date: "March 10, 2026",
    category: "Technology",
    image: "/images/hero.jpg"
  }
];

export const PATIENT_GUIDE_DATA = [
  {
    title: "Appointment & Registration",
    content: "Please arrive 15 minutes before your scheduled appointment time. Bring a valid ID, your referral letter (if any), and any insurance details. Our registration team will help you set up your digital medical file for future visits.",
    icon: Calendar
  },
  {
    title: "Billing & Insurance",
    content: "We accept all major local insurance providers and direct payments via card, bank transfer, or cash. For specialized procedures, our finance desk will provide a transparent cost estimate before treatment begins.",
    icon: Heart
  },
  {
    title: "Visitation Policies",
    content: "To ensure a peaceful healing environment, we permit up to 2 visitors per patient between 10 AM — 2 PM and 4 PM — 8 PM. Please note that certain specialized wards may have stricter visitation requirements.",
    icon: Hospital
  },
  {
    title: "Emergency Services",
    content: "Our emergency desk is open 24/7. In case of an urgent medical situation, please proceed directly to our main entrance or call our dedicated emergency line for immediate assistance and ambulance coordination.",
    icon: Clock
  }
];

export const LANGUAGES = [
  { id: "1", name: "English", flag: "/images/countries/engish-flag.png", label: "EN", code: "en" },
  { id: "2", name: "Espanol", flag: "/images/countries/espanol-flag.png", label: "ES", code: "es" },
  { id: "3", name: "France", flag: "/images/countries/france-flag.png", label: "FR", code: "fr" },
  { id: "4", name: "Deutsch", flag: "/images/countries/Deutsch-flag.png", label: "DE", code: "de" },
  { id: "5", name: "Japan", flag: "/images/countries/japan-flag.png", label: "JA", code: "ja" },
  { id: "6", name: "Nederland", flag: "/images/countries/nederlands-flag.png", label: "NE", code: "nl" },
];

