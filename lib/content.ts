export const services = [
  {
    number: "01",
    verb: "ATTRACT",
    title: "Lead generation & customer acquisition",
    shortTitle: "Lead generation",
    description:
      "Find the businesses and decision-makers worth reaching. We research the market, build focused prospect lists, and create structured outreach that turns the right conversations into sales opportunities.",
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
      "Launch a website that earns attention, builds trust and makes it easy for customers to take the next step. From polished business websites to custom web applications, we build around your customer journey.",
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
      "Put repetitive work on autopilot. We connect your tools, streamline hand-offs and build practical AI-powered workflows that give your team more time for customers and growth.",
    tags: ["AI workflows", "CRM automation", "Integrations"],
    href: "/services/ai-automation",
    cta: "Explore automation",
    featured: false,
  },
] as const;

export const approachSteps = [
  { number: "01", title: "Discover", copy: "We get clear on your offer, customers, market and the outcome that matters most." },
  { number: "02", title: "Strategise", copy: "We turn the brief into a focused plan, a clear scope and the right delivery approach." },
  { number: "03", title: "Create", copy: "We design and build the website, campaign or system with your customers in mind." },
  { number: "04", title: "Connect", copy: "We connect the tools, data and workflows so the pieces work together." },
  { number: "05", title: "Launch", copy: "We test the experience, refine the details and launch with confidence." },
  { number: "06", title: "Evolve", copy: "We measure what matters, improve what can perform better and support your next stage." },
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
  { title: "Mountain Lodge", category: "HOSPITALITY WEBSITE", detail: "A destination-led lodge experience: discover the setting, explore accommodation and move naturally towards an enquiry.", url: "https://mountain-lodge-demo-beta.vercel.app/", label: "Explore lodge concept" },
  { title: "Personal Stylist & Shopper", category: "PERSONAL BRAND / SERVICES", detail: "An editorial service experience that makes the offer clear, builds confidence and invites visitors to book a personal consultation.", url: "https://personal-stylist-shopper-demo.vercel.app/", label: "Explore stylist concept" },
  { title: "NPP Roofing & Restoration", category: "LEAD GENERATION CAMPAIGN", detail: "A focused roofing and restoration campaign built to turn local demand into qualified enquiries, service selection and inspection opportunities.", url: "https://npp-campaign-showcase.vercel.app/", label: "View NPP campaign", journey: ["Discover", "Choose a service", "Send an enquiry", "Qualify the opportunity", "Book an inspection"], services: ["Roofing and restoration", "Storm damage", "Inspection requests"] },
  { title: "G&I Construction", category: "CONSTRUCTION WEBSITE", detail: "A professional construction presence that presents services, showcases project capability and makes requesting a quote straightforward.", url: "https://gi-construction-demo.vercel.app/", label: "Explore construction concept" },
  { title: "Hair Salon", category: "BEAUTY / BOOKING", detail: "A modern salon website focused on service discovery, appointment intent and simple customer contact.", url: "https://hair-salon-demo-phi.vercel.app/", label: "Explore salon concept" },
  { title: "Manna & Quail", category: "FOOD / BAKERY BRAND", detail: "A product-first bakery and sweet-treats experience designed to make the range look irresistible and guide visitors to social channels and enquiries.", url: "https://manna-quail-brackenfell.vercel.app/", label: "Explore Manna & Quail" },
  { title: "DMH", category: "BUSINESS WEBSITE CONCEPT", detail: "A tailored business website direction with a strong visual introduction, clear positioning and purposeful calls to action.", url: "https://summitleadsltd.com/dmh", label: "Explore DMH concept" },
  { title: "Atlas AI OS", category: "AI-POWERED RESTORATION SOFTWARE", detail: "An AI operating system for insurance restoration contractors, connecting claim documentation, evidence review, supplement preparation and revenue recovery in one workflow.", url: "https://atlas-ai-os.com/", label: "Explore Atlas AI OS", journey: ["Organise claim files", "Review evidence", "Identify recovery opportunities", "Prepare supplements"], services: ["AI claim intelligence", "Evidence management", "Revenue recovery"] },
] as const;
