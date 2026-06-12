// Central site configuration: company facts, contact details, navigation.

export const company = {
  name: "Halifax Defence Consulting",
  legalName: "Halifax Defence Consulting Limited",
  tagline: "Defence consulting for serious decisions in complex environments",
  shortPositioning:
    "A UK-based defence advisory and international liaison firm supporting structured, compliance-aware decisions across defence, security, procurement and governance.",
  companyNumber: "17129255",
  registered: "England and Wales",
  address: {
    line1: "549 Uxbridge Road",
    city: "Hayes",
    region: "England",
    postcode: "UB4 8HP",
  },
  emails: {
    general: "info@halifaxdefenceconsulting.com",
    tenders: "tenders@halifaxdefenceconsulting.com",
    careers: "careers@halifaxdefenceconsulting.com",
    privacy: "privacy@halifaxdefenceconsulting.com",
  },
  responseTime: "within two business days",
  privacyUpdated: "13 May 2026",
};

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Where We Add Value", href: "/where-we-add-value" },
  { label: "Tendering", href: "/tendering" },
  { label: "Insights", href: "/insights" },
  { label: "Careers", href: "/careers" },
];

export const footerNav: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Services",
    links: [
      { label: "Strategy Advisory", href: "/services/strategy-advisory" },
      { label: "Hardware & Systems Advisory", href: "/services/hardware-systems-advisory" },
      { label: "Risk & Threat Assessment", href: "/services/risk-assessment" },
      { label: "Procurement Support", href: "/services/procurement-support" },
      { label: "Capability Development", href: "/services/capability-development" },
      { label: "Cyber & Intelligence", href: "/services/cyber-intelligence" },
      { label: "Training & Simulation", href: "/services/training-simulation" },
      { label: "Policy & Compliance", href: "/services/policy-compliance" },
      { label: "Technology Integration", href: "/services/technology-integration" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Where We Add Value", href: "/where-we-add-value" },
      { label: "Tendering", href: "/tendering" },
      { label: "Insights", href: "/insights" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
];
