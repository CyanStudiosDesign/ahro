export interface FacultyMember {
  name: string;
  title: string;
  department: string;
  institution: string;
  avatar: string;
  email?: string;
  linkedin?: string;
  website?: string;
}

export const facultyMembers: FacultyMember[] = [
  {
    name: 'Prof. Michael Anderson',
    title: 'Dean, School of Public Health',
    department: 'Department of Epidemiology',
    institution: 'AHRO Institute, UK',
    avatar: '/content/A1.webp',
    email: 'm.anderson@ahro.org',
    linkedin: 'https://linkedin.com/in/michael-anderson',
    website: 'https://ahro.org/faculty/michael-anderson'
  },
  {
    name: 'Dr. Priya Nair',
    title: 'Professor of Clinical Research',
    department: 'Department of Clinical Research',
    institution: 'AHRO Institute, UK',
    avatar: '/content/A1.webp',
    email: 'p.nair@ahro.org',
    linkedin: 'https://linkedin.com/in/priya-nair',
    website: 'https://ahro.org/faculty/priya-nair'
  },
  {
    name: 'Prof. Samuel Okoro',
    title: 'Chair, Infectious Diseases',
    department: 'Department of Infectious Diseases',
    institution: 'AHRO Institute, UK',
    avatar: '/content/A1.webp',
    email: 's.okoro@ahro.org',
    linkedin: 'https://linkedin.com/in/samuel-okoro',
    website: 'https://ahro.org/faculty/samuel-okoro'
  },
  {
    name: 'Dr. Emily Carter',
    title: 'Associate Professor of Bioinformatics',
    department: 'Department of Bioinformatics',
    institution: 'AHRO Institute, UK',
    avatar: '/content/A1.webp',
    email: 'e.carter@ahro.org',
    linkedin: 'https://linkedin.com/in/emily-carter',
    website: 'https://ahro.org/faculty/emily-carter'
  },
  {
    name: 'Dr. Rajiv Menon',
    title: 'Associate Professor of Pharmacology',
    department: 'Department of Pharmaceutical Sciences',
    institution: 'AHRO Institute, UK',
    avatar: '/content/A1.webp',
    email: 'r.menon@ahro.org',
    linkedin: 'https://linkedin.com/in/rajiv-menon',
    website: 'https://ahro.org/faculty/rajiv-menon'
  },
  {
    name: 'Dr. Aisha Hassan',
    title: 'Associate Professor of Nursing',
    department: 'Department of Nursing and Midwifery',
    institution: 'AHRO Institute, UK',
    avatar: '/content/A1.webp',
    email: 'a.hassan@ahro.org',
    linkedin: 'https://linkedin.com/in/aisha-hassan',
    website: 'https://ahro.org/faculty/aisha-hassan'
  },
  {
    name: 'Dr. James Wilson',
    title: 'Associate Professor of Public Health Nutrition',
    department: 'Department of Clinical Nutrition',
    institution: 'AHRO Institute, UK',
    avatar: '/content/A1.webp',
    email: 'j.wilson@ahro.org',
    linkedin: 'https://linkedin.com/in/james-wilson',
    website: 'https://ahro.org/faculty/james-wilson'
  },
  {
    name: 'Dr. Linh Tran',
    title: 'Assistant Professor of Health Management',
    department: 'Department of Healthcare Management',
    institution: 'AHRO Institute, UK',
    avatar: '/content/A1.webp',
    email: 'l.tran@ahro.org',
    linkedin: 'https://linkedin.com/in/linh-tran',
    website: 'https://ahro.org/faculty/linh-tran'
  }
];

export interface AlumniMember {
  name: string;
  title: string;
  organization: string;
  location: string;
  degree: string;
  avatar: string;
  linkedin?: string;
  email?: string;
  website?: string;
}

export const alumniMembers: AlumniMember[] = [
  {
    name: 'Dr. Aisha Rahman',
    title: 'Epidemiologist',
    organization: 'World Health Organization (WHO)',
    location: 'Geneva, Switzerland',
    degree: 'MSc Public Health, Class of 2017',
    avatar: '/content/A1.webp',
    email: 'a.rahman@example.com',
    linkedin: 'https://linkedin.com/in/aisha-rahman',
    website: 'https://example.com/aisha-rahman'
  },
  {
    name: 'Dr. Daniel Mensah',
    title: 'Clinical Research Scientist',
    organization: 'Pfizer Global Research & Development',
    location: 'New York, USA',
    degree: 'PhD Clinical Research, Class of 2016',
    avatar: '/content/A1.webp',
    email: 'd.mensah@example.com',
    linkedin: 'https://linkedin.com/in/daniel-mensah',
    website: 'https://example.com/daniel-mensah'
  },
  {
    name: 'Dr. Mei Ling Tan',
    title: 'Bioinformatician',
    organization: 'Amazon Web Services (AWS) - Health AI',
    location: 'Singapore',
    degree: 'MSc Bioinformatics, Class of 2018',
    avatar: '/content/A1.webp',
    email: 'm.tan@example.com',
    linkedin: 'https://linkedin.com/in/mei-ling-tan',
    website: 'https://example.com/mei-ling-tan'
  },
  {
    name: 'Dr. Arjun Patel',
    title: 'Consultant Physician',
    organization: 'NHS Foundation Trust',
    location: 'London, United Kingdom',
    degree: 'MBBS, Class of 2015',
    avatar: '/content/A1.webp',
    email: 'a.patel@example.com',
    linkedin: 'https://linkedin.com/in/arjun-patel',
    website: 'https://example.com/arjun-patel'
  },
  {
    name: 'Dr. Sofia Martinez',
    title: 'Global Health Program Manager',
    organization: 'Bill & Melinda Gates Foundation',
    location: 'Seattle, USA',
    degree: 'MPH Global Health, Class of 2016',
    avatar: '/content/A1.webp',
    email: 's.martinez@example.com',
    linkedin: 'https://linkedin.com/in/sofia-martinez',
    website: 'https://example.com/sofia-martinez'
  },
  {
    name: 'Dr. Kofi Adu',
    title: 'Pharmaceutical Scientist',
    organization: 'Novartis International AG',
    location: 'Basel, Switzerland',
    degree: 'MPharm Pharmaceutical Sciences, Class of 2017',
    avatar: '/content/A1.webp',
    email: 'k.adu@example.com',
    linkedin: 'https://linkedin.com/in/kofi-adu',
    website: 'https://example.com/kofi-adu'
  },
  {
    name: 'Dr. Fatima Al-Zahra',
    title: 'Public Health Specialist',
    organization: 'Ministry of Health',
    location: 'Doha, Qatar',
    degree: 'MSc Public Health, Class of 2019',
    avatar: '/content/A1.webp',
    email: 'f.al-zahra@example.com',
    linkedin: 'https://linkedin.com/in/fatima-al-zahra',
    website: 'https://example.com/fatima-al-zahra'
  },
  {
    name: 'Dr. Kenji Nakamura',
    title: 'Data Scientist - Healthcare',
    organization: 'Google Health',
    location: 'Tokyo, Japan',
    degree: 'MSc Health Informatics, Class of 2018',
    avatar: '/content/A1.webp',
    email: 'k.nakamura@example.com',
    linkedin: 'https://linkedin.com/in/kenji-nakamura',
    website: 'https://example.com/kenji-nakamura'
  }
];
