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
