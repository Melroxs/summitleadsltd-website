export const services = [
  {
    number: "01",
    verb: "ATTRACT",
    title: "Lead generation & customer acquisition",
    shortTitle: "Lead generation",
    description:
      "Reach the right people, create qualified conversations, and build a more consistent path from attention to opportunity.",
    tags: ["B2B prospecting", "Lead capture", "Outreach systems"],
    href: "/services/lead-generation",
    cta: "Explore lead generation",
    featured: true,
  },
  {
    number: "02",
    verb: "BUILD",
    title: "Website & application development",
    shortTitle: "Digital development",
    description:
      "Build digital experiences that establish credibility, explain your value, and make the next step obvious.",
    tags: ["Business websites", "Web applications", "Customer portals"],
    href: "/services/web-development",
    cta: "Explore development",
    featured: false,
  },
  {
    number: "03",
    verb: "AUTOMATE",
    title: "AI automation & business systems",
    shortTitle: "AI automation",
    description:
      "Connect everyday tools, reduce repetitive work, and make important business processes easier to scale.",
    tags: ["AI workflows", "CRM automation", "Integrations"],
    href: "/services/ai-automation",
    cta: "Explore automation",
    featured: false,
  },
] as const;

export const approachSteps = [
  { number: "01", title: "Discover", copy: "Understand the business, market, objectives, and challenges before proposing a solution." },
  { number: "02", title: "Strategise", copy: "Define the scope, architecture, and implementation approach around a clear commercial goal." },
  { number: "03", title: "Create", copy: "Design and develop the digital experience or system your business needs." },
  { number: "04", title: "Connect", copy: "Integrate the platforms, tools, and workflows that make the system useful." },
  { number: "05", title: "Launch", copy: "Deploy, test, and prepare the solution for real-world use." },
  { number: "06", title: "Evolve", copy: "Improve, optimise, and support the system as your business grows." },
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
  "Corporate and professional business websites",
  "High-converting landing pages",
  "E-commerce platforms",
  "Custom web applications",
  "Customer portals and booking platforms",
  "CRM systems and business dashboards",
  "Website redesign, optimisation, maintenance, and support",
] as const;

export const automationServices = [
  "AI-powered workflows",
  "AI customer support assistants",
  "Automated enquiry handling",
  "Intelligent appointment scheduling",
  "Automated lead qualification",
  "CRM automation",
  "Business process automation",
  "Custom AI integrations",
  "Operational dashboards",
  "Intelligent communication systems",
] as const;


export const portfolioProjects = [
  { title: "Mountain Lodge", category: "HOSPITALITY WEBSITE", detail: "Premium lodge experience with destination storytelling, accommodation discovery and enquiry-led guest journeys.", url: "https://mountain-lodge-demo-wprxt3am4-melroxs-projects.vercel.app/", label: "Explore lodge concept" },
  { title: "Personal Stylist & Shopper", category: "PERSONAL BRAND / SERVICES", detail: "Editorial-style personal shopping experience designed around service discovery, style confidence and consultation enquiries.", url: "https://personal-stylist-shopper-demo-orl1ra43m-melroxs-projects.vercel.app/", label: "Explore stylist concept" },
  { title: "NPP Roofing & Restoration", category: "LEAD GENERATION JOURNEY", detail: "A roofing and restoration customer journey connecting service selection, enquiry capture, ZIP qualification and inspection booking.", url: "https://summit-leads-website-portfolio.vercel.app/", label: "Explore NPP journey", journey: ["Discover", "Choose a service need", "Enquire", "Qualify and follow up", "Book an inspection"], services: ["Preventative roof inspections", "Storm damage and restoration", "Roof repairs and maintenance"] },
  { title: "G&I Construction", category: "CONSTRUCTION WEBSITE", detail: "Corporate construction concept with service presentation, project portfolio and quote-request journey.", url: "https://gi-construction-demo-r5eldwu8m-melroxs-projects.vercel.app/", label: "Explore construction concept" },
  { title: "Hair Salon", category: "BEAUTY / BOOKING", detail: "Modern salon concept focused on service discovery, appointment intent and direct customer contact.", url: "https://hair-salon-demo-irz848ivx-melroxs-projects.vercel.app/", label: "Explore salon concept" },
  { title: "Manna & Quail", category: "FOOD / BAKERY BRAND", detail: "Sweet treats and bakery brand experience with product-led visuals and social-first customer discovery.", url: "https://manna-quail-brackenfell.vercel.app/", label: "Explore Manna & Quail" },
  { title: "Azure Hair Professionals", category: "SALON BRAND CONCEPT", detail: "Polished beauty brand concept with clear service positioning and enquiry pathways.", url: "https://summit-local-beauty-demos.vercel.app/azure", label: "Explore Azure concept" },
  { title: "Salt", category: "BEAUTY BRAND CONCEPT", detail: "A refined visual direction for a contemporary beauty and lifestyle business.", url: "https://summit-local-beauty-demos.vercel.app/salt", label: "Explore Salt concept" },
  { title: "Illumine", category: "WELLNESS BRAND CONCEPT", detail: "A calm, modern digital identity and customer experience concept.", url: "https://summit-local-beauty-demos.vercel.app/illumine", label: "Explore Illumine concept" },
  { title: "Timeless", category: "BEAUTY BRAND CONCEPT", detail: "An elegant brand-led website direction with a premium service presentation.", url: "https://summit-local-beauty-demos.vercel.app/timeless", label: "Explore Timeless concept" },
  { title: "DMH", category: "BUSINESS WEBSITE CONCEPT", detail: "A tailored business website concept with a strong hero presentation and direct enquiry calls to action.", url: "https://summit-local-beauty-demos.vercel.app/dmh", label: "Explore DMH concept" },
  { title: "Local Business Demo Collection", category: "MULTI-BRAND SHOWCASE", detail: "Explore the wider collection of local-business website concepts in one place.", url: "https://summit-local-beauty-demos.vercel.app/", label: "Explore all local demos" },
] as const;
