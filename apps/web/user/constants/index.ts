import {
  LucideIcon,
  Star,
  Users,
  Tag,
  Layout,
  CalendarCheck,
  ShieldCheck,
} from "lucide-react";

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