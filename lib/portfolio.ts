interface PortfolioItem {
  id: string
  title: string
  description: string
  longDescription: string
  image: string
  images: string[]
  technologies: string[]
  category: string
  featured: boolean
  demoUrl?: string
  githubUrl?: string
  duration: string
  teamSize: string
  role: string
  challenges: string[]
  solutions: string[]
}

const portfolioItems: PortfolioItem[] = [
  {
    id: "xlsatu-onboarding-website",
    title: "XLSATU Web",
    description:
      "A comprehensive marketplace platform connecting buyers and sellers with advanced features like real-time chat, payment processing, and inventory management.",
    longDescription:
      "Built a full-featured e-commerce marketplace platform that handles thousands of transactions daily. The platform includes vendor management, product catalog, order processing, payment integration, and real-time analytics dashboard.",
    image: "/xlsmart-logo.png?height=400&width=600",
    images: [
      "/xlsmart-logo.png?height=400&width=600",
      "/xlsmart-logo.png?height=400&width=600",
      "/xlsmart-logo.png?height=400&width=600",
    ],
    technologies: ["Go", "Fiber", "MySQL", "Redis", "AWS"],
    category: "Telecommunications",
    featured: true,
    demoUrl: "https://satu.xl.co.id",
    duration: "3 months",
    teamSize: "4 developers (1 Middleware, 2 Frontend, 1 CMS)",
    role: "Middleware Developer",
    challenges: [
      "Handling high-volume transactions with real-time inventory updates",
      "Implementing complex vendor commission calculations",
      "Ensuring PCI compliance for payment processing",
      "Building scalable search and filtering system",
    ],
    solutions: [
      "Implemented event-driven architecture with Redis for real-time updates",
      "Created automated commission calculation system with audit trails",
      "Integrated Stripe Connect for secure payment processing",
      "Built Elasticsearch-powered search with advanced filtering capabilities",
    ],
  },
  {
    id: "xlsmart-company-website",
    title: "XLSMART",
    description: "Real-time streaming platform with chat, donations, and analytics for content creators and viewers.",
    longDescription:
      "Developed a comprehensive live streaming platform that supports HD video streaming, real-time chat, virtual gifts, and detailed analytics for streamers. The platform handles thousands of concurrent viewers with low latency.",
    image: "/xlsmart-logo.png?height=400&width=600",
    images: ["/xlsmart-logo.png?height=400&width=600", "/xlsmart-logo.png?height=400&width=600"],
    technologies: ["Go", "Fiber", "MySQL", "Redis", "AWS"],
    category: "Telecommunications",
    featured: true,
    duration: "3 months",
    teamSize: "4 developers (1 Middleware, 2 Frontend, 1 CMS)",
    role: "Middleware Developer",
    challenges: [
      "Achieving low-latency streaming for global audience",
      "Handling real-time chat with thousands of concurrent users",
      "Implementing scalable video transcoding pipeline",
      "Building robust monetization system",
    ],
    solutions: [
      "Implemented WebRTC with global CDN distribution",
      "Built horizontally scalable chat system using Go and WebSockets",
      "Created automated video transcoding pipeline with AWS Media Services",
      "Developed flexible virtual currency and donation system",
    ],
  },
  {
    id: "masjiqu-app",
    title: "MasjidQu App",
    description:
      "Sharia-compliant financial application offering Islamic banking services, investment tracking, and zakat calculations.",
    longDescription:
      "Created a comprehensive Islamic fintech application that provides Sharia-compliant banking services, investment portfolio management, automated zakat calculations, and Islamic financial education resources.",
    image: "/xlsmart-logo.png?height=400&width=600",
    images: ["/xlsmart-logo.png?height=400&width=600", "/xlsmart-logo.png?height=400&width=600"],
    technologies: ["Laravel", "Vue.js", "MySQL", "Docker", "AWS", "Islamic Banking APIs"],
    category: "Sharia",
    featured: true,
    duration: "6 months",
    teamSize: "6 developers (3 Backend, 2 Mobile, 1 Frontend)",
    role: "Backend Developer",
    challenges: [
      "Ensuring Sharia compliance in all financial calculations",
      "Integrating with Islamic banking APIs",
      "Building complex zakat calculation algorithms",
      "Implementing secure financial data handling",
    ],
    solutions: [
      "Collaborated with Islamic scholars to validate all financial logic",
      "Built robust API integration layer with fallback mechanisms",
      "Developed automated zakat calculation engine with multiple methodologies",
      "Implemented end-to-end encryption for sensitive financial data",
    ],
  },
  {
    id: "aladinmall-marketplace",
    title: "AladinMall Marketplace",
    description:
      "High-performance API serving real-time sports data to mobile apps and websites with sub-second latency.",
    longDescription:
      "Built a high-performance sports data API that aggregates and serves real-time scores, statistics, and match information from multiple sports leagues. The system handles millions of requests daily with sub-second response times.",
    image: "/aladinmall.webp",
    images: ["/aladinmall.webp", "/aladinmall.webp", "/aladinmall.webp"],
    technologies: ["Go", "Redis", "PostgreSQL", "Docker", "Kubernetes", "Prometheus", "Grafana"],
    category: "Marketplace",
    featured: true,
    duration: "10 months",
    teamSize: "10 developers (5 Backend, 1 Mobile, 4 Frontend)",
    role: "Backend Developer",
    challenges: [
      "Handling millions of API requests with low latency",
      "Aggregating data from multiple unreliable sources",
      "Ensuring data consistency across different sports",
      "Building scalable caching strategy",
    ],
    solutions: [
      "Implemented multi-layer caching with Redis and in-memory stores",
      "Built resilient data aggregation pipeline with retry mechanisms",
      "Created unified data model for different sports types",
      "Developed intelligent cache invalidation based on match events",
    ],
  },
  {
    id: "wika-gedung-investor-portal",
    title: "Wika Gedung Investor Portal",
    description:
      "Comprehensive portal for public companies to manage investor communications, financial reports, and shareholder information.",
    longDescription:
      "Developed a complete investor relations management system that helps public companies manage shareholder communications, publish financial reports, handle investor inquiries, and maintain regulatory compliance.",
    image: "/wikagedung.png",
    images: ["/wikagedung.png", "/wikagedung.png", "/wikagedung.png"],
    technologies: ["PHP", "Laravel", "MySQL", "Vue.js", "AWS S3", "PDF Generation"],
    category: "Enterprise",
    featured: false,
    duration: "5 months",
    teamSize: "2 developers (1 Backend & CMS, 1 Frontend)",
    role: "Backend & CMS Developer",
    challenges: [
      "Ensuring regulatory compliance for financial disclosures",
      "Building secure document management system",
      "Implementing complex user permission system",
      "Creating automated report generation workflows",
    ],
    solutions: [
      "Implemented comprehensive audit trail for all financial disclosures",
      "Built secure document storage with encryption and access controls",
      "Developed role-based permission system with granular controls",
      "Created automated PDF generation system with custom templates",
    ],
  },
  {
    id: "payment-gateway-integration",
    title: "Multi-Gateway Payment System",
    description:
      "Unified payment processing system supporting multiple payment gateways with automatic failover and fraud detection.",
    longDescription:
      "Built a comprehensive payment processing system that integrates with multiple payment gateways, provides automatic failover, fraud detection, and detailed transaction analytics. The system processes thousands of transactions daily across different payment methods.",
    image: "/xlsmart-logo.png?height=400&width=600",
    images: ["/xlsmart-logo.png?height=400&width=600"],
    technologies: ["Node.js", "Express", "MongoDB", "Redis", "Stripe", "PayPal", "AWS Lambda"],
    category: "Fintech",
    featured: false,
    duration: "5 months",
    teamSize: "4 developers",
    role: "Lead Backend Developer",
    challenges: [
      "Integrating with multiple payment providers with different APIs",
      "Implementing automatic failover between gateways",
      "Building real-time fraud detection system",
      "Ensuring PCI DSS compliance",
    ],
    solutions: [
      "Created unified payment abstraction layer for different gateways",
      "Implemented intelligent routing with health checks and failover",
      "Built machine learning-based fraud detection using transaction patterns",
      "Achieved PCI DSS Level 1 compliance with comprehensive security measures",
    ],
  },
]

export async function getPortfolioItems(): Promise<PortfolioItem[]> {
  // In a real application, this might fetch from a database or CMS
  return portfolioItems
}

export async function getPortfolioItem(id: string): Promise<PortfolioItem | null> {
  // In a real application, this might fetch from a database or CMS
  return portfolioItems.find((item) => item.id === id) || null
}
