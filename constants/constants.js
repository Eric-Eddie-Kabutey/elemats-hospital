import {
  Calendar,
  Heart,
  Hospital,
  Clock,
  Users,
  GraduationCap,
  ShieldCheck,
  Star,
  MapPin,
  Mail,
  Clock as ClockIcon
} from "lucide-react";


export const LOCATIONS = [
  {
    id: 1,
    name: "Elemats Specialist Hospital (Main)",
    address: "Westfield, Kanifing, The Gambia",
    phone: "+220 123 4567",
    email: "info@elematshospital.com",
    hours: "24/7 Emergency Care",
    icon: MapPin,
    image: "/stock/loc-2.jpeg"
  },
  {
    id: 2,
    name: "Elemats Fertility & IVF Center",
    address: "Senegambia Road, Kololi, The Gambia",
    phone: "+220 765 4321",
    email: "fertility@elematshospital.com",
    hours: "Mon - Sat: 8 AM - 6 PM",
    icon: MapPin,
    image: "/stock/loc-2.jpeg"
  }
];



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
  { id: "fertility", label: "Fertility and IVF", description: "Advanced reproductive health and assisted conception services." },
  { id: "womens_health", label: "Women's Health", description: "Comprehensive obstetric and gynecological care for every stage of life." },
  { id: "pediatrics", label: "Pediatrics", description: "Dedicated medical care for infants, children, and adolescents." },
  { id: "general_medical", label: "General Medical Services", description: "Expert primary care and advanced surgical solutions." },
  { id: "diagnostics", label: "Diagnostics", description: "High-precision laboratory testing and specialized medical imaging." },
  { id: "emergency_care", label: "Emergency and Care", description: "Rapid response emergency services and compassionate inpatient care." },
];

export const SERVICE_CARDS = {
  fertility: [
    {
      title: "IVF and Assisted Reproduction",
      description: "State-of-the-art in vitro fertilization and diverse fertility treatments to help you start your family.",
      image: "/WhatWeOffer/Specialist Services.jpg"
    },
    {
      title: "Fertility Evaluation (Male and Female)",
      description: "Comprehensive diagnostic assessments for both partners to identify and address reproductive challenges.",
      image: "/WhatWeOffer/ClinicsSpecialties.jpg"
    },
    {
      title: "Hormonal and Reproductive Health",
      description: "Specialized care for hormonal imbalances affecting reproductive wellness and general health.",
      image: "/WhatWeOffer/OB-GYN Services.jpg"
    },
    {
      title: "Male Fertility Services",
      description: "Dedicated diagnostics and treatments focused on male reproductive health and performance.",
      image: "/WhatWeOffer/Wellness Screening.jpg"
    },
  ],

  pediatrics: [
    {
      title: "General Pediatrics",
      description: "Routine checkups, vaccinations, and treatment for common childhood illnesses in a friendly environment.",
      image: "/WhatWeOffer/PrimaryCare.jpg"
    },
    {
      title: "Neonatal Care",
      description: "Specialized medical attention for newborns, including those requiring intensive care support.",
      image: "/WhatWeOffer/ClinicsSpecialties.jpg"
    },
  ],
  womens_health: [
    {
      title: "Antenatal Care",
      description: "Expert medical support throughout your pregnancy to ensure the health of both mother and baby.",
      image: "/WhatWeOffer/OB-GYN Services.jpg"
    },
    {
      title: "Labor and Delivery",
      description: "Compassionate, high-safety childbirth services in a modern, well-equipped delivery suite.",
      image: "/WhatWeOffer/Surgery.jpg"
    },
    {
      title: "Gynecologic Care",
      description: "Comprehensive preventive and therapeutic services for women's reproductive health.",
      image: "/WhatWeOffer/PrimaryCare.jpg"
    },
    {
      title: "Minimally Invasive Gynecologic Surgery",
      description: "Advanced surgical procedures using minimally invasive techniques for faster recovery and less pain.",
      image: "/WhatWeOffer/Surgery.jpg"
    },
  ],
  general_medical: [
    {
      title: "Family Medicine",
      description: "Holistic primary care for patients of all ages, focusing on long-term health and disease prevention.",
      image: "/WhatWeOffer/PrimaryCare.jpg"
    },
    {
      title: "General Surgery",
      description: "Wide range of surgical interventions performed by experienced specialists in modern theaters.",
      image: "/WhatWeOffer/Surgery.jpg"
    },
    {
      title: "Minimally Invasive Surgery",
      description: "State-of-the-art laparoscopic procedures for diverse conditions, ensuring minimal scarring.",
      image: "/WhatWeOffer/Surgery.jpg"
    },
  ],
  diagnostics: [
    {
      title: "Blood and Chemistry Testing",
      description: "Comprehensive hematology and clinical chemistry analysis for accurate internal health assessment.",
      image: "/WhatWeOffer/Medical Laboratory Services.jpg"
    },
    {
      title: "Microbiology & Infection Testing",
      description: "Diagnostic testing for bacterial, viral, and fungal infections to guide effective treatment.",
      image: "/WhatWeOffer/Medical Laboratory Services.jpg"
    },
    {
      title: "Routine Laboratory Tests",
      description: "Essential diagnostic tests including urinalysis, malaria screening, and full blood counts.",
      image: "/WhatWeOffer/Medical Laboratory Services.jpg"
    },
    {
      title: "Specialized Diagnostics",
      description: "Advanced diagnostic imaging and complex pathological testing for specialized medical needs.",
      image: "/WhatWeOffer/Radio Diagnostics.jpg"
    },
  ],
  emergency_care: [
    {
      title: "Emergency Care",
      description: "Rapid, 24/7 medical intervention for life-threatening conditions and urgent health crises.",
      image: "/WhatWeOffer/Ambulance Evacuation & Emergency Medical Support.jpg"
    },
    {
      title: "Hospital Admissions",
      description: "Comfortable and professional inpatient care with 24-hour nursing support and specialist review.",
      image: "/WhatWeOffer/ClinicsSpecialties.jpg"
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
  {
    label: "Who We Are",
    href: "/about",
    subCategories: [
      {
        label: "About Us",
        links: [
          { label: "Message from our CEO", href: "/about/ceo-message" },
          { label: "Our Team", href: "/about#team" },
          { label: "Our Partners", href: "/about#partners" },
          { label: "Our Facilities", href: "/about/facilities" }
        ]
      }
    ]
  },
  {
    label: "What We Do",
    href: "/services/fertility",
    subCategories: SERVICES_TABS.map(tab => ({
      label: tab.label,
      links: SERVICE_CARDS[tab.id].map(s => ({
        label: s.title,
        href: `/services/${tab.id}/${s.title.toLowerCase().replace(/\s+/g, '-')}`
      }))
    }))
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
    ...SERVICES_TABS.map(tab => ({
      title: tab.label,
      links: SERVICE_CARDS[tab.id].map(service => ({
        label: service.title,
        href: `/services/${tab.id}/${service.title.toLowerCase().replace(/\s+/g, '-')}`
      }))
    })),
    {
      title: "Quick Links",
      links: [
        { label: "Who We Are", href: "/about" },
        { label: "Blog", href: "/resources/blogs" },
        { label: "Patient Guide", href: "/resources/patient-guide" },
        { label: "Careers", href: "/careers" },
      ],
    },
    // {
    //   title: "Careers",
    //   links: [
    //     { label: "Openings", href: "/careers" },
    //     { label: "Culture", href: "/careers#culture" },
    //     { label: "Benefits", href: "/careers#benefits" }
    //   ],
    // },
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
    img: "/stock/staff-10.jpeg"
  },
  {
    id: 2,
    title: "Family Bond",
    description: "We work as a close-knit clinical family, celebrating successes and supporting each other's growth.",
    icon: Users,
    img: "/stock/staff-14.jpeg"
  },
  {
    id: 3,
    title: "Career Elevation",
    description: "Access to advanced medical training and specialized certifications to advance your clinical journey.",
    icon: GraduationCap,
    img: "/stock/staff-11.jpeg"
  },
  {
    id: 4,
    title: "Supportive Culture",
    description: "Genuine care and professional support from leadership to ensure your well-being and success.",
    icon: ShieldCheck,
    img: "/stock/staff-13.jpeg"
  },
  {
    id: 5,
    title: "Vibrant Community",
    description: "A lively and energetic medical team spirit that makes every clinical day a rewarding experience.",
    icon: Star,
    img: "/stock/staff-11.jpeg"
  },
  {
    id: 6,
    title: "Hospital Pride",
    description: "Belonging to a premier medical institution dedicated to excellence in modern patient care.",
    icon: Hospital,
    img: "/stock/staff-11.jpeg"
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
    id: "fertility-ivf-innovations",
    title: "Innovations in Fertility & IVF Treatment",
    excerpt: "Discover how advanced embryology and genetic screening are increasing success rates and fulfilling dreams of parenthood for families across The Gambia.",
    author: "Dr. Ya Ida Drammeh",
    date: "April 15, 2026",
    category: "Fertility",
    image: "/stock/fac-8.jpeg",
    takeaways: [
      "Advanced embryology lab technology is the backbone of IVF success.",
      "Genetic screening (PGT) significantly improves pregnancy safety.",
      "Holistic patient support is vital for the emotional fertility journey."
    ],
    content: `
      <div class="space-y-6">
        <p class="lead">Fertility treatment has undergone a remarkable transformation in recent years, moving from a specialized medical niche to a centerpiece of advanced reproductive healthcare. At Elemats Specialist Hospital, we are proud to be at the forefront of this evolution, bringing world-class IVF technology to our community.</p>
        
        <h2>The Role of Advanced Embryology</h2>
        <p>The success of an IVF cycle often depends on the precision of the embryology lab. Our facility features state-of-the-art incubation systems that mimic the natural uterine environment, providing embryos with the stable conditions they need to thrive. Coupled with high-resolution micromanipulation tools, our embryologists can perform ICCS (Intracytoplasmic Sperm Injection) with unprecedented accuracy.</p>

        <div class="insight-card">
          <h4>Genetic Screening (PGT)</h4>
          <p>By implementing Pre-implantation Genetic Testing, we can now screen embryos for chromosomal abnormalities before transfer, significantly reducing miscarriage rates and improving the chances of a healthy pregnancy.</p>
        </div>

        <p>Beyond technology, we believe in a holistic approach to fertility. This includes nutritional guidance, psychological support, and personalized care pathways that recognize the unique emotional journey of every patient.</p>
      </div>
    `
  },
  {
    id: "minimally-invasive-surgery-impact",
    title: "The Impact of Minimally Invasive Surgery",
    excerpt: "Learn how laparoscopic techniques are reducing recovery times, minimizing scarring, and improving outcomes for our general and gynecological surgery patients.",
    author: "Dr. Lamin Drammeh",
    date: "April 08, 2026",
    category: "Surgery",
    image: "/stock/sur-1.jpeg",
    takeaways: [
      "Laparoscopy reduces recovery time from weeks to just days.",
      "HD visualization allows for extreme precision during surgery.",
      "Minimal tissue trauma leads to significantly less post-op pain."
    ],
    content: `
      <div class="space-y-6">
        <p class="lead">The days of large surgical incisions and long hospital stays are rapidly giving way to a more refined approach. Minimally invasive surgery, often referred to as keyhole surgery, has revolutionized the surgical landscape at Elemats Specialist Hospital.</p>

        <h2>Precision Through the Lens</h2>
        <p>Using high-definition laparoscopic cameras, our surgeons can visualize internal organs with incredible detail. This enhanced visibility allows for meticulous dissection and precise intervention, leading to significantly less blood loss during procedures.</p>

        <ul>
          <li><strong>Faster Recovery:</strong> Most patients return home within 24-48 hours.</li>
          <li><strong>Minimal Scarring:</strong> Incisions are typically less than 1cm in length.</li>
          <li><strong>Reduced Pain:</strong> Less tissue trauma means a significantly more comfortable post-operative journey.</li>
        </ul>

        <div class="insight-card">
          <h4>Broad Applications</h4>
          <p>Currently, we utilize these techniques for a wide range of procedures, from appendectomies and gall bladder removals to complex gynecological interventions like myomectomies (fibroid removal). Our commitment is to ensure that our patients benefit from the most advanced surgical standards available globally.</p>
        </div>
      </div>
    `
  },
  {
    id: "neonatal-care-excellence",
    title: "Ensuring Excellence in Neonatal Care",
    excerpt: "A deep look into our specialized Neonatal Intensive Care Unit (NICU) and how we provide life-saving support for our most vulnerable newborns.",
    author: "Awa Ceesay",
    date: "March 28, 2026",
    category: "Pediatrics",
    image: "/stock/fac-4.jpeg",
    takeaways: [
      "24/7 specialized monitoring is crucial for high-risk newborns.",
      "Kangaroo Care (skin-to-skin) is integrated into our NICU protocol.",
      "Controlled environment technology mimics the womb for preemies."
    ],
    content: `
      <div class="space-y-6">
        <p class="lead">Every birth is a miracle, but for some newborns, the transition to life outside the womb requires extra specialized care. The Elemats Neonatal Intensive Care Unit (NICU) is designed to be a haven of advanced medical support and compassionate monitoring.</p>

        <h2>A Sanctuaries for the Smallest</h2>
        <p>Our NICU is equipped with high-tech incubators that provide a controlled environment for temperature and humidity, essential for premature infants. We also feature advanced respiratory support systems, including non-invasive ventilation techniques that protect delicate newborn lungs.</p>

        <p>But medical equipment is only half the story. Our dedicated neonatal nursing team provides 24/7 bedside care, ensuring that every subtle change in a baby's condition is noted and addressed immediately. We prioritize "Kangaroo Care" (skin-to-skin contact) even in the NICU, recognizing its vital role in stabilization and bonding.</p>

        <blockquote>
          "Our goal is not just to see these babies survive, but to see them thrive. We treat every child in our NICU as if they were our own, with the highest level of clinical precision and human warmth."
        </blockquote>

        <p>At Elemats, we are continuous learners. Our neonatal protocols are regularly updated to reflect the latest global pediatrics guidelines, ensuring that Gambian families have access to the absolute best in newborn care.</p>
      </div>
    `
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

