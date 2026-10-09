import type { SvgName } from '../components/svg';

export type MenuLink = {
  label: string;
  href: string;
  icon?: SvgName;
  box?: string;
};

export type MenuSubBlock = {
  title: string;
  links: MenuLink[];
};

export type MenuGroup = {
  title: string;
  width?: 'w-300' | 'w-200' | 'w-250' | '';
  links: MenuLink[];
  nested?: MenuSubBlock;
};

export type BlogCard = {
  img: string;
  href: string;
  tag: string;
  date: string;
  title: string;
};

export type MenuItem = {
  label: string;
  href?: string;
  active?: boolean;
  mega?: boolean;
  groups?: MenuGroup[];
  banner?: { text: string; cta: string; href: string; img: string };
  blog?: { title: string; cards: BlogCard[]; caseLink: MenuLink };
};

const INDUSTRY_SUB: MenuItem = {
  label: 'Industry',
  groups: [
    {
      title: '',
      links: [
        { label: 'Information Technology', href: '#industry', box: 'bx bx-code-alt header-icon' },
        { label: 'Education', href: '#industry', box: 'bx bxs-graduation header-icon' },
        { label: 'Fitness', href: '#industry', box: 'bx bx-dumbbell header-icon' },
        { label: 'Health Care', href: '#industry', box: 'bx bx-plus-medical header-icon' },
        { label: 'Logistics', href: '#industry', box: 'bx bx-package header-icon' },
        { label: 'View All Industries', href: '#industry', box: 'bx bx-right-arrow-alt' },
      ],
    },
  ],
};

export const menuItems: MenuItem[] = [
  { label: 'Home', href: '#home', active: true },
  {
    label: 'About Us',
    groups: [
      {
        title: '',
        links: [
          { label: 'Company Profile', href: '#about' },
          { label: 'Our Team', href: '#why' },
          { label: "FAQ's", href: '#testimonial' },
          { label: 'Career with us', href: '#contact' },
        ],
      },
    ],
  },
  {
    label: 'Solutions',
    mega: true,
    groups: [
      {
        title: 'Smart Services',
        width: 'w-300',
        links: [
          { label: 'Search Engine Optimization', href: '#services', icon: 'iconSeo' },
          { label: 'Social Media Marketing', href: '#services', icon: 'iconSocial' },
          { label: 'View All Services', href: '#services' },
        ],
        nested: {
          title: 'Design',
          links: [
            { label: 'Logo Design', href: '#services', box: 'bx bxs-paint header-icon' },
            { label: 'Graphic Design', href: '#services', box: 'bx bxs-palette header-icon' },
            { label: 'Banner Design', href: '#services', box: 'bx bxs-image header-icon' },
          ],
        },
      },
      {
        title: 'Digital',
        width: 'w-200',
        links: [
          { label: 'Google Ads', href: '#services', box: 'bx bxl-google header-icon' },
          { label: 'Meta Ads', href: '#services', box: 'bx bxl-facebook-circle header-icon' },
          { label: 'TikTok Ads', href: '#services', box: 'bx bxl-tiktok header-icon' },
          { label: 'LinkedIn Ads', href: '#services', box: 'bx bxl-linkedin header-icon' },
        ],
      },
      {
        title: 'Web Development',
        width: 'w-250',
        links: [
          { label: 'Website Development', href: '#services', box: 'bx bx-code-alt header-icon' },
          { label: 'WordPress Development', href: '#services', box: 'bx bxl-wordpress header-icon' },
          { label: 'Ecommerce Development', href: '#services', box: 'bx bx-cart header-icon' },
          { label: 'Shopify Development', href: '#services', box: 'bx bxl-shopify header-icon' },
          { label: 'Landing Page Development', href: '#services', box: 'bx bx-layout header-icon' },
        ],
      },
    ],
    banner: {
      text: 'We have Daynamic Team Members that Easily Problem Solve.',
      cta: "Let's Talk",
      href: '#contact',
      img: '/assets/img/home/navimg.png',
    },
  },
  INDUSTRY_SUB,
  { label: 'Our Work', href: '#why' },
  {
    label: 'Resources',
    mega: true,
    blog: {
      title: 'Innovative Thinking',
      cards: [
        {
          img: '/admin/activity/68592ea52900f_case1.png',
          href: '#why',
          tag: 'Case Study',
          date: '12 Aug, 2025',
          title: 'Rewamping Brand Identity Success story',
        },
        {
          img: '/admin/activity/68592f01843f7_casestudy2.png',
          href: '#why',
          tag: 'Case Study',
          date: '09 Aug, 2025',
          title: 'Conversion Rate on the digital Platforn',
        },
      ],
      caseLink: { label: 'Case Study', href: '#testimonial', icon: 'arrowRight' },
    },
  },
];

export const certifications = [
  '/assets/img/grow/partner/logo-5.png',
  '/assets/img/grow/partner/logo-1.png',
  '/assets/img/grow/partner/logo-2.png',
  '/assets/img/grow/partner/logo-3.png',
  '/assets/img/grow/partner/logo-4.png',
];

export const services = [
  {
    title: 'Search Engine Optimization',
    icon: 'bx bx-search-alt',
    href: '#services',
    tone: '',
    points: [
      'Optimizing your website to rank higher on search engines like Google.',
      'Includes keyword research, on-page optimization, technical SEO, and link building.',
      'Agencies focus on improving organic traffic and visibility.',
    ],
  },
  {
    title: 'Pay-Per-Click Advertising',
    icon: 'bx bx-target-lock',
    href: '#services',
    tone: 'two',
    points: [
      'Running paid ad campaigns on platforms like Google Ads, Bing Ads, and social media.',
      'Focuses on driving immediate traffic and conversions through targeted ads.',
      'Agencies manage budgets, ad copy, and performance tracking.',
    ],
  },
  {
    title: 'Social Media Marketing',
    icon: 'bx bx-message-rounded-dots',
    href: '#services',
    tone: '',
    points: [
      'Creating and managing platforms like Facebook, Instagram, LinkedIn, Twitter, Pinterest.',
      'Includes content creation, community management, and paid social media ads.',
      'Helps build brand awareness and customer engagement.',
    ],
  },
  {
    title: 'Content Marketing',
    icon: 'bx bx-file-blank',
    href: '#services',
    tone: 'three',
    points: [
      'Developing high-quality, relevant content such as blogs, videos, infographics, and eBooks.',
      'Aims to educate, entertain, and engage your target audience.',
      'Often integrated seamlessly with SEO and social media strategies.',
    ],
  },
  {
    title: 'Email Marketing',
    icon: 'bx bx-envelope',
    href: '#services',
    tone: '',
    points: [
      'Executing automated email campaigns to nurture leads and retain long-term customers.',
      'Includes segmentation, behavioral triggers, automation, and analytics.',
      'Optimizing content for high open rates, click-throughs, and conversions.',
    ],
  },
  {
    title: 'Conversion Rate Optimization',
    icon: 'bx bx-line-chart',
    href: '#services',
    tone: 'three',
    points: [
      'Improving the percentage of visitors who take desired actions (purchases, sign-ups).',
      'Involves systematic A/B testing, user experience (UX) refinements, and heatmaps.',
      'Building deep user trust through credible on-site proof points.',
    ],
  },
];

export const whyCards = [
  {
    title: 'Customized Solutions',
    img: '/assets/img/grow/customised-digital-solutions.png',
    text: "We design tailored web, mobile, and marketing strategies aligned with your business goals. Our bespoke solutions resonate with your target audience and deliver measurable success - ensuring your brand stands out in a today's competitive digital landscape.",
  },
  {
    title: 'Proven Excellence',
    img: '/assets/img/grow/results-1.png',
    text: 'With a data-focused approach to SEO, digital campaigns, and web development, we deliver tangible outcomes such as increased traffic and higher conversions. Our team blends technical accuracy with deep industry insight to maximize ROI and fuel long-term business growth.',
  },
  {
    title: 'Creating Together',
    img: '/assets/img/grow/Creativity.png',
    text: 'We work closely with you to bring your vision to life through stunning design and innovative digital strategies. Our team’s creative and professional approach ensures each project is a perfect blend of your ideas and our expertise, resulting in high-impact outcomes.',
  },
];

export const counters = [
  { value: 150, label: 'Happy Clients', tone: 'bg-clip', vector: '/assets/img/home4/icon/home4-counter-vector1.svg' },
  { value: 150, label: 'Projects Delivered', tone: 'two', vector: '/assets/img/home4/icon/home4-counter-vector2.svg' },
  { value: 10, label: 'Years of Expertise', tone: 'bg-clip', vector: '/assets/img/home4/icon/home4-counter-vector3.svg' },
  { value: 30, label: 'Team Members', tone: 'two', vector: '/assets/img/home4/icon/home4-counter-vector4.svg' },
];

export const features = [
  {
    title: 'Streamlined Strategy Design',
    text: 'We develop clear, data-driven marketing plans customized to your brand, making growth effortless through targeted and scalable online strategies.',
    tone: '',
  },
  {
    title: 'Campaign Execution',
    text: "Our experts implement automated, high-impact campaigns to streamline marketing and amplify your brand's online presence.",
    tone: 'two',
  },
  {
    title: 'Optimized Growth Tracking',
    text: 'We continuously monitor and optimize your campaigns using smart analytics, ensuring consistent, measurable results and sustained growth.',
    tone: 'three',
  },
  {
    title: 'Effortless Digital Scaling',
    text: 'Our intelligent, automated solutions enable your brand to expand its digital reach with ease - minimizing complexity & maximizing results',
    tone: 'four',
  },
];

export const processSteps = [
  {
    title: 'Plan & Strategize',
    no: '01',
    align: 'left' as const,
    tone: 'step-dark',
    desc: 'Audits, positioning, and KPI blueprinting.',
  },
  {
    title: 'Create & Launch',
    no: '02',
    align: 'right' as const,
    tone: 'step-white',
    desc: 'Deploy high-converting funnels & targeted ads.',
  },
  {
    title: 'Analyze & Optimize',
    no: '03',
    align: 'right' as const,
    tone: 'step-blue',
    desc: 'Iterative testing, A/B scale, and peak ROI.',
  },
];

export const industries = [
  {
    name: 'Information Technology',
    href: '#industry',
    text: 'We help establish a consistent, credible brand identity - particularly for Hospitals, Clinics, & Healthcare providers – through high-quality digital services.',
    success: 98,
  },
  {
    name: 'Education',
    href: '#industry',
    text: 'We help educational institutions build a strong, credible digital presence through tailored branding and marketing solutions that enhance trust and engagement.',
    success: 95,
  },
  {
    name: 'Fitness',
    href: '#industry',
    text: 'We create compelling brand identities for fitness centers and personal training businesses, promoting trust, motivation, and a professional online image.',
    success: 99,
  },
  {
    name: 'Health Care',
    href: '#industry',
    text: 'We specialize in establishing consistent and trustworthy brand identities for hospitals, clinics, and healthcare providers—enhancing credibility and patient trust.',
    success: 93,
  },
  {
    name: 'Logistics',
    href: '#industry',
    text: 'We develop professional digital strategies for logistics companies, ensuring reliability, consistency, and an impactful brand presence in a competitive market.',
    success: 94,
  },
  {
    name: 'Real Estate',
    href: '#industry',
    text: 'We empower real estate businesses with strong, trustworthy branding and marketing strategies that drive engagement and generate qualified leads.',
    success: 99,
  },
];

export const ratings = [
  { label: 'REVIEWED', logo: 'google', reviews: 50, half: true },
  { label: 'REVIEWED', logo: '/assets/img/grow/74-21v.png', reviews: 70, half: true },
  { label: 'REVIEWED', logo: '/assets/img/grow/74-21.png', reviews: 100, half: false },
];

export const awards = [
  '/assets/img/grow/logos/Adelaide-Culinary-Institute-Logo-min.png',
  '/assets/img/grow/logos/auschs.png',
  '/assets/img/grow/logos/carelogo.png',
  '/assets/img/grow/logos/fitoor-logo.png',
  '/assets/img/grow/logos/nbds-logo.png',
];

export const testimonials = [
  {
    img: '/admin/testimonial/688afa76b5316_testimonial.png',
    badge: 'Outstanding Support!',
    text: 'Working with this team transformed our online presence. Their smart strategies boosted our traffic by 40% in just three months. Highly professional and results-driven!',
    name: 'Kartik',
    role: 'Project Manager',
  },
];

export const techStack = [
  'apache',
  'aws',
  'laravel',
  'django',
  'php',
  'cloud',
  'docker',
  'flutter',
  'kotlin',
  'mysql',
  'node-js',
  'oracle',
  'pwa',
  'react-js',
  'selenium',
  'swift',
].map((name) => `/assets/img/grow/technology/${name}.png`);

export const trustedClients = [
  '1png_1.png',
  'Adelaide-Culinary-Institute-Logo-min.png',
  'auschs.png',
  'blckLogo1_trans.png',
  'carelogo.png',
  'fitoor-logo.png',
  'logo-1x.png',
  'logo-2x.png',
  'logo-1.png',
  'logo-2.png',
  'logo.png',
  'nbds-logo.png',
].map((name) => `/assets/img/grow/logos/${name}`);

export const serviceOptions = [
  {
    label: 'Smart Services',
    options: [
      'Search Engine Optimization',
      'Pay-Per-Click Advertising',
      'Social Media Marketing',
      'Content Marketing',
      'Email Marketing',
      'Conversion Rate Optimization',
      'Website Design & Development',
      'Influencer Marketing',
      'Data Visualization',
      'Local SEO & Google My Business',
    ],
  },
  {
    label: 'Digital',
    options: ['Google Ads', 'Meta Ads', 'TikTok Ads', 'LinkedIn Ads'],
  },
  {
    label: 'Web Development',
    options: [
      'Website Development',
      'WordPress Development',
      'Ecommerce Development',
      'Shopify Development',
      'Landing Page Development',
    ],
  },
  {
    label: 'Design',
    options: ['Logo Design', 'Graphic Design', 'Banner Design'],
  },
];

export const quickLinks = [
  { label: 'About us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Industries', href: '#industry' },
  { label: 'Our Work', href: '#why' },
  { label: 'Case Study', href: '#testimonial' },
];

export const usefulLinks = [
  { label: "FAQ's", href: '#testimonial' },
  { label: 'Privacy Policy', href: '#contact' },
  { label: 'Terms & Conditions', href: '#contact' },
  { label: 'Contact Us', href: '#contact' },
];

export const socials = [
  { label: 'Facebook', icon: 'bxl-facebook', href: 'https://www.facebook.com/growudigitalaustralia/' },
  { label: 'LinkedIn', icon: 'bxl-linkedin', href: 'https://www.linkedin.com/company/growu-digital-australia/' },
  { label: 'Instagram', icon: 'bxl-instagram-alt', href: 'https://www.instagram.com/' },
];