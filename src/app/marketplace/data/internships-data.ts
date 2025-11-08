export interface Internship {
  id: number;
  organizationName: string;
  organizationLogo: string;
  title: string;
  country: string;
  city: string;
  field: string;
  duration: string;
  language: string;
  languageLevel: string;
  isPaid: boolean;
  stipend?: string;
  verified: boolean;
  description: string;
  tasks: string[];
  requirements: string[];
  applicationStatus?: "received" | "in-review" | "accepted" | "declined" | null;
}

export const internships: Internship[] = [
  {
    id: 1,
    organizationName: "Tech Innovation Hub Berlin",
    organizationLogo: "🏢",
    title: "Software Development Intern",
    country: "Germany",
    city: "Berlin",
    field: "IT & Computer Science",
    duration: "6 months",
    language: "English",
    languageLevel: "B2",
    isPaid: true,
    stipend: "€800/month",
    verified: true,
    applicationStatus: "in-review",
    description:
      "Join our dynamic team working on cutting-edge web applications. You'll collaborate with experienced developers on real-world projects using modern technologies.",
    tasks: [
      "Develop and maintain web applications using React and Node.js",
      "Participate in code reviews and team meetings",
      "Write clean, documented code following best practices",
      "Collaborate with designers and product managers",
    ],
    requirements: [
      "Currently enrolled in Computer Science or related field",
      "Basic knowledge of JavaScript and web development",
      "English proficiency (B2 or higher)",
      "Eligible for Erasmus+ program",
    ],
  },
  {
    id: 2,
    organizationName: "Barcelona Design Studio",
    organizationLogo: "🎨",
    title: "UX/UI Design Intern",
    country: "Spain",
    city: "Barcelona",
    field: "Design & Creative",
    duration: "4 months",
    language: "English",
    languageLevel: "B2",
    isPaid: true,
    stipend: "€600/month",
    verified: true,
    applicationStatus: null,
    description:
      "Creative design studio seeking passionate UX/UI intern to work on digital products for international clients.",
    tasks: [
      "Design user interfaces for web and mobile applications",
      "Create wireframes, mockups, and prototypes",
      "Conduct user research and usability testing",
      "Collaborate with development team on implementation",
    ],
    requirements: [
      "Portfolio demonstrating design skills",
      "Proficiency in Figma or Adobe XD",
      "Understanding of user-centered design principles",
      "Strong communication skills in English",
    ],
  },
  {
    id: 3,
    organizationName: "Green Energy Solutions",
    organizationLogo: "♻️",
    title: "Environmental Engineering Intern",
    country: "Netherlands",
    city: "Amsterdam",
    field: "Engineering",
    duration: "5 months",
    language: "English",
    languageLevel: "C1",
    isPaid: true,
    stipend: "€900/month",
    verified: true,
    applicationStatus: "accepted",
    description:
      "Work on sustainable energy projects and contribute to our mission of creating a greener future.",
    tasks: [
      "Assist in renewable energy project planning",
      "Conduct environmental impact assessments",
      "Analyze data and prepare technical reports",
      "Support research on sustainable technologies",
    ],
    requirements: [
      "Studying Environmental or Mechanical Engineering",
      "Interest in renewable energy and sustainability",
      "Strong analytical and problem-solving skills",
      "Fluent English (C1 level)",
    ],
  },
  {
    id: 4,
    organizationName: "Parisian Cultural Institute",
    organizationLogo: "📚",
    title: "Education & Events Coordinator Intern",
    country: "France",
    city: "Paris",
    field: "Education & Culture",
    duration: "3 months",
    language: "French",
    languageLevel: "B2",
    isPaid: false,
    verified: true,
    applicationStatus: null,
    description:
      "Support our team in organizing cultural events and educational programs for international students.",
    tasks: [
      "Coordinate workshops and cultural events",
      "Assist with program development and promotion",
      "Manage social media and communications",
      "Support visiting students and scholars",
    ],
    requirements: [
      "Background in Education, Cultural Studies, or related field",
      "French language skills (B2 minimum)",
      "Organizational and communication skills",
      "Passion for cultural exchange and education",
    ],
  },
  {
    id: 5,
    organizationName: "Nordic Research Lab",
    organizationLogo: "🔬",
    title: "Biotechnology Research Intern",
    country: "Sweden",
    city: "Stockholm",
    field: "Science & Research",
    duration: "6 months",
    language: "English",
    languageLevel: "B2",
    isPaid: true,
    stipend: "SEK 8,000/month",
    verified: true,
    applicationStatus: "received",
    description:
      "Join our research team working on innovative biotechnology projects in a state-of-the-art laboratory.",
    tasks: [
      "Conduct laboratory experiments and research",
      "Analyze and document experimental results",
      "Collaborate with international research team",
      "Present findings at team meetings",
    ],
    requirements: [
      "Enrolled in Biotechnology, Biology, or Chemistry program",
      "Laboratory experience preferred",
      "Attention to detail and scientific methodology",
      "English proficiency required",
    ],
  },
  {
    id: 6,
    organizationName: "Milano Fashion House",
    organizationLogo: "👗",
    title: "Fashion Marketing Intern",
    country: "Italy",
    city: "Milan",
    field: "Marketing & Business",
    duration: "4 months",
    language: "Italian",
    languageLevel: "B1",
    isPaid: true,
    stipend: "€500/month",
    verified: true,
    applicationStatus: null,
    description:
      "Experience the world of high fashion while supporting our marketing and brand communication efforts.",
    tasks: [
      "Assist with social media content creation",
      "Support influencer partnership programs",
      "Analyze market trends and competitor activities",
      "Help organize fashion events and shows",
    ],
    requirements: [
      "Studying Marketing, Fashion, or Communications",
      "Italian language skills (B1+) and English",
      "Social media savvy and creative mindset",
      "Interest in fashion industry",
    ],
  },
  {
    id: 7,
    organizationName: "Dublin Tech Startup",
    organizationLogo: "💡",
    title: "Data Analytics Intern",
    country: "Ireland",
    city: "Dublin",
    field: "IT & Computer Science",
    duration: "5 months",
    language: "English",
    languageLevel: "C1",
    isPaid: true,
    stipend: "€750/month",
    verified: true,
    applicationStatus: "declined",
    description:
      "Fast-growing fintech startup looking for analytical minds to help drive data-informed decisions.",
    tasks: [
      "Collect and analyze business data",
      "Create dashboards and visualizations",
      "Support A/B testing and experimentation",
      "Present insights to stakeholders",
    ],
    requirements: [
      "Background in Data Science, Statistics, or related field",
      "Experience with Python, SQL, or R",
      "Strong analytical and communication skills",
      "Native or fluent English",
    ],
  },
  {
    id: 8,
    organizationName: "Vienna Music Academy",
    organizationLogo: "🎵",
    title: "Arts Administration Intern",
    country: "Austria",
    city: "Vienna",
    field: "Arts & Media",
    duration: "3 months",
    language: "German",
    languageLevel: "B2",
    isPaid: false,
    verified: true,
    applicationStatus: null,
    description:
      "Support the administration of one of Europe's leading music institutions and gain insight into arts management.",
    tasks: [
      "Assist with concert and event planning",
      "Handle communications with artists and partners",
      "Support ticketing and audience development",
      "Help with grant applications and reporting",
    ],
    requirements: [
      "Background in Music, Arts Administration, or Cultural Management",
      "German language skills required (B2+)",
      "Organizational skills and attention to detail",
      "Passion for classical music and performing arts",
    ],
  },
  {
    id: 9,
    organizationName: "Copenhagen Sustainability Hub",
    organizationLogo: "🌱",
    title: "Sustainability Communications Intern",
    country: "Denmark",
    city: "Copenhagen",
    field: "Environmental & Social",
    duration: "4 months",
    language: "English",
    languageLevel: "B2",
    isPaid: true,
    stipend: "DKK 5,000/month",
    verified: true,
    applicationStatus: null,
    description:
      "Help communicate important sustainability initiatives and engage communities in climate action.",
    tasks: [
      "Develop content for sustainability campaigns",
      "Manage social media channels",
      "Support event organization and outreach",
      "Research best practices in sustainability communication",
    ],
    requirements: [
      "Studying Communications, Environmental Studies, or related",
      "Strong writing and storytelling skills",
      "Passion for sustainability and climate action",
      "English proficiency required",
    ],
  },
  {
    id: 10,
    organizationName: "Lisbon Digital Agency",
    organizationLogo: "📱",
    title: "Digital Marketing Intern",
    country: "Portugal",
    city: "Lisbon",
    field: "Marketing & Business",
    duration: "5 months",
    language: "English",
    languageLevel: "B2",
    isPaid: true,
    stipend: "€550/month",
    verified: true,
    applicationStatus: null,
    description:
      "Join our creative team and learn modern digital marketing strategies working with diverse international clients.",
    tasks: [
      "Create content for digital marketing campaigns",
      "Manage client social media accounts",
      "Analyze campaign performance metrics",
      "Support SEO and content marketing efforts",
    ],
    requirements: [
      "Background in Marketing, Communications, or Business",
      "Familiarity with social media platforms",
      "Creative mindset and good communication skills",
      "English required, Portuguese is a plus",
    ],
  },
];

export const fields = [
  "All Fields",
  "IT & Computer Science",
  "Design & Creative",
  "Engineering",
  "Education & Culture",
  "Science & Research",
  "Marketing & Business",
  "Arts & Media",
  "Environmental & Social",
];

export const countries = [
  "All Countries",
  "Germany",
  "Spain",
  "Netherlands",
  "France",
  "Sweden",
  "Italy",
  "Ireland",
  "Austria",
  "Denmark",
  "Portugal",
];

export const languages = [
  "All Languages",
  "English",
  "German",
  "French",
  "Spanish",
  "Italian",
  "Swedish",
  "Dutch",
  "Danish",
  "Portuguese",
];

export const durations = [
  "All Durations",
  "3 months",
  "4 months",
  "5 months",
  "6 months",
];

export const topEmployers = [
  { name: "Tech Innovation Hub Berlin", logo: "🏢", internships: 5 },
  { name: "Barcelona Design Studio", logo: "🎨", internships: 3 },
  { name: "Green Energy Solutions", logo: "♻️", internships: 4 },
  { name: "Nordic Research Lab", logo: "🔬", internships: 6 },
  { name: "Milano Fashion House", logo: "👗", internships: 2 },
];

export const recommendedDestinations = [
  { city: "Berlin", country: "Germany", flag: "🇩🇪", internships: 12 },
  { city: "Barcelona", country: "Spain", flag: "🇪🇸", internships: 8 },
  { city: "Amsterdam", country: "Netherlands", flag: "🇳🇱", internships: 10 },
  { city: "Paris", country: "France", flag: "🇫🇷", internships: 9 },
  { city: "Copenhagen", country: "Denmark", flag: "🇩🇰", internships: 7 },
];
