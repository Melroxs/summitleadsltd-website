# Summit Leads non-production redesign prototype — implementation plan

## Scope and implementation approach

Build a separate, non-production website prototype for Summit Leads Ltd in the initialized Manus Webdev project. Do not connect the prototype to `summitleadsltd.com`, the existing Vercel project, or the existing repository. Use Next.js, React, TypeScript, responsive CSS, and the already enabled managed server capability. Keep the three services equally visible as core offerings, while giving Lead Generation the clearest commercial entry point. Use the brand promise: “Build Your Presence. Generate Opportunities. Engineer Growth.”

The site will be server-rendered from its first response for meaningful page content and metadata, with client-side interactivity limited to navigation, the ecosystem explorer, and form feedback. Build dedicated service pages for Lead Generation, Website/Application Development, and AI Automation, plus the homepage, contact, privacy, and terms routes. Mark conceptual portfolio screens as demonstrations, and do not invent clients, testimonials, statistics, awards, certifications, or partnerships.

## Project structure

- `app/layout.tsx` — shared document shell, global metadata defaults, typography, and global styles.
- `app/page.tsx` — homepage and editorial sections: cinematic hero, approach, three pillars, interactive connected-growth system, conceptual interface gallery, process, and contact CTA.
- `app/services/lead-generation/page.tsx` — service-specific acquisition positioning and six-stage process.
- `app/services/web-development/page.tsx` — website/application offer, clearly marked concept demonstrations, and Discover → Design → Develop → Deploy → Optimise process.
- `app/services/ai-automation/page.tsx` — automation offer and enquiry-to-CRM workflow.
- `app/contact/page.tsx` — complete enquiry experience, service selector, contact details, and WhatsApp CTA.
- `app/privacy/page.tsx` and `app/terms/page.tsx` — clearly identified draft policy pages for prototype review, not legal advice or production-ready terms.
- `app/api/contact/route.ts` — server-only validation, anti-spam checks, rate limiting, and CHAMPREP mail-adapter boundary; secrets stay in server environment variables.
- `components/` — shared navigation, footer, service cards, process, ecosystem interactions, contact form, and visual demonstration components.
- `public/images/` — the supplied Summit Leads logo and one custom-generated hero ecosystem visual.
- `public/manus-routes.json` — the complete page-route manifest required by the Webdev runtime.
- `plan.md`, `TODO.md`, and `.env.example` — plan, tracked outcomes, and names/documentation of required server-only configuration variables, with no secret values.

## Design direction

- **Design movement:** quiet luxury with an editorial digital-growth consultancy sensibility: composed, assured, and deliberately understated rather than overtly futuristic.
- **Core principles:** commercial outcomes before technical novelty; a considered standard of craft; generous breathing room; confidence through restraint, never fabricated proof or status claims.
- **Color philosophy:** use the logo’s deep blue-black background tone `#02030A` as the site and hero foundation; silver and soft white carry supporting typography; soft champagne gold remains the editorial thread across selected display lettering and interface accents. Recolor the globe and decorative signal graphics with restrained Northern Lights green, teal, cyan, and violet, echoing the supplied mountain mark without broad neon glow or gaming aesthetics.
- **Layout paradigm:** asymmetric editorial composition with a calm split hero, spacious service narratives, fine rules, connected-system diagrams, and alternating content/visual fields instead of repetitive blocks.
- **Signature elements:** the supplied geometric summit mark; hairline dividers with champagne-gold accents; restrained aurora-colored signal lines, light curtains, and orbiting markers.
- **Interaction philosophy:** make Lead Generation the clearest commercial path while preserving equal prominence for the other services. Use quiet, purposeful hover/focus states, keyboard-accessible ecosystem selection, and transparent form feedback.
- **Animation:** add noticeable but composed, lightweight SVG/CSS motion graphics: a slow aurora-colored drift in the hero artwork, an orbital trace and signal pulse, plus restrained chart, interface, and process micro-motions. Avoid layout shift, long loading gates, and cursor gimmicks. Disable/reduce nonessential motion under `prefers-reduced-motion` and simplify effects on mobile.
- **Typography system:** Cormorant Garamond for expressive editorial headlines with champagne-gold italic emphasis; DM Sans for precise readable body copy; DM Mono for small wayfinding labels, process indexes, and selected gold data callouts.
- **Brand essence:** a considered digital growth partner for ambitious businesses, connecting customer acquisition, digital experiences, and practical automation; exacting, composed, forward-looking.
- **Brand voice:** measured, confident, and commercially grounded. Example: “Build a presence worthy of your next move.” Example: “Create opportunities with intention.” Never assert that Summit Leads is an industry leader without evidence.
- **Wordmark and logo:** use the supplied Summit Leads logo as the source mark; do not redraw or replace it.
- **Signature brand color:** soft champagne gold `#D6BF88` as the editorial highlight, supported by icy cyan `#D5EBED`, muted cyan `#6DAEB9`, silver, and a restrained blue-violet accent.

## Contact integration constraint

The supplied CHAMPREP documentation specifies `POST https://api.champrep.com/v1/mail/send`, bearer authentication, and the least-privilege `mail:send` scope. It does not include the request JSON or success/error response schema. The prototype will submit only to a server-side route and will never report success unless CHAMPREP confirms delivery. The mail adapter will use a server-only `CHAMPREP_API_KEY` and remain fail-closed with clear feedback and WhatsApp/email fallbacks until the official payload/response schema and a prototype-safe credential are configured. Do not copy any production secret into this separate prototype or expose a key in browser code. The form will validate required fields, include a honeypot, apply basic rate limiting, and return meaningful failure messages. The exact message-body schema remains an implementation dependency; do not guess it from another mail provider.

## SEO and runtime

Provide unique title and description metadata, Open Graph and Twitter metadata, canonical URLs only where an explicitly configured public origin exists, semantic page structure, internal links, and responsive image delivery. Keep the prototype clearly separate from the production domain. Add route declarations to `public/manus-routes.json` before the first development-server start. Configure TypeScript diagnostics, install a pinned Node toolchain/dependency set with reviewed lifecycle permissions, and start the web server through the managed Webdev runtime on its configured port.


## External implementation references

- CHAMPREP endpoint/base URL and `mail:send` scope are taken from the documentation attachment supplied by the user; it identifies `https://api.champrep.com/v1/mail/send` and bearer authentication. That attachment does not include the request/response JSON schema.
- Next.js 15.5.29 is pinned to a patched release line. The official [Next.js CVE-2025-66478 advisory](https://nextjs.org/blog/CVE-2025-66478) lists 15.5.7 as the initial fix for that issue. Vercel’s [May 2026 security release](https://vercel.com/changelog/next-js-may-2026-security-release) lists 15.5.18 as the fix for the advisories addressed in that coordinated release; 15.5.29 is later in the same maintained patch line.
