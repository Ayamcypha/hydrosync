export interface ServiceCategory {
  _id: string;
  title: string;
  slug: string;
  description?: string;
  icon?: string;
  order: number;
  services: Service[];
}

export interface Service {
  _id: string;
  title: string;
  slug: string;
  shortDescription?: string;
  description?: string;
  icon?: string;
  image?: SanityImage;
  features?: string[];
  order: number;
  subServices?: SubService[];
}

export interface SubService {
  _id: string;
  title: string;
  slug: string;
  shortDescription?: string;
  description?: string;
  icon?: string;
  features?: string[];
  order: number;
}

export interface SanityImage {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
  alt?: string;
  caption?: string;
}

export interface PageContent {
  _id: string;
  title: string;
  slug: string;
  sections: PageSection[];
  seo?: SEO;
}

export interface PageSection {
  _type: string;
  _key: string;
  [key: string]: unknown;
}

export interface SEO {
  title?: string;
  description?: string;
  ogImage?: SanityImage;
  noIndex?: boolean;
  noFollow?: boolean;
}

export interface Review {
  _id: string;
  authorName: string;
  authorAvatar?: SanityImage;
  rating: number;
  content: string;
  date: string;
  source: "google" | "yelp" | "angie" | "internal";
  verified: boolean;
}

export interface TeamMember {
  _id: string;
  name: string;
  role: string;
  bio?: string;
  image?: SanityImage;
  certifications?: string[];
  order: number;
}

export interface ServiceArea {
  _id: string;
  city: string;
  state: string;
  zipCodes: string[];
  latitude?: number;
  longitude?: number;
}

export interface Coupon {
  _id: string;
  title: string;
  description: string;
  code?: string;
  discountType: "percentage" | "fixed";
  discountValue: number;
  validUntil?: string;
  terms?: string;
  active: boolean;
}

export interface FAQ {
  _id: string;
  question: string;
  answer: string;
  category?: string;
  order: number;
}

export interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: PortableTextBlock[];
  mainImage?: SanityImage;
  author?: TeamMember;
  categories: string[];
  publishedAt: string;
  seo?: SEO;
}

export interface PortableTextBlock {
  _type: string;
  _key: string;
  children?: PortableTextSpan[];
  style?: string;
  level?: number;
  listItem?: string;
  [key: string]: unknown;
}

export interface PortableTextSpan {
  _type: "span";
  _key: string;
  text: string;
  marks?: string[];
}

export interface SiteSettings {
  _id: string;
  siteName: string;
  tagline: string;
  phone: string;
  email: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  hours: {
    weekday: string;
    saturday: string;
    sunday: string;
  };
  social: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
    linkedin?: string;
    youtube?: string;
  };
  emergencyPhone?: string;
  licenseNumber?: string;
  googleReviewsUrl?: string;
  googlePlacesId?: string;
}

export interface BookingFormData {
  serviceType: string;
  serviceDetail?: string;
  preferredDate: string;
  preferredTime: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  zipCode: string;
  notes?: string;
  marketingConsent: boolean;
}

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  marketingConsent: boolean;
}

export interface NavigationItem {
  label: string;
  href?: string;
  children?: NavigationItem[];
  megaMenu?: boolean;
  category?: ServiceCategory;
}

export interface MegaMenuData {
  categories: ServiceCategory[];
  featuredServices?: Service[];
  trustSignals?: TrustSignal[];
}

export interface TrustSignal {
  icon: string;
  title: string;
  description: string;
}