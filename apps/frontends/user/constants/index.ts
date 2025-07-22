import {
  LucideIcon,
  Star,
  Users,
  Tag,
  Layout,
  CalendarCheck,
  ShieldCheck,
  LandPlot,
  BadgePercent,
  Projector,
  QrCode,
  CreditCard,
  CalendarDays,
  MapPin,
  BadgeCheck,
  Shield,
  Heart,
  Headphones,
  Eye,
  Globe,
  TrendingUp,
  Award,
  Target,
} from "lucide-react";

export const SECTION_TITLES = {
  features: {
    title: "What Sets Us Apart",
    description:
      "Explore the unique features and exceptional services that make our rentals the best",
  },
  faqs: {
    title: "Frequently Asked Questions",
    description:
      "Find answers to frequently asked questions about our services and facilities",
  },
  howItWorks: {
    title: "How It Works",
    description: "Simple steps to reserve your preferred facility",
  },
  testimonials: {
    title: "What Residents Are Saying",
  },
  promos: {
    title: "Upcoming Events & Promos",
    description:
      "Stay updated with our latest events and promotions to make the most of your rental experience",
  },
  cta: {
    title: "Start Your Reservation Now",
    description:
      "Book your next stay with us and enjoy a comfortable and memorable experience.",
  },
  missionVision: {
    title: "Our Mission & Vision",
    description:
      "We&apos;re on a mission to transform how people find andexperience rental properties, making the process transparent,secure, and delightful.",
  },
};

export const MENU_ITEMS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Facilities",
    href: "/facilities",
  },
  {
    label: "About Us",
    href: "/about-us",
  },
  {
    label: "FAQs",
    href: "/faqs",
  },
  {
    label: "Contact Us",
    href: "/contact-us",
  },
];

export const HERO_IMAGES = [
  {
    src: "/placeholder.svg",
    alt: "Hero Image 1",
    title: "Community Hall",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
  {
    src: "/placeholder.svg",
    alt: "Hero Image 2",
    title: "Basketball Court",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
  {
    src: "/placeholder.svg",
    alt: "Hero Image 3",
    title: "Volleyball Court",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
  {
    src: "/placeholder.svg",
    alt: "Hero Image 4",
    title: "Badminton Court",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
  {
    src: "/placeholder.svg",
    alt: "Hero Image 5",
    title: "Table Tennis Court",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
];

// Minimum distance to trigger swipe
export const HERO_IMAGES_DRAGGING_THRESHOLD = 50;

// Gallery takes up 75% of the hero section height
export const HERO_IMAGES_GALLERY_HEIGHT_RATIO = 0.75;

// Image content takes up 60% of the hero section height
export const HERO_IMAGES_IMAGE_CONTENT_HEIGHT_RATIO = 0.6;

export const FEATURES = [
  {
    logo: Star as LucideIcon,
    title: "Positive Reviews",
    description:
      "Highly rated by previous renters for our exceptional service and facilities.",
  },
  {
    logo: Users as LucideIcon,
    title: "Experienced Staffs",
    description:
      "Professional support team available to assist with setup, coordination, and any special requests.",
  },
  {
    logo: Tag as LucideIcon,
    title: "Affordable Rates",
    description:
      "Competitive pricing with special discounts for local residents and frequent renters.",
  },
  {
    logo: Layout as LucideIcon,
    title: "Multi Functional Spaces",
    description:
      "Our facilities are perfect for business meetings, parties, and sports events.",
  },
  {
    logo: CalendarCheck as LucideIcon,
    title: "Easy Booking Process",
    description:
      "Simple and convenient online booking system to reserve your rental quickly and hassle-free.",
  },
  {
    logo: ShieldCheck as LucideIcon,
    title: "Secure Environment",
    description:
      "Our properties prioritize safety with 24/7 security measures to ensure peace of mind for all renters.",
  },
];

export const TESTIMONIALS = [
  {
    name: "Maria Santos",
    image: "/placeholder.svg",
    description: "Resident since 2019",
    rating: 5,
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
  {
    name: "Juan Dela Cruz",
    image: "/placeholder.svg",
    description: "Basketball team captain",
    rating: 4,
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
  {
    name: "Ana Rodriguez",
    image: "/placeholder.svg",
    description: "Community Organizer",
    rating: 4.5,
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
];

export const FAQS_ITEMS = [
  {
    question: "How do I cancel or modify my reservation?",
    answer:
      "You can cancel or modify your reservation up to 24 hours before your scheduled time through your account dashboard. Full refunds are available for cancellations made at least 48 hours in advance.",
  },
  {
    question: "Can I reserve multiple facilities at once?",
    answer:
      "Yes—you can select and book multiple facilities in a single reservation session before checking out.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit and debit cards, as well as popular e-wallets such as GCash and PayMaya.",
  },
  {
    question: "Do I need to print my QR ticket?",
    answer:
      "No—simply display your QR ticket on your mobile device and present it at the facility entrance for scanning.",
  },
  {
    question: "What if I need help during my reservation?",
    answer:
      "If you need assistance at any point, you can reach our 24/7 support team via the in-dashboard chat or by calling our helpline.",
  },
];

export const PROMOS = [
  {
    id: 1,
    type: "Event",
    date: "July 12-15, 2024",
    title: "Summer Basketball",
    description:
      "Join our annual basketball tournament. Court reservations available for practice sessions.",
    icon: LandPlot as LucideIcon,
  },
  {
    id: 2,
    type: "Promo",
    date: "Valid until June 30",
    title: "Community Hall 20% Off",
    description:
      "Special discount for weekend bookings. Perfect for family celebrations and gatherings.",
    icon: BadgePercent as LucideIcon,
  },
  {
    id: 3,
    type: "Workshop",
    date: "Aug 5, 2024",
    title: "Gardening Basics",
    description:
      "Learn the essentials of home gardening from local experts. Free starter kits for attendees!",
    icon: Projector as LucideIcon,
  },
  {
    id: 4,
    type: "Meetup",
    date: "Sept 10, 2024",
    title: "Moms & Tots Playdate",
    description:
      "A fun morning for moms and their little ones. Snacks and games provided.",
    icon: Users as LucideIcon,
  },
  {
    id: 5,
    type: "Class",
    date: "Oct 2, 2024",
    title: "Yoga for Beginners",
    description:
      "Start your wellness journey with our introductory yoga class. Mats provided.",
    icon: Projector as LucideIcon,
  },
  {
    id: 6,
    type: "Festival",
    date: "Nov 15, 2024",
    title: "Harvest Festival",
    description:
      "Celebrate the season with food, music, and games for all ages. Free entry!",
    icon: Users as LucideIcon,
  },
  {
    id: 7,
    type: "Charity",
    date: "Dec 10, 2024",
    title: "Holiday Food Drive",
    description:
      "Help us support local families in need. Donate non-perishable food items at the community center.",
    icon: Users as LucideIcon,
  },
];

export const HOW_IT_WORKS = [
  {
    icon: MapPin as LucideIcon,
    title: "Choose a Facility",
    description:
      "Browse available facilities and select your preferred option from our catalog.",
  },
  {
    icon: CalendarDays as LucideIcon,
    title: "Pick Your Date & Time",
    description:
      "Select your desired date and time slot from our real-time calendar.",
  },
  {
    icon: CreditCard as LucideIcon,
    title: "Pay Online",
    description:
      "Complete secure payment through GCash, PayMaya, or bank transfer.",
  },
  {
    icon: QrCode as LucideIcon,
    title: "Get QR Ticket",
    description:
      "Receive instant QR code ticket via email for facility access.",
  },
];

export const CORE_VALUES = [
  {
    icon: BadgeCheck as LucideIcon,
    title: "Trust & Transparency",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
  {
    icon: Shield as LucideIcon,
    title: "Transparency",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
  {
    icon: Heart as LucideIcon,
    title: "Community First",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
];

export const TEAM_MEMBERS = [
  {
    name: "John Doe",
    role: "Founder & CEO",
    avatar: "/placeholder.svg",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "https://github.com",
    },
    bio: "John is a visionary leader with a passion for creating innovative solutions that empower users and drive market growth.",
    skills: ["Leadership", "Strategy", "Innovation"],
  },
  {
    name: "Jane Smith",
    role: "Operations Manager",
    avatar: "/placeholder.svg",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "https://github.com",
    },
    bio: "Jane is a technology expert with a talent for building scalable and robust systems that deliver exceptional user experiences.",
    skills: ["React", "Node.js", "System Architecture"],
  },
  {
    name: "Peter Jones",
    role: "Product Manager",
    avatar: "/placeholder.svg",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "https://github.com",
    },
    bio: "Peter is a product strategist who excels at translating user needs into compelling features and a seamless product journey.",
    skills: ["Product Management", "UX Research", "Agile"],
  },
  {
    name: "Mary Williams",
    role: "Creative Designer",
    avatar: "/placeholder.svg",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "https://github.com",
    },
    bio: "Mary is a creative designer with a keen eye for aesthetics and a commitment to crafting intuitive and beautiful interfaces.",
    skills: ["UI/UX Design", "Figma", "Prototyping"],
  },
];

export const MISSION_VISION_CARDS = {
  mission: {
    title: "Our Mission",
    subtitle: "Revolutionize Rental Living",
    titleIcon: Target as LucideIcon,
    description:
      "To revolutionize the rental market by prioritizing transparency, security, and exceptional user experience. We aim to be the trusted platform that connects people with their perfect homes.",
    features: [
      {
        icon: ShieldCheck as LucideIcon,
        text: "Transparent pricing & no hidden fees",
      },
      {
        icon: Eye as LucideIcon,
        text: "Verified properties with quality assurance",
      },
      {
        icon: Headphones as LucideIcon,
        text: "24/7 customer support & assistance",
      },
    ],
  },
  vision: {
    title: "Our Vision",
    subtitle: "Lead the Digital Revolution",
    titleIcon: Award as LucideIcon,
    description:
      "To become the leading platform that transforms how people find and manage rental properties. We envision a world where finding the perfect home is effortless and enjoyable.",
    features: [
      {
        icon: Globe as LucideIcon,
        text: "Digital platform for seamless property discovery",
      },
      {
        icon: Users as LucideIcon,
        text: "Community-driven platform for property management",
      },
      {
        icon: TrendingUp as LucideIcon,
        text: "AI-powered recommendations for personalized experiences",
      },
    ],
  },
};
