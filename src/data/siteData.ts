export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  icon: string;
  image: string;
  fullDesc: string;
  keyAreas: string[];
  deliverables: string[];
}

export interface Partner {
  name: string;
  role: string;
  qualification: string;
  bio: string;
  specialization: string[];
  achievements?: string[];
}

export interface Publication {
  id: string;
  title: string;
  category: "GCo Connect" | "GST NewsFlash" | "Research" | "Statute Guide";
  date: string;
  summary: string;
  tag: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
}

export const siteData = {
  company: {
    name: "M B GABHAWALA & CO.",
    shortName: "M B Gabhawala & Co.",
    legalName: "M B Gabhawala & Co. Chartered Accountants",
    tagline: "Premier Indirect Tax, GST Litigation & Strategic Corporate Advisory",
    motto: "Integrity • Knowledge • Speed",
    establishedYear: 1975,
    logo: "/logo.svg",
    leadPartner: "CA Shubham Singh",
    description:
      "M B Gabhawala & Co. (Chartered Accountants, Est. 1975) is a premier Chartered Accountancy practice with an uncompromising specialization in Indirect Taxation, GST advisory, high-stakes tax litigation, and corporate structuring. Serving corporate conglomerates and institutional clients with pan-India offices in Kolkata, Mumbai, Gurugram, Varanasi, Sonebhadra, and Katihar.",
  },

  contact: {
    phones: [
      { display: "+91 9681 606 280", value: "+919681606280" },
      { display: "+91 7007 026 952", value: "+917007026952" },
    ],
    primaryPhone: "+919681606280",
    primaryPhoneDisplay: "+91 9681 606 280 / +91 7007 026 952",
    whatsappNumber: "+919681606280",
    whatsappUrl:
      "https://wa.me/919681606280?text=Hello%20M%20B%20Gabhawala%20%26%20Co.%2C%20I%20would%20like%20to%20inquire%20regarding%20tax%20and%20advisory%20services.",
    emails: [
      { label: "Kolkata Office & Partners", email: "mbgkolkata@gmail.com" },
      { label: "GST Practice", email: "gst@sbgco.in" },
    ],
    primaryEmail: "mbgkolkata@gmail.com",
  },

  location: {
    building: "AS/361/11-12, Loknath Park",
    landmark: "Behind Arsalan, Chinar Park",
    area: "Chinar Park",
    city: "Kolkata",
    state: "West Bengal",
    pincode: "700157",
    country: "India",
    fullAddress:
      "AS/361/11-12, Loknath Park, Behind Arsalan, Chinar Park, Kolkata - 700157, West Bengal, India",
    workingDays: "Monday to Friday (Saturday by appointment)",
    workingHours: "9:30 AM – 8:00 PM IST",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.3787754388435!2d88.43851507593677!3d22.628862830501865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89e2e50587637%3A0xc3f8312e69cbfa6c!2sChinar%20Park%20Arsalan!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    directionsNote:
      "Situated behind Arsalan, Chinar Park, Rajarhat / New Town Road, Kolkata 700157.",
    branches: [
      { city: "Kolkata", state: "West Bengal", address: "AS/361/11-12, Loknath Park, Behind Arsalan, Chinar Park, Kolkata - 700157" },
      { city: "Varanasi", state: "Uttar Pradesh", address: "Varanasi Branch Office, Uttar Pradesh" },
      { city: "Gurugram", state: "Haryana", address: "Gurugram Corporate Office, Haryana" },
      { city: "Katihar", state: "Bihar", address: "Katihar Branch Office, Bihar" },
      { city: "Sonebhadra", state: "Uttar Pradesh", address: "Sonebhadra Branch Office, Uttar Pradesh" },
      { city: "Mumbai", state: "Maharashtra", address: "Mumbai Executive Chambers, Maharashtra" },
    ],
  },

  navigation: [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    {
      name: "Services",
      path: "/services",
      subItems: [
        {
          name: "Advisory Services",
          path: "/services/advisory",
          id: "advisory",
          desc: "Tax classification, commercial agreements & legal opinions",
        },
        {
          name: "Litigation & Representation",
          path: "/services/litigation",
          id: "litigation",
          desc: "Show cause notice defense, GSTAT & High Court appeals",
        },
        {
          name: "Compliance & Return Filing",
          path: "/services/compliance",
          id: "compliance",
          desc: "GSTR-1, 3B, annual 9/9C reconciliation & refund processing",
        },
        {
          name: "Tax Health Checkups & Audit",
          path: "/services/due-diligence",
          id: "due-diligence",
          desc: "Diagnostic reviews, credit leakage prevention & M&A diligence",
        },
        {
          name: "ERP Systems Tax Integration",
          path: "/services/erp-integration",
          id: "erp-integration",
          desc: "SAP S/4HANA & Oracle ERP tax schema mapping",
        },
        {
          name: "Corporate Retainership",
          path: "/services/retainership",
          id: "retainership",
          desc: "Continuous senior partner counsel for ongoing transactions",
        },
      ],
    },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ],

  hero: {
    badge: "Chartered Accountants • Indirect Tax Specialists • ~Since 1975",
    titleLine1: "Welcome to M B Gabhawala & Co.",
    titleHighlight: "Chartered Accountants",
    description:
      "A premier professional services firm practicing exclusively in Indirect Taxes, GST litigation, and strategic corporate structuring. Headquartered in Kolkata with a nationwide branch network across India.",
    primaryCtaText: "Consult Our Partners",
    primaryCtaPath: "/contact",
    secondaryCtaText: "Explore Practice Areas",
    secondaryCtaPath: "/services",
    slides: [
      {
        id: "slide-1",
        image: "/hero-1.jpg",
        caption: "Tax Audit & Corporate Advisory Consultation",
        subcaption: "Guiding enterprise decision-makers through complex Indian tax terrain.",
      },
      {
        id: "slide-2",
        image: "/hero-2.jpg",
        caption: "Tax Jurisprudence & Financial Analytics",
        subcaption: "Rigorous statutory research and contract structuring across India.",
      },
      {
        id: "slide-3",
        image: "/hero-3.jpg",
        caption: "Strategic Corporate & Indirect Tax Advisory",
        subcaption: "Seasoned Indian Chartered Accountants delivering institutional counsel across India.",
      },
    ],
  },

  pillars: [
    {
      title: "Integrity",
      tagline: "Unflinching Ethical Foundation",
      description:
        "Every opinion and advisory stance is grounded in the highest standards of professional ethics, independent rigor, and statutory adherence, earning the lifelong trust of regulatory authorities and clients alike.",
      icon: "ShieldCheck",
    },
    {
      title: "Knowledge",
      tagline: "Thought Leadership & Depth",
      description:
        "Our practice is steered by seasoned Chartered Accountants who actively decode intricate statutes, landmark tribunal judgments, and constitutional principles to provide actionable clarity.",
      icon: "BookOpen",
    },
    {
      title: "Speed",
      tagline: "Agile, Business-Centric Execution",
      description:
        "In the dynamic landscape of GST notifications and strict statutory deadlines, we deliver rapid turnarounds, preemptive alerts, and seamless compliance that keep businesses ahead of risk.",
      icon: "Zap",
    },
  ],

  stats: [
    { value: "50+", label: "Years of Practice Legacy", subtext: "Serving India ~Since 1975" },
    { value: "6", label: "Pan-India Branch Locations", subtext: "Kolkata, Mumbai, Gurugram, Varanasi & more" },
    { value: "100%", label: "Indirect Tax Specialization", subtext: "Focused GST, Customs & Litigation" },
    { value: "5000+", label: "Institutional Consultations", subtext: "Trusted by Corporate Enterprises" },
  ],

  founder: {
    name: "CA Shubham Singh",
    designation: "Partner",
    qualifications: "FCA, B.Com (Chartered Accountant)",
    quote:
      "Indirect tax is not merely a compliance burden; it is a strategic business variable. When handled with statutory precision and foresight, it fortifies commercial contracts and shields enterprise value.",
    bio:
      "CA Shubham Singh leads the Kolkata practice of M B Gabhawala & Co. Chartered Accountants. With comprehensive experience in Indirect Taxation, GST litigation, corporate tax compliance, and transactional structuring, he advises leading manufacturing, trading, infrastructure, and service enterprises across Eastern and Northern India.",
    keyHighlights: [
      "Partner, M B Gabhawala & Co. (Chartered Accountants)",
      "Head of Practice: Kolkata Headquarters (Chinar Park, Rajarhat)",
      "Specialist in GST Litigation, Show Cause Notices & Appellate Proceedings",
      "Advising major corporate clients across West Bengal, Bihar, UP, and Delhi-NCR",
      "Leading comprehensive ERP Tax Integration and Statutory Audits",
      "Network coverage across Kolkata, Varanasi, Gurugram, Katihar, Sonebhadra & Mumbai",
    ],
  },

  partners: [
    {
      name: "CA Shubham Singh",
      role: "Partner (Kolkata)",
      qualification: "FCA, B.Com",
      bio: "Leads the Kolkata practice at Chinar Park, specializing in high-stakes GST litigation, departmental audit representation, and corporate tax structuring.",
      specialization: ["GST Litigation & Appeals", "Corporate Advisory", "Tax Health Checkups"],
    },
    {
      name: "CA. Sunil Gabhawalla",
      role: "Senior Partner & Jurist",
      qualification: "FCA, Grad. CWA (All-India Ranker)",
      bio: "Over 28 years of seasoned counsel in indirect taxation, policy advocacy, and high-stake litigation. Past President of BCAS.",
      specialization: ["Constitutional Tax Law", "GSTAT & High Court Appeals", "Policy Advisory"],
    },
    {
      name: "CA. Yash Parmar",
      role: "Partner",
      qualification: "FCA, B.Com",
      bio: "Leads indirect tax retainership for Hospitality, Real Estate, and Banking/Financial Services.",
      specialization: ["BFSI & Real Estate GST", "Contract Structuring", "Tax Health Checkups"],
    },
    {
      name: "CA. Parth Shah",
      role: "Partner",
      qualification: "FCA, DISA (ICAI)",
      bio: "Specializes in departmental audit defense, DGGI investigations, and drafting complex appellate submissions.",
      specialization: ["Litigation Drafting", "Departmental Audits", "Show Cause Notices"],
    },
    {
      name: "CA. Darshankumar Ranavat",
      role: "Partner",
      qualification: "ACA, B.Com",
      bio: "Focuses on ERP tax harmonization, GSTR-9/9C reconciliation protocols, and high-volume compliance automation.",
      specialization: ["ERP & Systems Integration", "GSTR-9 & 9C", "Audit Due Diligence"],
    },
    {
      name: "CA. Aman Haria",
      role: "Partner",
      qualification: "ACA, B.Com",
      bio: "Expertise in Input Tax Credit (ITC) optimization, export/zero-rated supply refunds, and inverted duty structures.",
      specialization: ["ITC Optimization", "Export Refunds", "Reverse Charge Mechanisms"],
    },
  ],

  services: [
    {
      id: "advisory",
      title: "Indirect Tax & GST Advisory",
      shortDesc:
        "Strategic determination of taxability, classification, rates, and transaction structuring to eliminate leakage.",
      icon: "Compass",
      image: "/services/advisory.jpg",
      fullDesc:
        "In a continuously evolving GST framework, certainty in tax positions is paramount. We provide actionable, legally grounded opinions on the classification of complex goods and services, valuation rules, and the determination of place and time of supply.",
      keyAreas: [
        "Classification of goods/services under HSN/SAC codes and rate optimization",
        "Structuring commercial agreements, joint ventures, and EPC contracts",
        "Assessment of Reverse Charge Mechanism (RCM) applicability",
        "Cross-border transaction planning, exports, and SEZ regulatory advisory",
        "Input Tax Credit (ITC) eligibility frameworks and anti-denial documentation",
      ],
      deliverables: [
        "Comprehensive written legal opinions on taxability",
        "Contractual tax-risk clauses and restructuring blueprints",
        "Standard Operating Procedures (SOPs) for finance teams",
      ],
    },
    {
      id: "litigation",
      title: "Litigation & Appellate Representation",
      shortDesc:
        "Defending client interests before departmental authorities, First Appellate Authorities, and GSTAT.",
      icon: "Scale",
      image: "/services/litigation.jpg",
      fullDesc:
        "Litigation requires strategic acumen and mastery of statutory jurisprudence. From responding to initial departmental queries and audit summons to appearing before appellate bodies, our partners provide seasoned advocacy.",
      keyAreas: [
        "Handling departmental audits, DGGI investigations, and inquiry summons",
        "Drafting persuasive, jurisprudence-backed replies to pre-SCNs and SCNs",
        "Filing appeals and personal hearings before First Appellate Authorities (FAA)",
        "Formulating appeals before the GST Appellate Tribunal (GSTAT)",
        "Applications and representations before the Authority for Advance Rulings (AAR/AAAR)",
      ],
      deliverables: [
        "Meticulously drafted Show Cause Notice responses",
        "Tribunal grounds of appeal and paper book compilation",
        "Direct representation and argument before appellate benches",
      ],
    },
    {
      id: "compliance",
      title: "GST Compliance & Return Verification",
      shortDesc:
        "End-to-end periodic return compilation, annual reconciliation (GSTR-9/9C), and departmental interfacing.",
      icon: "CheckCircle",
      image: "/services/compliance.jpg",
      fullDesc:
        "Routine compliance failure can lead to severe ITC blockages and punitive interest. We ensure rigorous verification of monthly outward and inward data, automated reconciliation with GSTR-2B, and timely filing.",
      keyAreas: [
        "End-to-end preparation, validation, and filing of GSTR-1, GSTR-3B, and CMP-08",
        "Annual Returns (Form GSTR-9) and Reconciliation Statements (Form GSTR-9C)",
        "Multi-state GST registration setup, amendments, and cancellation management",
        "Real-time reconciliation of vendor ITC mismatches",
        "Timely preparation and execution of GST refund applications",
      ],
      deliverables: [
        "Validated GSTR-9 and GSTR-9C reconciliation dossiers",
        "Vendor compliance status matrices and warning logs",
        "Processed and approved refund orders with revenue authorities",
      ],
    },
    {
      id: "due-diligence",
      title: "Tax Health Checkups & Due Diligence",
      shortDesc:
        "Diagnostic review of historical tax positions, uncovering latent liabilities and unavailed credit potentials.",
      icon: "FileCheck",
      image: "/services/due-diligence.jpg",
      fullDesc:
        "Our diagnostic review examines accounting registers, invoices, and statutory filings against legal provisions to identify potential exposure areas before departmental audit notices arrive.",
      keyAreas: [
        "Pre-acquisition and M&A indirect tax due diligence",
        "Comprehensive GST health checkups across all active registrations",
        "Identification of blocked, ineligible, or missed Input Tax Credits",
        "Verification of valuation principles in related-party and inter-branch supplies",
        "Review of export documentation, Letters of Undertaking (LUT), and shipping bills",
      ],
      deliverables: [
        "Detailed Red-Flag Diagnostic Report with financial impact quantification",
        "Credit recovery plan for unavailed legitimate input tax",
        "Executive presentation for the Board of Directors and Audit Committees",
      ],
    },
    {
      id: "erp-integration",
      title: "ERP & Systems Tax Harmonization",
      shortDesc:
        "Aligning SAP, Oracle, and enterprise accounting architectures with dynamic GST logic to eliminate manual errors.",
      icon: "Cpu",
      image: "/services/erp-integration.jpg",
      fullDesc:
        "ERP misconfigurations are the number one cause of systemic GST mismatches. We work alongside client IT and ERP implementation teams to map tax logic, HSN codes, and e-invoicing workflows directly into system schemas.",
      keyAreas: [
        "Tax schema definition for SAP S/4HANA, Oracle ERP Cloud, and Microsoft Dynamics",
        "E-invoice and E-way bill API automation integration validation",
        "Tax configuration testing for multi-state, multi-warehouse supply networks",
        "Automated generation of GSTR-1 / GSTR-3B source tables from ERP ledgers",
      ],
      deliverables: [
        "ERP Tax Configuration Blueprint and Functional Specification Document",
        "Pre-deployment User Acceptance Testing (UAT) sign-off report",
        "Standardized tax masters and billing rule engines",
      ],
    },
    {
      id: "retainership",
      title: "Corporate Retainership & Retained Counsel",
      shortDesc:
        "Continuous on-demand partner advisory for day-to-day operational queries, tender reviews, and urgent notices.",
      icon: "Briefcase",
      image: "/services/retainership.jpg",
      fullDesc:
        "Retainer clients benefit from immediate direct access to our senior partners for day-to-day transactional advice, quick document scrutiny, and ongoing statutory alerts before business commitments are finalized.",
      keyAreas: [
        "Priority advisory on day-to-day business billing queries",
        "Pre-issuance scrutiny of vendor agreements and commercial purchase orders",
        "Immediate legal review of spot-inquiry queries or summon notices",
        "Exclusive monthly executive briefings on GST Council updates and notifications",
      ],
      deliverables: [
        "Dedicated partner hotline for real-time consultation",
        "Monthly query logs and executive advisory summaries",
        "Access to proprietary internal tax circulars and calculation models",
      ],
    },
  ],

  publications: [
    {
      id: "gco-connect-latest",
      title: "GCo Connect — Monthly Comprehensive Indirect Tax Bulletin",
      category: "GCo Connect" as const,
      date: "Current Edition",
      summary:
        "In-depth analysis of recent High Court judgments, Supreme Court rulings on Input Tax Credit restrictions, and statutory compliance calendar for corporate taxpayers.",
      tag: "Monthly Bulletin",
    },
    {
      id: "gst-council-reforms",
      title: "GST Council Meeting Reforms & Rationalization Breakdown",
      category: "GST NewsFlash" as const,
      date: "Special Briefing",
      summary:
        "A swift executive brief breaking down rate rationalization, inverted duty corrections, and procedure changes for SEZ supplies and e-commerce transactions.",
      tag: "Council Highlights",
    },
    {
      id: "service-tax-treatise",
      title: "Treatise on Service Tax (Multi-Volume Reference Edition)",
      category: "Research" as const,
      date: "Authored Reference",
      summary:
        "The landmark benchmark commentary referenced extensively by tax practitioners, adjudicating officers, and courts across the nation.",
      tag: "Authoritative Book",
    },
    {
      id: "gstat-rules",
      title: "GST Appellate Tribunal (GSTAT) Operational Directives & Filings",
      category: "Statute Guide" as const,
      date: "Practice Guidance",
      summary:
        "Step-by-step procedural guide for framing appeals, security deposit requirements, and evidentiary standards before the newly operational GSTAT benches.",
      tag: "Tribunal Guide",
    },
  ],

  gallery: [
    {
      id: "gal-1",
      title: "Real Estate & Infrastructure Development",
      category: "Real Estate & Infra",
      imageUrl: "/gallery/real-estate.jpg",
      description: "On-site advisory for joint development agreements (JDA), construction ITC claims, and RERA-GST harmonization.",
    },
    {
      id: "gal-2",
      title: "Information Technology & Software Workspaces",
      category: "IT & Corporate",
      imageUrl: "/gallery/it-workspace.jpg",
      description: "Specialized export of software services advisory, LUT filings, and zero-rated supply compliance for tech firms.",
    },
    {
      id: "gal-3",
      title: "Commercial Towers & Special Economic Zones",
      category: "Real Estate & Infra",
      imageUrl: "/gallery/commercial-skyline.jpg",
      description: "SEZ unit tax exemptions, DTA sales structuring, and commercial leasing GST optimization.",
    },
    {
      id: "gal-4",
      title: "BPO & Global In-House Service Centers",
      category: "IT & Corporate",
      imageUrl: "/gallery/bpo-operations.jpg",
      description: "Cross-border service structuring, transfer pricing tax synergies, and input credit optimization for BPO leaders.",
    },
    {
      id: "gal-5",
      title: "Automated Warehousing & Supply Chain Logistics",
      category: "Logistics & Trade",
      imageUrl: "/gallery/logistics-warehousing.jpg",
      description: "Multi-state warehousing networks, E-Way Bill automation, and hub-and-spoke inventory tax models.",
    },
    {
      id: "gal-6",
      title: "Capital Markets & Financial Analytics",
      category: "BFSI & Finance",
      imageUrl: "/gallery/capital-markets.jpg",
      description: "Complex tax counsel for securities trading, brokerage transactions, derivative contracts, and NBFC compliance.",
    },
    {
      id: "gal-7",
      title: "Maritime Shipping & Cross-Border Customs",
      category: "Logistics & Trade",
      imageUrl: "/gallery/customs-shipping.jpg",
      description: "Port clearance advisory, ocean freight IGST litigation, and Free Trade Agreement (FTA) duty optimization.",
    },
    {
      id: "gal-8",
      title: "Global Multimodal Freight & Cargo Distribution",
      category: "Logistics & Trade",
      imageUrl: "/gallery/global-freight.jpg",
      description: "Integrated air and sea freight logistics tax structures, container freight stations, and multimodal tax filings.",
    },
    {
      id: "gal-9",
      title: "Healthcare, Lifesciences & Pharmaceuticals",
      category: "Healthcare & Pharma",
      imageUrl: "/gallery/healthcare-pharma.jpg",
      description: "Navigating inverted duty structures, medicine rate rationalization, and clinical healthcare exemptions.",
    },
    {
      id: "gal-10",
      title: "Heavy Manufacturing & Industrial Engineering",
      category: "Manufacturing",
      imageUrl: "/gallery/manufacturing.jpg",
      description: "Capital goods tax optimization, EPC contract tax structuring, and transitional credit defense for manufacturers.",
    },
    {
      id: "gal-11",
      title: "Institutional Banking Headquarters & Central Financial Hubs",
      category: "BFSI & Finance",
      imageUrl: "/gallery/banking-institution.jpg",
      description: "Indirect tax advisory for scheduled commercial banks, financial institutions, and NBFC consortiums on loan syndication, interest margins, and transactional GST.",
    },
    {
      id: "gal-12",
      title: "Luxury 5-Star Hospitality, Hotels & Tourism Consortia",
      category: "Hospitality & Tourism",
      imageUrl: "/gallery/hospitality-retail.jpg",
      description: "Structuring GST for premium hospitality chains, multi-tier room tariff taxations, banqueting services, composite supply determinations, and luxury leisure operations.",
    },
  ],

  faqs: [
    {
      question: "What is the primary core specialization of M B Gabhawala & Co.?",
      answer:
        "The firm specializes in Indian Indirect Taxation—specifically Goods & Services Tax (GST), Customs, Foreign Trade Policy, legacy Service Tax and Central Excise disputes, transaction structuring, and appellate litigation before the GST Appellate Tribunal (GSTAT) and High Courts.",
    },
    {
      question: "Where are M B Gabhawala & Co.'s offices located?",
      answer:
        "The firm has its primary Kolkata office at AS/361/11-12, Loknath Park, Behind Arsalan, Chinar Park, Kolkata - 700157, with branches in Varanasi (UP), Gurugram (Haryana), Katihar (Bihar), Sonebhadra (UP), and Mumbai (Maharashtra).",
    },
    {
      question: "How long has M B Gabhawala & Co. been in practice?",
      answer:
        "M B Gabhawala & Co. has a distinguished practice legacy established since 1975 (~50 years of professional excellence), serving institutional clients and corporate entities across India.",
    },
    {
      question: "How can clients contact CA Shubham Singh at the Kolkata office?",
      answer:
        "You can directly call +91 9681 606 280 or +91 7007 026 952, email mbgkolkata@gmail.com, or visit the office at Loknath Park, Behind Arsalan, Chinar Park, Kolkata - 700157.",
    },
    {
      question: "How does the firm support clients facing GST departmental audits or SCNs?",
      answer:
        "We manage the entire lifecycle of contentious tax proceedings: from handling inquiry notices and DGGI summons with factual accuracy, to drafting rigorous legal replies to Show Cause Notices, and appearing directly before Adjudicating Authorities and First Appellate Authorities.",
    },
  ],
};
