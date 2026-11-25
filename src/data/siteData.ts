export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  icon: string;
  image: string;
  fullDesc: string;
  keyAreas: string[];
  deliverables: string[];
  highlight?: boolean;
  badge?: string;
}

export interface Partner {
  name: string;
  role: string;
  qualification: string;
  bio: string;
  specialization: string[];
  achievements?: string[];
  phone?: string;
  address?: string;
  city?: string;
  image?: string;
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
    tagline: "Direct & Indirect Tax Counsel, GST Litigation & Strategic Corporate Advisory",
    motto: "Integrity • Knowledge • Speed",
    establishedYear: 1975,
    logo: "/logo.svg",
    headquarter: "Varanasi, Uttar Pradesh",
    corporateChambers: "Kolkata, West Bengal",
    leadPartner: "CA Shubham Singh",
    seniorPartner: "CA Aprameya Mahendra Gabhawala",
    description:
      "M B Gabhawala & Co. (Chartered Accountants, Est. 1975) is a premier Chartered Accountancy institution with an authoritative practice legacy spanning five decades (~50 years). We deliver boardroom-grade Direct & Indirect Taxation counsel, high-stakes GST and appellate litigation, NRI tax compliance, FCRA statutory certifications, and corporate governance. Headquartered in Varanasi with nationwide branch operations in Kolkata, Mumbai, Gurugram, Katihar, Sonebhadra, and Assam (Bongaigaon).",
  },

  contact: {
    phones: [
      { display: "+91 98390 59940", value: "+919839059940", label: "Varanasi Head Office" },
      { display: "+91 96816 06280", value: "+919681606280", label: "Kolkata Chambers" },
      { display: "+91 70070 26952", value: "+917007026952", label: "Kolkata Chambers Alt" },
      { display: "+91 76685 37291", value: "+917668537291", label: "Gurugram Office" },
      { display: "+91 96813 27113", value: "+919681327113", label: "Katihar Office" },
      { display: "+91 89606 13966", value: "+918960613966", label: "Sonebhadra Office" },
      { display: "+91 99037 23370", value: "+919903723370", label: "Assam Office" },
    ],
    primaryPhone: "+919839059940",
    primaryPhoneDisplay: "+91 98390 59940 / +91 96816 06280",
    whatsappNumber: "+919681606280",
    whatsappUrl:
      "https://wa.me/919681606280?text=Hello%20M%20B%20Gabhawala%20%26%20Co.%2C%20I%20would%20like%20to%20inquire%20regarding%20tax%20and%20advisory%20services.",
    emails: [
      { label: "Kolkata Chambers & Appellate Practice", email: "mbgkolkata@gmail.com" },
      { label: "GST & Tax Advisory Practice", email: "gst@sbgco.in" },
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
    headquarter: {
      title: "Headquarters (Varanasi)",
      building: "Shobha Shree, 3 Surya Nagar",
      landmark: "Guru Bagh, Luxa",
      city: "Varanasi",
      state: "Uttar Pradesh",
      pincode: "221010",
      fullAddress:
        "Shobha Shree, 3 Surya Nagar, Guru Bagh, Luxa, Varanasi, Uttar Pradesh - 221010, India",
      partner: "CA Aprameya Mahendra Gabhawala (FCA)",
      phone: "+91 98390 59940",
    },
    branches: [
      {
        city: "Varanasi",
        state: "Uttar Pradesh",
        role: "Headquarters",
        address: "SHOBHA SHREE, 3 SURYA NAGAR, GURU BAGH, LUXA, VARANASI, UTTAR PRADESH, INDIA - 221010",
        partner: "CA Aprameya Mahendra Gabhawala (FCA)",
        phone: "+91 98390 59940",
      },
      {
        city: "Kolkata",
        state: "West Bengal",
        role: "Corporate & Appellate Chambers",
        address: "AS/361/11-12, LOKENATH PARK, BEHIND ARSALAN, CHINAR PARK, KOLKATA, WEST BENGAL, INDIA - 700157",
        partner: "CA Shubham Singh (FCA)",
        phone: "+91 96816 06280",
      },
      {
        city: "Gurugram",
        state: "Haryana",
        role: "Delhi-NCR Corporate Office",
        address: "A-C 014, GROUND FLOOR, NORTH TOWER, M3M URBANA BUSINESS PARK, SECTOR 67 BADSHAHPUR, GURUGRAM, HARYANA, INDIA - 122101",
        partner: "CA Faiyaz Taquei (FCA)",
        phone: "+91 76685 37291",
      },
      {
        city: "Mumbai",
        state: "Maharashtra",
        role: "Financial Capital Chambers",
        address: "SHYAM GOKUL BUILDING, 11, 2ND FLOOR, SOCIETY ROAD NO-2, JOGESHWARI (E), MUMBAI, MAHARASHTRA, INDIA - 400060",
        partner: "CA Milinda Aprameya Gabhawala (FCA)",
        phone: "+91 98390 59940",
      },
      {
        city: "Katihar",
        state: "Bihar",
        role: "Bihar Regional Office",
        address: "LALJEE COMPLEX GROUND FLOOR, MIRCHAIBARI, KATIHAR, BIHAR, INDIA - 854105",
        partner: "CA Rajan Kumar Shukla (ACA)",
        phone: "+91 96813 27113",
      },
      {
        city: "Sonebhadra",
        state: "Uttar Pradesh",
        role: "Industrial Regional Office",
        address: "KANCHAN SADAN, NEAR GIC SCHOOL OLD GATE, SONEBHADRA, UTTAR PRADESH, INDIA - 231210",
        partner: "CA Pooja Agrawal (ACA)",
        phone: "+91 89606 13966",
      },
      {
        city: "Bongaigaon",
        state: "Assam",
        role: "North-East Regional Office",
        address: "E TAF SOLUTION, 1ST FLOOR, NEAR BANDHAN BANK BRANCH, CHALANTAPARA, BONGAIGAON, ASSAM - 783388",
        partner: "CA MD Firoz Alam",
        phone: "+91 99037 23370",
      },
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
          name: "Audit & Reviews",
          path: "/services/audit-reviews",
          id: "audit-reviews",
          desc: "Statutory, internal, tax, concurrent, forensic & management audits",
          highlight: true,
          badge: "Core Service",
        },
        {
          name: "Accounting",
          path: "/services/accounting",
          id: "accounting",
          desc: "Ind-AS implementation, corporate & HNI accounting, GAAP & policy manuals",
          highlight: true,
          badge: "Core Service",
        },
        {
          name: "Merger & Acquisitions / Demerger",
          path: "/services/mergers-acquisitions",
          id: "mergers-acquisitions",
          desc: "Target identification, synergy analysis & corporate restructuring",
          highlight: true,
          badge: "Core Service",
        },
        {
          name: "Direct Taxes - Income Tax",
          path: "/services/direct-tax",
          id: "direct-tax",
          desc: "Return filing, search/seizures, appeals, transfer pricing & DTAA",
          highlight: true,
          badge: "Core Service",
        },
        {
          name: "Indirect Taxes",
          path: "/services/indirect-tax",
          id: "indirect-tax",
          desc: "GST, PT & VAT compliances, notices & departmental defense",
          highlight: true,
          badge: "Core Service",
        },
        {
          name: "Companies Act",
          path: "/services/companies-act",
          id: "companies-act",
          desc: "Company formation, corporate advisory, ROC compliances & governance",
          highlight: true,
          badge: "Core Service",
        },
        {
          name: "Project Reports & Funding",
          path: "/services/project-reports-funding",
          id: "project-reports-funding",
          desc: "Detailed project reports, bank funding coordination & CMA data",
          highlight: true,
          badge: "Core Service",
        },
        {
          name: "Other Laws (FEMA & SEBI)",
          path: "/services/other-laws",
          id: "other-laws",
          desc: "FEMA, ECB, FDI, SEBI compliances, IPOs & listing regulations",
          highlight: true,
          badge: "Core Service",
        },
        {
          name: "NRI Services & Tax Compliance",
          path: "/services/nri-tax-services",
          id: "nri-tax-services",
          desc: "Specialized NRI tax filings, asset sales & fund repatriation (15CA/CB)",
        },
        {
          name: "FCRA Registration & Renewal",
          path: "/services/fcra-registration",
          id: "fcra-registration",
          desc: "MHA DARPAN ID, Form FC-3 filings & statutory renewals",
        },
        {
          name: "Litigation & Appellate Representation",
          path: "/services/litigation",
          id: "litigation",
          desc: "Show cause notice defense, GSTAT & High Court appeals",
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
    badge: "Chartered Accountants • Direct & Indirect Tax Specialists • ~Since 1975",
    titleLine1: "Welcome to M B Gabhawala & Co.",
    titleHighlight: "Chartered Accountants",
    description:
      "A premier Chartered Accountancy institution practicing across Direct & Indirect Taxation, high-stakes GST litigation, NRI tax matters, and statutory audits. Headquartered in Varanasi with nationwide branch operations in Kolkata, Mumbai, Gurugram, Katihar, Sonebhadra, and Assam.",
    primaryCtaText: "Consult Our Partners",
    primaryCtaPath: "/contact",
    secondaryCtaText: "Explore Practice Areas",
    secondaryCtaPath: "/services",
    slides: [
      {
        id: "slide-1",
        image: "/hero-1.jpg",
        caption: "Direct & Indirect Tax Consultation Chambers",
        subcaption: "Guiding enterprise decision-makers and NRIs through complex Indian tax terrain.",
      },
      {
        id: "slide-2",
        image: "/hero-2.jpg",
        caption: "Tax Jurisprudence & Appellate Research",
        subcaption: "Five decades of rigorous statutory research, audit assurance, and litigation defense.",
      },
      {
        id: "slide-3",
        image: "/hero-3.jpg",
        caption: "Strategic Corporate & Cross-Border Advisory",
        subcaption: "Seasoned Indian Chartered Accountants delivering institutional counsel across India and abroad.",
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
        "In the dynamic landscape of tax notifications, NRI repatriation rules, and strict statutory deadlines, we deliver rapid turnarounds, preemptive alerts, and seamless compliance that keep clients ahead of risk.",
      icon: "Zap",
    },
  ],

  stats: [
    { value: "50+", label: "Years of Practice Legacy", subtext: "Serving India ~Since 1975 (Five Decades)" },
    { value: "7", label: "Pan-India Branch Network", subtext: "Varanasi HQ, Kolkata, Mumbai, Gurugram, Assam & more" },
    { value: "7", label: "Distinguished Partners", subtext: "Fellow & Associate Chartered Accountants" },
    { value: "5000+", label: "Institutional Consultations", subtext: "Corporates, NRIs, PSUs & Enterprises" },
  ],

  founder: {
    name: "CA Shubham Singh",
    designation: "Partner (Kolkata Chambers)",
    qualifications: "FCA, B.Com (Chartered Accountant)",
    quote:
      "Taxation is not merely a compliance burden; it is a strategic business variable. When handled with statutory precision and foresight, it fortifies commercial contracts and shields enterprise value.",
    bio:
      "CA Shubham Singh leads the Kolkata practice of M B Gabhawala & Co. Chartered Accountants. With comprehensive experience in Indirect Taxation, GST litigation, corporate tax compliance, and transactional structuring, he advises leading manufacturing, trading, infrastructure, and service enterprises across Eastern and Northern India.",
    keyHighlights: [
      "Partner, M B Gabhawala & Co. (Chartered Accountants)",
      "Head of Practice: Kolkata Chambers (Chinar Park, Rajarhat)",
      "Specialist in GST Litigation, Show Cause Notices & Appellate Proceedings",
      "Advising major corporate clients across West Bengal, Bihar, UP, and Delhi-NCR",
      "Leading comprehensive ERP Tax Integration and Statutory Audits",
      "Network coverage across Varanasi HQ, Kolkata, Gurugram, Katihar, Sonebhadra, Mumbai & Assam",
    ],
  },

  partners: [
    {
      name: "CA Aprameya Mahendra Gabhawala",
      role: "Senior Partner & Practice Head (Varanasi HQ)",
      qualification: "FCA (Fellow Chartered Accountant)",
      city: "Varanasi",
      address: "SHOBHA SHREE, 3 SURYA NAGAR, GURU BAGH, LUXA, VARANASI, UTTAR PRADESH, INDIA - 221010",
      phone: "+91 98390 59940",
      image: "/gallery/CA APRAMEYA M GABHAWALA.jpeg",
      bio: "Founding & Senior Partner leading the firm's Varanasi Headquarters. With over five decades of distinguished accountancy and taxation leadership, he provides authoritative counsel on direct and indirect taxes, appellate representation, and institutional governance across Northern India.",
      specialization: ["Direct & Indirect Taxation", "Appellate Representation", "Institutional Advisory", "Audit & Governance"],
      achievements: [
        "Head of Practice at Firm Headquarters (Varanasi)",
        "Over 5 decades of continuous professional practice legacy",
        "Trusted advisor to educational institutions, trusts, and corporate enterprises",
      ],
    },
    {
      name: "CA Faiyaz Taquei",
      role: "Partner (Gurugram / Delhi-NCR)",
      qualification: "FCA (Fellow Chartered Accountant)",
      city: "Gurugram",
      address: "A-C 014, GROUND FLOOR, NORTH TOWER, M3M URBANA BUSINESS PARK, SECTOR 67 BADSHAHPUR, GURUGRAM, HARYANA, INDIA - 122101",
      phone: "+91 76685 37291",
      image: "/gallery/CA FAIYAZ TAQUEI.jpeg",
      bio: "Leads the Gurugram (Delhi-NCR) practice at M3M Urbana Business Park. Specializes in corporate taxation, multi-national tax compliance, commercial transactional structuring, and strategic tax health audits for enterprises across the National Capital Region.",
      specialization: ["Corporate Tax & Structuring", "GST Advisory & Audits", "Cross-Border Transactions", "Contract Diligence"],
      achievements: [
        "Head of Practice: Gurugram Corporate Chambers",
        "Advisor to tech corridors, MNCs, and corporate commercial entities",
        "Expert in comprehensive corporate tax optimization",
      ],
    },
    {
      name: "CA Milinda Aprameya Gabhawala",
      role: "Partner (Mumbai Executive Chambers)",
      qualification: "FCA (Fellow Chartered Accountant)",
      city: "Mumbai",
      address: "SHYAM GOKUL BUILDING, 11, 2ND FLOOR, SOCIETY ROAD NO-2, JOGESHWARI (E), MUMBAI, MAHARASHTRA, INDIA - 400060",
      phone: "+91 98390 59940",
      image: "/gallery/CA MILINDA A GABHAWALA.jpeg",
      bio: "Directs the financial capital operations from Mumbai (Jogeshwari East). Specializes in banking, financial services tax frameworks, transactional diligence, capital markets advisory, and corporate tax compliance.",
      specialization: ["Capital Markets & BFSI", "Direct & Indirect Tax", "Corporate Finance", "Due Diligence"],
      achievements: [
        "Head of Practice: Mumbai Executive Chambers",
        "Counsel for corporate restructuring and capital market participants",
        "Expertise in complex commercial contract taxation",
      ],
    },
    {
      name: "CA Shubham Singh",
      role: "Partner (Kolkata Chambers)",
      qualification: "FCA, B.Com (Fellow Chartered Accountant)",
      city: "Kolkata",
      address: "AS/361/11-12, LOKENATH PARK, BEHIND ARSALAN, CHINAR PARK, KOLKATA, WEST BENGAL, INDIA - 700157",
      phone: "+91 96816 06280",
      image: "/gallery/CA SHUBHAM SINGH.jpeg",
      bio: "Leads the Eastern India corporate and appellate practice at Kolkata (Chinar Park). Renowned for representing premier manufacturing, trading, and infrastructure conglomerates before adjudicating and appellate authorities in high-stakes GST and indirect tax litigations.",
      specialization: ["GST Litigation & Appeals", "Corporate Tax Structuring", "Appellate Defense", "ERP Tax Harmonization"],
      achievements: [
        "Head of Practice: Kolkata Corporate & Appellate Chambers",
        "Representing premier conglomerates before GSTAT and Appellate Benches",
        "Advising major corporate entities across West Bengal, Bihar, and UP",
      ],
    },
    {
      name: "CA Rajan Kumar Shukla",
      role: "Partner (Katihar Regional Office)",
      qualification: "ACA (Associate Chartered Accountant)",
      city: "Katihar",
      address: "LALJEE COMPLEX GROUND FLOOR, MIRCHAIBARI, KATIHAR, BIHAR, INDIA - 854105",
      phone: "+91 96813 27113",
      image: "/gallery/CA R K SHUKLA.jpeg",
      bio: "Heads the Katihar, Bihar practice at Laljee Complex. Offers specialized expertise in statutory auditing, direct taxation, corporate accounting, banking compliance, and regional business advisory across Eastern India.",
      specialization: ["Direct Tax & Auditing", "Statutory Compliance", "Commercial Advisory", "Financial Accounting"],
      achievements: [
        "Head of Practice: Katihar Regional Chambers",
        "Key counsel for trading hubs, agribusiness, and industrial operations in Bihar",
        "Expertise in statutory tax audits under Section 44AB",
      ],
    },
    {
      name: "CA Pooja Agrawal",
      role: "Partner (Sonebhadra Regional Office)",
      qualification: "ACA (Associate Chartered Accountant)",
      city: "Sonebhadra",
      address: "KANCHAN SADAN, NEAR GIC SCHOOL OLD GATE, SONEBHADRA, UTTAR PRADESH, INDIA - 231210",
      phone: "+91 89606 13966",
      image: "/gallery/CA POOJA AGRAWAL.png",
      bio: "Leads the industrial belt practice in Sonebhadra, UP. Advises heavy industry, mining, power sector corporations, and EPC infrastructure contractors on direct and indirect taxation, statutory audits, and regulatory filings.",
      specialization: ["Industrial Taxation", "Audit & Assurance", "GST & Statutory Filings", "Corporate Compliance"],
      achievements: [
        "Head of Practice: Sonebhadra Industrial Regional Office",
        "Specialized counsel for power, mineral, and heavy infrastructure entities",
        "Pioneer in regional tax health checkups and credit reconciliations",
      ],
    },
    {
      name: "CA MD Firoz Alam",
      role: "Partner (Assam Branch)",
      qualification: "ACA / Chartered Accountant",
      city: "Bongaigaon",
      address: "E TAF SOLUTION, 1ST FLOOR, NEAR BANDHAN BANK BRANCH, CHALANTAPARA, BONGAIGAON, ASSAM - 783388",
      phone: "+91 99037 23370",
      image: "/gallery/CA MD FIROZ ALAM.jpeg",
      bio: "Directs the firm's North-East regional operations from Bongaigaon, Assam. Delivers end-to-end statutory taxation, direct and indirect tax advisory, FCRA certifications for charitable entities, and strategic business consulting across Assam and neighboring states.",
      specialization: ["North-East Tax Regulatory", "Direct & Indirect Tax", "FCRA & NGO Compliance", "Business Advisory"],
      achievements: [
        "Head of Practice: North-East Regional Chambers (Assam)",
        "Specialist in regional taxation and FCRA charitable entity registrations",
        "Comprehensive statutory advisory across Assam commercial networks",
      ],
    },
  ],

  services: [
    {
      id: "audit-reviews",
      title: "Audit & Reviews",
      shortDesc:
        "We provide a full range of audit and review services, including statutory, internal, and tax audits. Our expertise ensures compliance and enhances financial accuracy and transparency for businesses.",
      icon: "ShieldCheck",
      image: "/services/compliance.jpg",
      highlight: true,
      badge: "Core Practice",
      fullDesc:
        "We provide a full range of audit and review services, including statutory, internal, and tax audits. Our expertise ensures compliance and enhances financial accuracy and transparency for businesses. Through multi-tier statutory scrutiny and forensic evaluation, our audit teams deliver clarity and governance to corporate boards and institutional stakeholders.",
      keyAreas: [
        "Statutory Audit",
        "Internal Audit",
        "Tax Audit",
        "Concurrent Audit",
        "Management Audit",
        "Compliance Audit",
        "Investigation Audit",
        "Forensic Audits",
        "Information System Audit",
        "Periodical Reviews under SEBI/ RBI Act",
        "Due Diligence Review",
        "Stock Audit",
        "Receivable Verification",
        "Preparation of Internal Control Manual",
      ],
      deliverables: [
        "Independent Statutory & Tax Audit Reports with certified disclosures",
        "Internal Control Manuals, SOPs & Management Letters",
        "SEBI & RBI Act Periodical Review Compliance Dossiers",
        "Forensic Investigation & Due Diligence Examination Reports",
      ],
    },
    {
      id: "accounting",
      title: "Accounting & Financial Reporting",
      shortDesc:
        "We offer comprehensive accounting services, including IFRS implementation, designing accounting policies, and corporate accounting. Our tailored solutions cater to HNIs, share accounting, and inventory management.",
      icon: "FileSpreadsheet",
      image: "/services/retainership.jpg",
      highlight: true,
      badge: "Core Practice",
      fullDesc:
        "We offer comprehensive accounting services, including IFRS implementation, designing accounting policies, and corporate accounting. Our tailored solutions cater to HNIs, share accounting, and inventory management, ensuring institutional reporting standards, seamless consolidation, and flawless statutory compliance.",
      keyAreas: [
        "Ind-AS Implementation",
        "Consultancy on Ind-AS",
        "Preparation of Accounting Manuals",
        "Designing of Accounting Policies",
        "Corporate Accounting",
        "HNI Accounting",
        "Specialized Share Accounting",
        "HO/Branch Accounting",
        "Inventory Accounting",
        "Assisting Management for Periodical Auditing",
        "Consultancy on Indian/US GAAP and Compliances",
        "FAR Preparation and Barcoding",
      ],
      deliverables: [
        "Ind-AS & IFRS Compliant Financial Statements",
        "Custom Corporate Accounting Manuals & Policy Documents",
        "Barcoded Fixed Asset Registers (FAR) & Asset Verification Reports",
        "Periodic Management Accounting MIS Packs and GAAP Reconciliations",
      ],
    },
    {
      id: "mergers-acquisitions",
      title: "Merger & Acquisitions / Demerger & Restructuring",
      shortDesc:
        "We provide specialized services in identifying, analyzing, and executing local and international mergers, demergers, and restructurings. Our expertise ensures compliance with legal and tax regulations.",
      icon: "Briefcase",
      image: "/services/due-diligence.jpg",
      highlight: true,
      badge: "Core Practice",
      fullDesc:
        "We provide specialized services in identifying, analyzing, and executing local and international mergers, demergers, and restructurings. Our expertise ensures compliance with legal and tax regulations, statutory scheme approvals before NCLT, and the maximization of operational synergies.",
      keyAreas: [
        "Identifying Companies for Merger",
        "Synergy Analysis",
        "Local Merger/Demerger",
        "Law/Taxes Compliances",
        "Corporate Restructuring",
      ],
      deliverables: [
        "Merger Synergy & Valuation Reports certified by Registered Valuers",
        "NCLT Restructuring Scheme Petition and Regulatory Paper Books",
        "Tax Structuring Opinions & Pre-Merger Due Diligence Dossiers",
        "Post-Restructuring Entity Transition Blueprint",
      ],
    },
    {
      id: "direct-tax",
      title: "Direct Taxes — Income Tax",
      shortDesc:
        "We offer extensive direct tax services, including return preparation and filing, handling searches and appeals, and tax planning. Our team provides expert consultancy on international transactions and tax compliance.",
      icon: "FileText",
      image: "/services/retainership.jpg",
      highlight: true,
      badge: "Core Practice",
      fullDesc:
        "We offer extensive direct tax services, including return preparation and filing, handling searches and appeals, and tax planning. Our team provides expert consultancy on international transactions, withholding taxes, and tax compliance, protecting client interests across Northern and Eastern India.",
      keyAreas: [
        "Return Preparation & Filing",
        "Representation to Various Authorities",
        "Handling Search & Seizures/Raids",
        "Filing Appeals & Replies",
        "Tax Consultancy",
        "Tax Deducted at Source (TDS)",
        "Comprehensive Tax Planning & compliances",
        "Transfer Pricing",
        "International Transactions Taxation",
        "Double Taxation Avoidance Agreements (DTAA)",
      ],
      deliverables: [
        "Certified Tax Audit Reports under Section 44AB (Form 3CA/3CB/3CD)",
        "Comprehensive Transfer Pricing Study Reports (Form 3CEB)",
        "Appellate Paper Books and Grounds of Appeal for ITAT & CIT(Appeals)",
        "Search & Raid Defense Dossiers and Assessment Rebuttals",
      ],
    },
    {
      id: "indirect-tax",
      title: "Indirect Taxes (GST, VAT & PT)",
      shortDesc:
        "We provide comprehensive indirect tax services, covering VAT, Professional Tax, Goods & service tax. Our expertise includes managing compliances, handling notices and representing clients before authorities.",
      icon: "Compass",
      image: "/services/advisory.jpg",
      highlight: true,
      badge: "Core Practice",
      fullDesc:
        "We provide comprehensive indirect tax services, covering VAT, Professional Tax, and Goods & service tax. Our expertise includes managing compliances, handling notices, defending raids, and representing clients before adjudicating and appellate authorities across India.",
      keyAreas: [
        "GST & PT comprehensive Compliances",
        "Consultancy",
        "Handling of Notices and Representation to Various Authorities",
        "Handling of Raids & Searches",
      ],
      deliverables: [
        "Legally Sound Show Cause Notice Responses & Defense Dossiers",
        "Periodic Return Compliance Verification and ITC Reconciliation Logs",
        "Written Legal Opinions on Complex Contracts and Supply Classifications",
        "Appellate Representation before GSTAT and Departmental Benches",
      ],
    },
    {
      id: "companies-act",
      title: "Companies Act & Corporate Advisory",
      shortDesc:
        "We offer a wide range of services for company formation, corporate law advisory, and ROC compliances. Our team ensures the maintenance of statutory records and adherence to corporate governance standards.",
      icon: "Landmark",
      image: "/services/due-diligence.jpg",
      highlight: true,
      badge: "Core Practice",
      fullDesc:
        "We offer a wide range of services for company formation, corporate law advisory, and ROC compliances. Our team ensures the maintenance of statutory records, seamless annual filings, and strict adherence to corporate governance standards under the Companies Act, 2013.",
      keyAreas: [
        "Company Formation",
        "Corporate Laws Advisory",
        "ROC Compliances",
        "Statutory Records Maintenance",
        "Annual Filing",
        "Corporate Governance",
      ],
      deliverables: [
        "Certificate of Incorporation, PAN, TAN & Complete Secretarial Kit",
        "Certified Annual ROC Filing Acknowledgments and Updated Registers",
        "Corporate Governance Audit Certificates and Compliance Calendars",
        "Board Resolution Drafting and Secretarial Due Diligence Reports",
      ],
    },
    {
      id: "project-reports-funding",
      title: "Project Reports & Funding",
      shortDesc:
        "We provide detailed project report preparation and coordination with banks and investors. Our services facilitate smooth project funding and effective financial management.",
      icon: "FileSpreadsheet",
      image: "/services/compliance.jpg",
      highlight: true,
      badge: "Core Practice",
      fullDesc:
        "We provide detailed project report preparation and coordination with banks and investors. Our services facilitate smooth project funding, CMA data preparation, and effective financial management for industrial expansions, commercial developments, and infrastructure ventures.",
      keyAreas: [
        "Project Report Preparation",
        "Coordination with Banks",
        "Coordination with Investors",
      ],
      deliverables: [
        "Bank-Grade Detailed Project Reports (DPR) with Sensitivity Analysis",
        "Certified CMA Data Packets and Debt-Service Coverage Projections",
        "Bank Sanction Letter Coordination and Loan Documentation Guidance",
        "Investor Pitch Decks and Enterprise Valuation Schedules",
      ],
    },
    {
      id: "other-laws",
      title: "Other Laws (FEMA & SEBI)",
      shortDesc:
        "We engage with the clients for various other Law/Rules/Regulations compliances, guidance and suggest best practises in the areas of FEMA & SEBI.",
      icon: "Scale",
      image: "/services/litigation.jpg",
      highlight: true,
      badge: "Core Practice",
      fullDesc:
        "We engage with the clients for various other Law/Rules/Regulations compliances, guidance and suggest best practises in the areas of FEMA & SEBI. Our partners advise corporate leaders on cross-border transactions, capital market regulations, and foreign exchange compliance.",
      keyAreas: [
        "Foreign Exchange Management Act (FEMA)",
        "Compliances",
        "Certification",
        "Consultancy on Various Issues",
        "Consultancy on Various International Transactions",
        "External Commercial Borrowings",
        "Foreign Direct Investments (FDIs)",
        "Securities and Exchange Board of India (SEBI)",
        "Corporate Governance",
        "Handling Initial Public Offers (IPOs)",
        "Listing/Re-listing on Stock Exchanges",
        "Delisting from Stock Exchanges",
        "Buy Backs/Right Issues/Bonus Handling",
      ],
      deliverables: [
        "FEMA Compliance Certificates & RBI Reporting Dossiers",
        "Foreign Inward Remittance Certificates (FIRC) Reconciliation",
        "SEBI Capital Market Compliance Clearances and Disclosures",
        "ECB Loan Registration (LRN) Filings & Semi-Annual RBI Returns",
      ],
    },
    {
      id: "nri-tax-services",
      title: "NRI Services & Tax Compliance (We Consult)",
      shortDesc:
        "End-to-end support for Non-Resident Indians for accurate tax filings, asset sales, and seamless fund repatriation.",
      icon: "Globe",
      image: "/services/advisory.jpg",
      fullDesc:
        "We Consult specializes in supporting Non-Resident Indians (NRIs) with NRI Tax Compliance and wealth structuring. We offer end-to-end support for accurate and timely tax filings. Whether its income earned from property, investments, capital gains, or other sources within India, our professional team ensures that all NRI Tax Matters are managed strictly according to the latest Indian tax laws. We assist NRIs in avoiding penalties, staying updated with changing tax norms, obtaining Lower TDS Certificates (Form 13), and ensuring convenient repatriation of funds (Form 15CA/15CB). With clients across the world, our personalized approach ensures peace of mind while handling different aspects of income reporting, deductions, and obedience for NRIs efficiently and securely.",
      keyAreas: [
        "Determination of Residential Status under Section 6 of the Income Tax Act & DTAA treaties",
        "Filing of NRI Income Tax Returns in India for property rental, capital gains, dividends & interest",
        "Capital Gains computation on sale of inherited property, ancestral real estate, mutual funds & shares",
        "Lower or Nil TDS Deduction Certificates from the Income Tax department (Form 13)",
        "Certification for Repatriation of Funds outside India via NRO to NRE bank accounts (Form 15CA / 15CB)",
        "Scrutiny assessment representation and handling of overseas income disclosure notices",
      ],
      deliverables: [
        "Certified Form 15CB by a Chartered Accountant for fund repatriation",
        "Approved Lower Deduction Certificates (Form 13) minimizing withholding tax",
        "Comprehensive NRI Tax Return filing receipts and capital gain statements",
        "Double Taxation Avoidance Agreement (DTAA) benefit reconciliation dossiers",
      ],
    },
    {
      id: "fcra-registration",
      title: "FCRA Registration, Prior Permission & Renewal",
      shortDesc:
        "Statutory advisory under Foreign Contribution (Regulation) Act, 2010 controlled by the Ministry of Home Affairs (MHA).",
      icon: "Landmark",
      image: "/services/due-diligence.jpg",
      fullDesc:
        "In order to regulate foreign contribution or foreign hospitality received by any individual, association, or company, the Government of India enacted the Foreign Contribution (Regulation) Act, 2010 (FCRA), administered by the Ministry of Home Affairs (MHA), New Delhi. Our team of experts ensures error-free FCRA applications that eliminate the risk of rejection or re-submission, guiding non-governmental organizations (NGOs), trusts, Section 8 companies, and charitable institutions through DARPAN portal enrollment, Form FC-3 submissions, and periodic statutory compliance.",
      keyAreas: [
        "Assessment of Eligibility Criteria: Charitable objectives (health, education, art, culture, sports)",
        "Mandatory SBI Parliament Street, New Delhi FCRA Account setup protocols",
        "Regular FCRA Registration (3 years operating, minimum ₹10 Lakh core expenditure, 3 years CA audited balance sheets)",
        "Prior Permission Route for newly setup entities with donor commitment letters",
        "Governing Council composition vetting (ensuring <49% family members and statutory independence)",
        "DARPAN ID registration on the NITI Aayog portal and online Form FC-3 filings",
        "FCRA 5-Year Validity Renewal applications (filed 6 to 12 months prior to expiry)",
        "Annual Returns (Form FC-4) and quarterly foreign receipt intimations",
      ],
      deliverables: [
        "Comprehensive FCRA Application Dossier with certified financial statements",
        "Form FC-3 / FC-3R / FC-3B filing acknowledgment from Ministry of Home Affairs",
        "SBI New Delhi FCRA Bank Account reconciliation certificates",
        "Annual FC-4 returns and chartered accountant certificates",
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
        "Litigation requires strategic acumen and mastery of statutory jurisprudence. From responding to initial departmental queries and audit summons to appearing before appellate bodies, our partners provide seasoned advocacy backed by five decades of legal research.",
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
      id: "audit-assurance",
      title: "Audit, Assurance & Due Diligence",
      shortDesc:
        "Independent statutory audits, Internal Financial Controls (IFC), forensic audits, and pre-investment diligence.",
      icon: "ShieldCheck",
      image: "/services/compliance.jpg",
      fullDesc:
        "Our Audit and Assurance practice delivers high-caliber, objective evaluations of financial statements and internal controls. Grounded in five decades of institutional rigor, we provide stakeholders, boards, and lenders with total transparency, identifying latent risks and ensuring strict compliance with Indian Accounting Standards (Ind AS), Companies Act, 2013, and statutory frameworks.",
      keyAreas: [
        "Statutory Audits under the Companies Act, 2013 for private and public enterprises",
        "Internal Financial Controls Over Financial Reporting (IFC-FR) assessment",
        "Internal Audits, Management Audits, and Operational Process Reviews",
        "Tax Audits under Section 44AB and GST Annual Audits (GSTR-9/9C)",
        "Pre-acquisition financial, tax, and legal due diligence for M&A transactions",
        "Bank concurrent audits, stock audits, and revenue leakage detection",
      ],
      deliverables: [
        "Independent Auditor's Report with detailed statutory disclosures",
        "Internal Controls & Management Letter highlighting process vulnerabilities",
        "Comprehensive Due Diligence Dossier with financial impact quantification",
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
        "Routine compliance failure can lead to severe ITC blockages and punitive interest. We ensure rigorous verification of monthly outward and inward data, automated reconciliation with GSTR-2B, and timely filing across all states.",
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
  ],

  publications: [
    {
      id: "gco-connect-latest",
      title: "GCo Connect — Monthly Comprehensive Tax Bulletin",
      category: "GCo Connect" as const,
      date: "Current Edition",
      summary:
        "In-depth analysis of recent High Court judgments, Supreme Court rulings on Input Tax Credit restrictions, direct tax assessments, and statutory compliance calendar for corporate taxpayers.",
      tag: "Monthly Bulletin",
    },
    {
      id: "nri-taxation-guide",
      title: "Comprehensive Guide to NRI Income Tax, TDS & Fund Repatriation (15CA/CB)",
      category: "Statute Guide" as const,
      date: "Special Advisory",
      summary:
        "Detailed breakdown of capital gains on property sales by NRIs, Lower TDS certificates under Section 197, and the latest FEMA guidelines for fund repatriation.",
      tag: "NRI Tax Guide",
    },
    {
      id: "fcra-statutory-compliance",
      title: "FCRA 2010 Compliance Handbook for NGOs, Section 8 Companies & Trusts",
      category: "Research" as const,
      date: "Authored Reference",
      summary:
        "Step-by-step procedural manual on DARPAN portal enrollment, MHA Form FC-3 registrations, Prior Permission norms, and SBI Parliament Street account management.",
      tag: "FCRA Manual",
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
    // High-Resolution Sector Practice Footprint (AI Visuals First)
    {
      id: "gal-ind-1",
      title: "Real Estate & Infrastructure Development",
      category: "Real Estate & Infra",
      imageUrl: "/gallery/real-estate.jpg",
      description: "On-site advisory for joint development agreements (JDA), construction ITC claims, and RERA-GST harmonization.",
    },
    {
      id: "gal-ind-2",
      title: "Information Technology & Software Workspaces",
      category: "IT & Corporate",
      imageUrl: "/gallery/it-workspace.jpg",
      description: "Specialized export of software services advisory, LUT filings, and zero-rated supply compliance for tech firms.",
    },
    {
      id: "gal-ind-3",
      title: "Commercial Towers & Special Economic Zones",
      category: "Real Estate & Infra",
      imageUrl: "/gallery/commercial-skyline.jpg",
      description: "SEZ unit tax exemptions, DTA sales structuring, and commercial leasing GST optimization.",
    },
    {
      id: "gal-ind-4",
      title: "BPO & Global In-House Service Centers",
      category: "IT & Corporate",
      imageUrl: "/gallery/bpo-operations.jpg",
      description: "Cross-border service structuring, transfer pricing tax synergies, and input credit optimization for BPO leaders.",
    },
    {
      id: "gal-ind-5",
      title: "Automated Warehousing & Supply Chain Logistics",
      category: "Logistics & Trade",
      imageUrl: "/gallery/logistics-warehousing.jpg",
      description: "Multi-state warehousing networks, E-Way Bill automation, and hub-and-spoke inventory tax models.",
    },
    {
      id: "gal-ind-6",
      title: "Capital Markets & Financial Analytics",
      category: "BFSI & Finance",
      imageUrl: "/gallery/capital-markets.jpg",
      description: "Complex tax counsel for securities trading, brokerage transactions, derivative contracts, and NBFC compliance.",
    },
    {
      id: "gal-ind-7",
      title: "Maritime Shipping & Cross-Border Customs",
      category: "Logistics & Trade",
      imageUrl: "/gallery/customs-shipping.jpg",
      description: "Port clearance advisory, ocean freight IGST litigation, and Free Trade Agreement (FTA) duty optimization.",
    },
    {
      id: "gal-ind-8",
      title: "Global Multimodal Freight & Cargo Distribution",
      category: "Logistics & Trade",
      imageUrl: "/gallery/global-freight.jpg",
      description: "Integrated air and sea freight logistics tax structures, container freight stations, and multimodal tax filings.",
    },
    {
      id: "gal-ind-9",
      title: "Healthcare, Lifesciences & Pharmaceuticals",
      category: "Healthcare & Pharma",
      imageUrl: "/gallery/healthcare-pharma.jpg",
      description: "Navigating inverted duty structures, medicine rate rationalization, and clinical healthcare exemptions.",
    },
    {
      id: "gal-ind-10",
      title: "Heavy Manufacturing & Industrial Engineering",
      category: "Manufacturing",
      imageUrl: "/gallery/manufacturing.jpg",
      description: "Capital goods tax optimization, EPC contract tax structuring, and transitional credit defense for manufacturers.",
    },
    {
      id: "gal-ind-11",
      title: "Institutional Banking Headquarters & Central Financial Hubs",
      category: "BFSI & Finance",
      imageUrl: "/gallery/banking-institution.jpg",
      description: "Indirect tax advisory for scheduled commercial banks, financial institutions, and NBFC consortiums on loan syndication, interest margins, and transactional GST.",
    },
    {
      id: "gal-ind-12",
      title: "Luxury 5-Star Hospitality, Hotels & Tourism Consortia",
      category: "Hospitality & Tourism",
      imageUrl: "/gallery/hospitality-retail.jpg",
      description: "Structuring GST for premium hospitality chains, multi-tier room tariff taxations, banqueting services, composite supply determinations, and luxury leisure operations.",
    },

    // Authentic Firm Real Photos (pic 1 to pic1 (13))
    {
      id: "gal-real-1",
      title: "Headquarters Chambers & Legal Archive Library",
      category: "Firm Chambers & Library",
      imageUrl: "/gallery/pic 1.jpeg",
      description: "Extensive taxation treatise, Supreme Court case law reporters, and five decades of statutory archives in the firm's central research chambers.",
    },
    {
      id: "gal-real-2",
      title: "Senior Partners Technical Conference & Legal Briefing",
      category: "Executive Meetings",
      imageUrl: "/gallery/pic1 (1).jpeg",
      description: "Partners and legal associates deliberating on complex tax jurisprudence, appellate strategy, and upcoming tribunal hearings.",
    },
    {
      id: "gal-real-3",
      title: "Tax Jurisprudence Research & Precedent Analysis",
      category: "Tax Seminars & Training",
      imageUrl: "/gallery/pic1 (2).jpeg",
      description: "Dedicated research session examining recent High Court rulings, constitutional tax challenges, and departmental circulars.",
    },
    {
      id: "gal-real-4",
      title: "Executive Partner Deliberation Suite & Advisory Desk",
      category: "Firm Chambers & Library",
      imageUrl: "/gallery/pic1 (3).jpeg",
      description: "The firm's executive partner chambers configured for confidential client consultations, high-stakes negotiations, and statutory reviews.",
    },
    {
      id: "gal-real-5",
      title: "Supreme Court & Tribunal Law Reporters Repository",
      category: "Firm Chambers & Library",
      imageUrl: "/gallery/pic1 (4).jpeg",
      description: "Rich legal library housing comprehensive historical volumes of GST, Excise, Service Tax, and Direct Tax judicial precedents.",
    },
    {
      id: "gal-real-6",
      title: "Boardroom Technical Consultation & Client Presentation",
      category: "Executive Meetings",
      imageUrl: "/gallery/pic1 (5).jpeg",
      description: "Presenting boardroom-grade tax structuring and ERP harmonization roadmaps to corporate directors and finance heads.",
    },
    {
      id: "gal-real-7",
      title: "Appellate Briefing & Show Cause Notice Scrutiny",
      category: "Executive Meetings",
      imageUrl: "/gallery/pic1 (6).jpeg",
      description: "Careful examination of departmental audit queries and drafting of bulletproof evidentiary submissions for appellate representation.",
    },
    {
      id: "gal-real-8",
      title: "Professional Team Collaboration & Tax Health Review",
      category: "Team & Celebrations",
      imageUrl: "/gallery/pic1 (7).jpeg",
      description: "The M B Gabhawala & Co. professional team executing multi-state GST reconciliations and annual audit filings.",
    },
    {
      id: "gal-real-9",
      title: "Firm Milestone Assembly & Team Gathering",
      category: "Team & Celebrations",
      imageUrl: "/gallery/pic1 (8).jpeg",
      description: "Celebrating decades of practice legacy and recognizing the outstanding dedication of our Chartered Accountants and staff.",
    },
    {
      id: "gal-real-10",
      title: "Chambers Working Session & Case File Due Diligence",
      category: "Firm Chambers & Library",
      imageUrl: "/gallery/pic1 (9).jpeg",
      description: "Deep-dive diagnostic analysis into corporate accounting ledgers, purchase registers, and input tax credit reconciliations.",
    },
    {
      id: "gal-real-11",
      title: "Technical Tax Advisory & Pre-Budget Discussion",
      category: "Tax Seminars & Training",
      imageUrl: "/gallery/pic1 (10).jpeg",
      description: "Partners and senior tax professionals analyzing Finance Bill amendments, rate rationalization, and statutory compliance updates.",
    },
    {
      id: "gal-real-12",
      title: "Partners Strategy Assembly & Nationwide Branch Coordination",
      category: "Executive Meetings",
      imageUrl: "/gallery/pic1 (11).jpeg",
      description: "Synchronizing practice operations across Varanasi HQ, Kolkata, Mumbai, Gurugram, Katihar, Sonebhadra, and Assam.",
    },
    {
      id: "gal-real-13",
      title: "Annual Firm Felicitation & Leadership Address",
      category: "Team & Celebrations",
      imageUrl: "/gallery/pic1 (12).jpeg",
      description: "Commemorating organizational growth, ethical excellence, and our lifelong commitment to client success.",
    },
    {
      id: "gal-real-14",
      title: "Chartered Accountants Knowledge Exchange Forum",
      category: "Tax Seminars & Training",
      imageUrl: "/gallery/pic1 (13).jpeg",
      description: "Participating in institutional tax seminars, professional development sessions, and national accountancy symposiums.",
    },
  ],

  faqs: [
    {
      question: "What are the core specializations of M B Gabhawala & Co.?",
      answer:
        "The firm specializes in Indian Direct & Indirect Taxation—specifically Goods & Services Tax (GST), Income Tax, Customs, Foreign Trade Policy, NRI Tax Compliance & Repatriation (Form 15CA/CB), FCRA Certifications, Statutory Audits, and appellate litigation before the GSTAT, ITAT, and High Courts.",
    },
    {
      question: "Where are M B Gabhawala & Co.'s headquarters and branch offices located?",
      answer:
        "The firm is headquartered in Varanasi (UP) at Shobha Shree, 3 Surya Nagar, Guru Bagh, Luxa - 221010. We operate full-fledged corporate and appellate chambers in Kolkata (Chinar Park), alongside branches in Gurugram (Haryana), Mumbai (Maharashtra), Katihar (Bihar), Sonebhadra (UP), and Bongaigaon (Assam).",
    },
    {
      question: "How long has M B Gabhawala & Co. been in practice?",
      answer:
        "M B Gabhawala & Co. has a distinguished practice legacy established since 1975 (~50 years / five decades of professional excellence), serving corporate conglomerates, NRIs, and institutional clients across India.",
    },
    {
      question: "How does the firm support Non-Resident Indians (NRIs) with tax matters?",
      answer:
        "Through our dedicated We Consult NRI practice, we handle residential status determination, capital gains computation on Indian property sales, Lower TDS certificates (Form 13), end-to-end tax filing, and chartered accountant certification for foreign repatriation of funds (Form 15CA/15CB).",
    },
    {
      question: "What support does the firm provide for FCRA Registration and Renewal?",
      answer:
        "We assist charitable trusts, societies, and Section 8 companies with DARPAN ID registration, online Form FC-3 filings with the Ministry of Home Affairs (MHA), New Delhi, setup of SBI Parliament Street FCRA accounts, Prior Permission documentation, and 5-year statutory renewal filings.",
    },
    {
      question: "How does the firm support clients facing tax audits or Show Cause Notices?",
      answer:
        "We manage the entire lifecycle of contentious tax proceedings: from handling inquiry notices and DGGI/IT summons with factual accuracy, to drafting rigorous legal replies to Show Cause Notices, and appearing directly before Adjudicating Authorities, First Appellate Authorities, GSTAT, and ITAT benches.",
    },
  ],
};
