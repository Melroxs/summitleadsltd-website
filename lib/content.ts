export const services = [
  {
    number: "01",
    verb: "ATTRACT",
    title: "Lead generation & sales enablement",
    shortTitle: "Lead generation",
    description:
      "Reach the organisations and decision-makers that fit your offer. We support targeted prospect research, structured outreach, lead capture and sales workflows that help turn relevant conversations into opportunities.",
    tags: ["B2B prospecting", "Outreach systems", "Sales workflows"],
    href: "/services/lead-generation",
    cta: "Explore lead generation",
    featured: true,
  },
  {
    number: "02",
    verb: "BUILD",
    title: "Software & custom application development",
    shortTitle: "Software development",
    description:
      "Build more than a brochure website. We scope and develop business websites, custom web applications, customer portals, booking platforms, CRM systems and operational dashboards around the way your business works.",
    tags: ["Custom web applications", "CRM & dashboards", "Portals & platforms"],
    href: "/services/web-development",
    cta: "Explore software development",
    featured: false,
  },
  {
    number: "03",
    verb: "CONNECT",
    title: "Technology solutions, integrations & AI",
    shortTitle: "Technology solutions",
    description:
      "Make your technology work together. We help assess and connect APIs, databases, cloud hosting, deployment environments and business tools, then apply practical AI and automation where it improves the workflow.",
    tags: ["API & database integration", "Cloud & deployment", "AI & automation"],
    href: "/services/ai-automation",
    cta: "Explore technology solutions",
    featured: false,
  },
] as const;

export const approachSteps = [
  { number: "01", title: "Discover", copy: "We get clear on your offer, customers, market, existing systems and the outcome that matters most." },
  { number: "02", title: "Assess", copy: "We review the requirements and current environment, identify dependencies and agree a realistic scope." },
  { number: "03", title: "Design", copy: "We shape the customer experience, technical approach and delivery plan around the business need." },
  { number: "04", title: "Build & connect", copy: "We develop the website, application or workflow and connect the tools, data and services it needs." },
  { number: "05", title: "Test & launch", copy: "We verify the experience, resolve issues and prepare the agreed solution for launch." },
  { number: "06", title: "Support & evolve", copy: "We document the handover, support the next stage and refine the solution as needs change." },
] as const;

export const ecosystemSteps = [
  { title: "Visibility", detail: "Make the business easier for the right audience to discover." },
  { title: "Lead generation", detail: "Identify likely customers and create a clear path to enquire." },
  { title: "Digital experience", detail: "Give prospects a credible, useful place to understand the offer." },
  { title: "Customer enquiries", detail: "Capture intent in a structured, actionable way." },
  { title: "CRM & automation", detail: "Connect people, records, and follow-up workflows." },
  { title: "Follow-up & conversion", detail: "Help teams respond consistently and progress opportunities." },
  { title: "Business growth", detail: "Build a connected foundation that can be refined over time." },
] as const;

export const conceptDemos = [
  { title: "Corporate experience", category: "BUSINESS WEBSITE", detail: "Conceptual homepage for a premium professional-services brand." },
  { title: "Booking platform", category: "DIGITAL SERVICE", detail: "Conceptual scheduling flow with clear service and appointment steps." },
  { title: "Commerce interface", category: "E-COMMERCE", detail: "Conceptual product catalogue and checkout direction." },
  { title: "Business dashboard", category: "ANALYTICS", detail: "Conceptual operating view for enquiries, pipeline, and activity." },
  { title: "Customer portal", category: "WEB APPLICATION", detail: "Conceptual secure client workspace and project status view." },
] as const;

export const leadGenerationServices = [
  "B2B lead generation",
  "Targeted prospect research",
  "Business database development",
  "Industry-specific prospecting",
  "Outreach campaign setup",
  "Appointment-setting systems",
  "Lead capture and qualification",
  "CRM pipeline integration",
  "Automated follow-up",
] as const;

export const webDevelopmentServices = [
  "Custom web application development",
  "Corporate and professional business websites",
  "High-converting landing pages",
  "Customer portals and booking platforms",
  "CRM systems and sales platforms",
  "Operational dashboards and admin interfaces",
  "Database-backed applications and API integrations",
  "Website redesign, optimisation, maintenance, and support",
] as const;

export const automationServices = [
  "Technology and infrastructure assessment",
  "API and third-party platform integrations",
  "Database architecture and data-flow integration",
  "Cloud hosting and deployment configuration",
  "Authentication and access-control integration",
  "AI-powered workflows and assistants",
  "Automated enquiry handling and lead qualification",
  "Intelligent appointment scheduling",
  "CRM and business process automation",
  "Operational dashboards and system monitoring",
  "Technical documentation and handover support",
] as const;

export const portfolioProjects = [
  { title: "Mountain Lodge", category: "HOSPITALITY WEBSITE", detail: "A destination-led lodge experience: discover the setting, explore accommodation and move naturally towards an enquiry.", url: "https://mountain-lodge-demo-beta.vercel.app/", label: "Explore lodge concept" },
  { title: "Personal Stylist & Shopper", category: "PERSONAL BRAND / SERVICES", detail: "An editorial service experience that makes the offer clear, builds confidence and invites visitors to book a personal consultation.", url: "https://personal-stylist-shopper-demo.vercel.app/", label: "Explore stylist concept" },
  { title: "NPP Roofing & Restoration", category: "LEAD GENERATION CAMPAIGN", detail: "A focused roofing and restoration campaign built to turn local demand into qualified enquiries, service selection and inspection opportunities.", url: "https://npp-campaign-showcase.vercel.app/", label: "View NPP campaign", journey: ["Discover", "Choose a service", "Send an enquiry", "Qualify the opportunity", "Book an inspection"], services: ["Roofing and restoration", "Storm damage", "Inspection requests"] },
  { title: "G&I Construction", category: "CONSTRUCTION WEBSITE", detail: "A professional construction presence that presents services, showcases project capability and makes requesting a quote straightforward.", url: "https://gi-construction-demo.vercel.app/", label: "Explore construction concept" },
  { title: "Hair Salon", category: "BEAUTY / BOOKING", detail: "A modern salon website focused on service discovery, appointment intent and simple customer contact.", url: "https://hair-salon-demo-phi.vercel.app/", label: "Explore salon concept" },
  { title: "Manna & Quail", category: "FOOD / BAKERY BRAND", detail: "A product-first bakery and sweet-treats experience designed to make the range look irresistible and guide visitors to social channels and enquiries.", url: "https://manna-quail-brackenfell.vercel.app/", label: "Explore Manna & Quail" },
  { title: "Atlas AI OS", category: "AI-POWERED RESTORATION SOFTWARE", detail: "An AI operating system for insurance restoration contractors, connecting claim documentation, evidence review, supplement preparation and revenue recovery in one workflow.", url: "https://atlas-ai-os.com/", thumbnail: "/images/atlas-command-center.png", label: "Explore Atlas AI OS", journey: ["Organise claim files", "Review evidence", "Identify recovery opportunities", "Prepare supplements"], services: ["AI claim intelligence", "Evidence management", "Revenue recovery"] },
] as const;
