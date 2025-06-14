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
      "Our facilities are perfect for business meetings, parties, and sports events. Adaptable layouts to suit any occasion.",
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
