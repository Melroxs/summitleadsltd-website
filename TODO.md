# TODO — Summit Leads non-production prototype

## Brand positioning, identity, and hero
- [x] Present Summit Leads Ltd as a digital growth and technology partner, not a cheap web-design agency, generic marketing company, or ordinary SaaS landing page.
- [x] Communicate the positioning “Your Digital Growth Partner. From Visibility to Revenue.” and the brand promise “Build Your Presence. Generate Opportunities. Engineer Growth.”
- [x] Use the uploaded Summit Leads logo and its visual direction: midnight black/deep navy backgrounds, icy cyan/turquoise highlights, blue-to-violet gradient accents, silver, and white. Use glow/reflection sparingly; avoid a gaming aesthetic and avoid neon on every component.
- [x] Provide a cinematic hero with the headline “TURN DIGITAL POTENTIAL INTO BUSINESS DOMINATION.”, supporting copy “We build the digital infrastructure, customer acquisition systems and intelligent technology that help ambitious businesses move ahead.”, eyebrow “SUMMIT LEADS LTD | DIGITAL GROWTH & TECHNOLOGY”, primary CTA “Let’s Build Your Growth”, and secondary CTA “Explore Our Capabilities”.
- [x] Include a custom visual representing a connected digital business ecosystem, with global/business connectivity and growth cues; maintain a graceful CSS/static fallback and do not let visual effects delay the content.

## Home page capabilities and connected growth story
- [x] Immediately below the hero, show “STRATEGY | CUSTOMER ACQUISITION | DIGITAL DEVELOPMENT | AI AUTOMATION | BUSINESS SYSTEMS”.
- [x] Present “GROWTH IS NOT AN ACCIDENT. IT IS ENGINEERED.” with the supporting idea that businesses need connected systems that turn visibility into opportunities, opportunities into customers, and technology into competitive advantage.
- [x] Keep Lead Generation & Customer Acquisition, Website & Application Development, and AI Automation & Business Systems equally prominent as the three core capabilities; make Lead Generation the primary commercial entry point and CTA path.
- [x] Lead Generation content covers targeted lead generation, prospect research and identification, B2B customer acquisition, outreach campaign infrastructure, lead-capture systems, appointment-setting workflows, CRM integration, and lead-management/follow-up automation.
- [x] Website & Application Development content covers premium/corporate/business websites, landing pages, e-commerce, custom web applications, customer portals, booking/appointment systems, CRM/dashboards, redesign, optimisation, maintenance, and support.
- [x] AI Automation & Business Systems content covers AI-powered workflows, customer-support assistants, automated lead qualification, CRM and scheduling automation, business-process automation, custom AI integrations, operational dashboards, and intelligent communications.
- [x] Include an interactive “ONE CONNECTED SYSTEM. MULTIPLE GROWTH ENGINES.” ecosystem: VISIBILITY → LEAD GENERATION → WEBSITE & DIGITAL EXPERIENCE → CUSTOMER ENQUIRIES → CRM & AUTOMATION → FOLLOW-UP & CONVERSION → BUSINESS GROWTH. Hovering, focusing, or activating a component reveals its explanation.

## Lead Generation service page
- [x] Use the headline “MORE THAN LEADS. REAL BUSINESS OPPORTUNITIES.” and position Summit Leads as a customer-acquisition partner that reaches the right people, identifies potential customers, captures interest, and builds a consistent opportunity pipeline.
- [x] Cover B2B lead generation, targeted prospect research, business database development, industry-specific prospecting, outreach campaign setup, appointment-setting systems, lead capture and qualification, CRM pipeline integration, and automated follow-up.
- [x] Show the six-step process: 01 Define the target market; 02 Identify ideal prospects; 03 Build targeted prospect lists; 04 Initiate outreach; 05 Capture and qualify enquiries; 06 Deliver opportunities into the sales pipeline.
- [x] Include the CTA “BUILD YOUR CUSTOMER PIPELINE”. Do not promise guaranteed leads, appointments, or revenue; explain campaigns, targeting, and deliverables are scoped to each client’s needs.

## Website and application development service page
- [x] Use the headline “YOUR WEBSITE SHOULD BE YOUR MOST POWERFUL DIGITAL ASSET.” and supporting copy “We create premium digital experiences engineered to establish authority, communicate value and turn attention into action.”
- [x] Showcase corporate and business websites, landing pages, e-commerce, custom web applications, customer portals, booking platforms, CRM systems, business dashboards, and redesigns.
- [x] Include fictional demonstration interfaces for a premium corporate website, booking platform, e-commerce interface, analytics dashboard, and customer portal; label every conceptual demonstration clearly and never present it as completed client work.
- [x] Explain the process DISCOVER → DESIGN → DEVELOP → DEPLOY → OPTIMISE and include “LET’S BUILD SOMETHING POWERFUL”.

## AI automation service page
- [x] Use the headline “INTELLIGENCE THAT WORKS BEHIND YOUR BUSINESS.” and explain that intelligent systems streamline repetitive work, connect platforms, and improve operational workflows.
- [x] Show an animated workflow NEW ENQUIRY → AI QUALIFICATION → CRM → FOLLOW-UP → APPOINTMENT → SALES PIPELINE.
- [x] Cover AI assistants, automated enquiry handling, intelligent appointment scheduling, CRM workflows, lead qualification, automated notifications, data processing, and custom business integrations.
- [x] Include “EXPLORE AI AUTOMATION”.

## Commercial rationale, approach, and process
- [x] Explain “BUILT AROUND WHAT ACTUALLY MOVES BUSINESS FORWARD.” and highlight commercial thinking before technology, objectives-aligned solutions, integrated capabilities, modern development, scalable architecture, practical automation, clear communication, and long-term digital support.
- [x] Communicate confidence through quality rather than unsupported “number one”, “industry leader”, “trusted by thousands”, or similar claims.
- [x] Show the six-step working process: 01 DISCOVER — understand business, market, objectives and challenges; 02 STRATEGISE — define solution, scope, architecture and approach; 03 CREATE — design and develop the experience/system; 04 CONNECT — integrate required platforms, tools and workflows; 05 LAUNCH — deploy, test and prepare for real use; 06 EVOLVE — improve, optimise and support growth.

## Contact form, server handling, and direct contact
- [x] Present “LET’S BUILD YOUR NEXT COMPETITIVE ADVANTAGE.” and the supporting invitation for prospects seeking more customers, a stronger digital presence, or smarter business systems.
- [x] Provide fields for full name, business name, email address, WhatsApp/phone number, service required, optional project budget, and project details. Validate all required fields; budget remains optional.
- [x] Provide service choices Lead Generation, Website Development, Application Development, AI Automation, CRM & Business Systems, Multiple Services, and Other.
- [x] Use the submit label “START THE CONVERSATION”. Display truthful submission feedback and meaningful errors; never claim the enquiry was sent if delivery fails.
- [x] Keep submission handling server-side only. CHAMPREP documentation supplied by the user specifies `POST https://api.champrep.com/v1/mail/send`, bearer authentication, and the `mail:send` scope. As approved, do not send messages until the exact request/response schema and prototype-safe credentials are configured; fail closed with an explicit no-send response instead of simulating delivery.
- [x] Include required-field validation, a honeypot, basic rate limiting, and safe error handling. Do not place an API key in browser code or copy any production secret into this separate project.
- [x] Preserve a WhatsApp click-to-chat action for `+27 73 908 1412` using `https://wa.me/27739081412`; also display `hello@summitleadsltd.com` as an email alternative.

## Footer and prototype policy pages
- [x] Footer brand text: “SUMMIT LEADS LTD” and “Building the systems behind ambitious business growth.” Include links to Home, About, Lead Generation, Website Development, AI Automation, Contact, Privacy Policy, and Terms of Service, plus email, WhatsApp, domain text, and copyright.
- [x] Include social links only if real Summit Leads accounts are provided; do not invent social accounts.
- [x] Keep privacy/terms routes clearly marked as draft placeholders for prototype review, not legal advice or production-ready terms.
- [x] Make the prototype visibly non-production and do not connect it to, deploy it as, or claim it updates `summitleadsltd.com` or its existing Vercel project.

## Responsive, accessible, SEO-aware, and secure implementation
- [x] Provide responsive layouts for 4K/large desktop, laptop, tablet, and modern mobile; create mobile-specific compositions with usable navigation, readable text, touch targets, forms, and simplified visual effects.
- [x] Use semantic accessible HTML, keyboard-operable controls, clear focus states, and `prefers-reduced-motion`; preserve content access when animation/WebGL is unavailable.
- [x] Use unique route metadata, descriptive titles/descriptions, Open Graph and Twitter metadata, internal links, and meaningful content in initial HTML. Do not emit canonical/absolute public-origin tags unless the relevant public origin is explicitly configured; prevent indexing of the non-production prototype.
- [x] Provide `public/manus-routes.json` with all implemented public page routes before first development-server start, excluding APIs and assets.
- [x] Use Next.js, React, TypeScript, reusable components, responsive CSS, optimised image delivery, secure server-side handling, and no unnecessary dependencies or hardcoded secrets.
- [x] Keep loading fast, avoid layout shift, lazy-load heavy visual assets where appropriate, and deliver no broken links, dead buttons, mobile overflow, or avoidable console errors.

## Visual refinement: gold accents and graphic motion
- [x] “add more gold text and accents” — extend champagne-gold emphasis across selected display text and interface accents without recoloring the supplied logo or compromising contrast.
- [x] “add more image graphic motion assets” — add multiple lightweight decorative graphic-motion treatments, with mobile simplification and reduced-motion handling.

## Northern Lights palette and logo-matched background
- [x] “color the image of the globe and all the related graphic imagery in the northern lights” — recolor the globe artwork and decorative motion graphics with restrained emerald, teal, cyan, and violet tones while preserving composition and legible copy space.
- [x] “make the background color the same as the background of the logo” — use the logo’s sampled dark background tone `#02030A` as the page and hero foundation.
- [x] “make the hero image motion/ animated imagery” — animate the hero artwork itself with restrained aurora drift while keeping it static for reduced-motion users.

## Deferred until explicitly configured for public production
- [ ] Enable actual CHAMPREP email delivery only after the user provides the message request/response schema and a prototype-safe API key. Keep any production credentials out of this prototype.
- [ ] Before any public production deployment, replace the draft legal pages, configure the approved public-origin canonical/sitemap/redirect policy, and revise the prototype's noindex/robots blocking policy.

## Premium brand presentation
- [x] Make the website evoke a luxurious, elite, expensive, sophisticated, influential, classy, polished, exceptional-quality brand through quiet-luxury editorial styling and measured, outcome-led copy.
- [x] Use refined typography, generous spacing, silver/white surfaces, and restrained cyan/turquoise/violet accents from the supplied logo; avoid unsupported claims that Summit Leads is already an industry leader or fabricated proof.
- [x] Use an elegant serif display face with selected champagne-gold headline text, while keeping body copy silver/white and preserving the supplied logo's original accent colors.
