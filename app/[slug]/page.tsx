import Link from "next/link";
import { notFound } from "next/navigation";
import type { CSSProperties } from "react";

const concepts = {
  azure: {
    name: "Azure Hair Professionals",
    category: "SALON & BEAUTY",
    headline: "Your hair. Your signature.",
    intro: "A polished salon experience built around considered styling, expert care and the confidence of a look that feels like you.",
    services: ["Cut & styling", "Colour artistry", "Treatment rituals"],
    accent: "#b8a07a", background: "#102c32", surface: "#e8e1d5", mood: "Modern salon elegance",
  },
  salt: {
    name: "SALT",
    category: "BEAUTY & LIFESTYLE",
    headline: "A little more you.",
    intro: "A fresh, modern beauty concept where thoughtful treatments, considered details and everyday rituals meet.",
    services: ["Beauty essentials", "Skin & body care", "Signature experiences"],
    accent: "#c68e79", background: "#342d2b", surface: "#f1e7dc", mood: "Warm contemporary beauty",
  },
  illumine: {
    name: "ILLUMINE",
    category: "WELLNESS & SELF-CARE",
    headline: "Make space to feel well.",
    intro: "A calm digital home for restorative experiences, thoughtful wellness and small rituals that help you reconnect.",
    services: ["Restorative treatments", "Wellness consultations", "Mindful rituals"],
    accent: "#b6ad8a", background: "#273b37", surface: "#e9e9df", mood: "Quiet, restorative wellness",
  },
  timeless: {
    name: "TIMELESS",
    category: "BEAUTY & PERSONAL CARE",
    headline: "Confidence never goes out of style.",
    intro: "A refined beauty experience with a focus on quality, personal attention and services designed around you.",
    services: ["Signature beauty services", "Personal consultations", "Care & maintenance"],
    accent: "#b69a70", background: "#282525", surface: "#eee8df", mood: "Understated premium",
  },
  dmh: {
    name: "DMH",
    category: "BUSINESS WEBSITE CONCEPT",
    headline: "A clearer way forward.",
    intro: "A confident business presence that makes the offer clear, builds trust and helps the right customers take the next step.",
    services: ["Business services", "Project enquiries", "Client support"],
    accent: "#86a7ad", background: "#172b3b", surface: "#e7edf0", mood: "Professional, direct and modern",
  },
} as const;

type ConceptSlug = keyof typeof concepts;
const slugs = [...Object.keys(concepts), "leads"];

export function generateStaticParams() {
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (slug === "leads") return { title: "Local Business Leads Workspace | Summit Leads" };
  const concept = concepts[slug as ConceptSlug];
  return concept ? { title: `${concept.name} | Website Concept`, description: concept.intro } : {};
}

export default async function ConceptPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (slug === "leads") {
    return (
      <main className="leads-demo">
        <header className="leads-top"><Link href="/">SUMMIT <b>LEADS</b></Link><span>DEMO WORKSPACE / LOCAL BUSINESS</span></header>
        <section className="leads-intro"><p>LEAD MANAGEMENT CONCEPT</p><h1>Every enquiry.<br /><em>One clear next step.</em></h1><span>A sample workspace showing how enquiries can be organised, prioritised and followed up.</span></section>
        <section className="dashboard">
          <div className="dash-head"><div><small>OVERVIEW / TODAY</small><h2>Lead pipeline</h2></div><span className="demo-pill">DEMO DATA</span></div>
          <div className="metrics"><article><small>OPEN LEADS</small><strong>24</strong><span>Across all sources</span></article><article><small>NEEDS FOLLOW-UP</small><strong>08</strong><span>Next action required</span></article><article><small>APPOINTMENTS</small><strong>06</strong><span>Sample bookings</span></article><article><small>CONVERTED</small><strong>12</strong><span>Demo pipeline</span></article></div>
          <div className="table-wrap"><div className="table-title"><h3>Recent enquiries</h3><span>Illustrative records only</span></div><table><thead><tr><th>CONTACT</th><th>INTEREST</th><th>SOURCE</th><th>STATUS</th><th>NEXT ACTION</th></tr></thead><tbody>
            <tr><td><b>Olivia Martin</b><small>olivia@example.com</small></td><td>Website enquiry</td><td>Website</td><td><i className="status new">New</i></td><td>Review enquiry</td></tr>
            <tr><td><b>James Peterson</b><small>james@example.com</small></td><td>Service consultation</td><td>Facebook</td><td><i className="status follow">Follow-up</i></td><td>Call back</td></tr>
            <tr><td><b>Amara Daniels</b><small>amara@example.com</small></td><td>Pricing request</td><td>Referral</td><td><i className="status booked">Booked</i></td><td>Confirm details</td></tr>
            <tr><td><b>Daniel Smith</b><small>daniel@example.com</small></td><td>Product information</td><td>Instagram</td><td><i className="status review">Review</i></td><td>Send information</td></tr>
          </tbody></table></div>
          <p className="dash-note">This is a visual concept using fictional sample records. No real customer data is collected or stored.</p>
        </section>
        <footer className="demo-foot"><span>SUMMIT LEADS LTD · DIGITAL GROWTH SYSTEMS</span><Link href="/">← Back to demo collection</Link></footer>
        <style>{leadsStyles}</style>
      </main>
    );
  }
  const concept = concepts[slug as ConceptSlug];
  if (!concept) notFound();
  const vars = { "--accent": concept.accent, "--deep": concept.background, "--surface": concept.surface } as CSSProperties;
  return (
    <main className="concept-page" style={vars}>
      <header className="concept-nav"><Link href="/" className="concept-back">← DEMO COLLECTION</Link><span>WEBSITE CONCEPT / SUMMIT LEADS</span><a href="mailto:hello@summitleadsltd.com?subject=Website%20concept%20enquiry">DISCUSS A WEBSITE ↗</a></header>
      <section className="concept-hero"><div className="concept-copy"><p className="concept-kicker">{concept.category} <i /> WEBSITE CONCEPT</p><h1>{concept.headline}</h1><p className="concept-intro">{concept.intro}</p><a className="concept-cta" href="mailto:hello@summitleadsltd.com?subject=Website%20concept%20enquiry">ENQUIRE ABOUT A WEBSITE <span>↗</span></a><small>Concept demonstration · Illustrative brand experience</small></div><div className="concept-art" aria-label={concept.mood}><div className="art-orbit orbit-one"/><div className="art-orbit orbit-two"/><div className="art-panel"><span>{concept.name}</span><b>{concept.mood}</b><i>DESIGNED AROUND YOU</i></div><div className="art-stamp">S<span>+</span></div></div></section>
      <section className="concept-services"><div><p>THE EXPERIENCE</p><h2>Considered in<br/><em>every detail.</em></h2></div><div className="concept-service-grid">{concept.services.map((service, index) => <article key={service}><span>0{index + 1}</span><h3>{service}</h3><p>A clear, welcoming experience that helps visitors understand the offer and take the next step.</p></article>)}</div></section>
      <footer className="concept-footer"><span>{concept.name} · WEBSITE CONCEPT BY SUMMIT LEADS</span><Link href="/">EXPLORE MORE CONCEPTS ↗</Link></footer>
      <style>{conceptStyles}</style>
    </main>
  );
}

const conceptStyles = `
.concept-page{min-height:100vh;background:var(--surface);color:var(--deep);font-family:Arial,sans-serif}.concept-nav{height:76px;padding:0 6vw;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid color-mix(in srgb,var(--deep) 18%,transparent);font-size:10px;letter-spacing:.16em;font-weight:700}.concept-nav a{color:inherit;text-decoration:none}.concept-back{opacity:.65}.concept-nav>a:last-child{border-bottom:1px solid var(--accent);padding-bottom:7px}.concept-hero{min-height:610px;padding:70px 8vw;display:grid;grid-template-columns:1fr 1fr;gap:5vw;align-items:center;background:var(--deep);color:var(--surface)}.concept-copy{max-width:620px}.concept-kicker,.concept-services>div>p{font-size:10px;letter-spacing:.2em;font-weight:700;color:var(--accent)}.concept-kicker i{display:inline-block;width:25px;height:1px;background:var(--accent);vertical-align:middle;margin:0 10px}.concept-copy h1{font:500 clamp(48px,6vw,82px)/.99 Georgia,serif;letter-spacing:-.05em;margin:30px 0}.concept-intro{font-size:17px;line-height:1.8;max-width:520px;opacity:.8}.concept-cta{display:inline-flex;gap:30px;align-items:center;margin-top:28px;padding:17px 22px;background:var(--accent);color:var(--deep);text-decoration:none;font-size:10px;letter-spacing:.14em;font-weight:700}.concept-copy small{display:block;margin-top:22px;font-size:10px;letter-spacing:.1em;opacity:.55}.concept-art{min-height:410px;position:relative;display:grid;place-items:center;overflow:hidden;background:radial-gradient(circle at 50% 50%,color-mix(in srgb,var(--accent) 35%,var(--deep)),var(--deep) 65%)}.art-orbit{position:absolute;border:1px solid color-mix(in srgb,var(--accent) 55%,transparent);border-radius:50%;width:340px;height:340px}.orbit-two{width:460px;height:460px;opacity:.5}.art-panel{position:relative;width:65%;min-height:235px;padding:35px;display:flex;flex-direction:column;justify-content:space-between;background:color-mix(in srgb,var(--surface) 92%,transparent);color:var(--deep);box-shadow:0 30px 90px #0005}.art-panel span{font:italic 30px Georgia,serif}.art-panel b{font:500 27px Georgia,serif;max-width:230px}.art-panel i{font-size:9px;letter-spacing:.2em;font-style:normal;color:var(--accent)}.art-stamp{position:absolute;right:12%;bottom:10%;width:74px;height:74px;border-radius:50%;display:grid;place-items:center;background:var(--accent);color:var(--deep);font:700 28px Georgia,serif}.art-stamp span{font-size:15px}.concept-services{padding:85px 8vw;display:grid;grid-template-columns:.8fr 1.2fr;gap:8vw}.concept-services h2{font:500 54px/.98 Georgia,serif;margin:18px 0}.concept-services h2 em{color:var(--accent)}.concept-service-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}.concept-service-grid article{border-top:1px solid color-mix(in srgb,var(--deep) 28%,transparent);padding-top:18px}.concept-service-grid article>span{font-size:10px;color:var(--accent);letter-spacing:.15em}.concept-service-grid h3{font:500 22px Georgia,serif;margin:28px 0 12px}.concept-service-grid p{font-size:13px;line-height:1.7;opacity:.7}.concept-footer{padding:25px 8vw;background:var(--deep);color:var(--surface);display:flex;justify-content:space-between;gap:20px;font-size:10px;letter-spacing:.13em}.concept-footer a{color:var(--accent);text-decoration:none}@media(max-width:760px){.concept-nav{padding:0 20px}.concept-nav span{display:none}.concept-hero{grid-template-columns:1fr;padding:55px 24px}.concept-art{min-height:300px}.concept-services{grid-template-columns:1fr;padding:55px 24px}.concept-service-grid{grid-template-columns:1fr}.concept-footer{padding:22px 24px;flex-direction:column}}
`;
const leadsStyles = `
.leads-demo{min-height:100vh;background:#f4f6f8;color:#15222c;font-family:Arial,sans-serif;padding:0 5vw 45px}.leads-top{height:72px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid #dce2e6;font-size:10px;letter-spacing:.16em}.leads-top a{font-weight:800;font-size:17px;color:#142c39;text-decoration:none;letter-spacing:-.04em}.leads-top b{color:#b18c58}.leads-top span{color:#7b8992}.leads-intro{padding:65px 0 38px}.leads-intro p,.dash-head small{font-size:10px;letter-spacing:.18em;color:#9a794c;font-weight:700}.leads-intro h1{font:500 clamp(42px,6vw,68px)/1 Georgia,serif;margin:18px 0}.leads-intro h1 em{color:#9a794c}.leads-intro>span{color:#65737c;font-size:15px}.dashboard{max-width:1120px;background:white;border:1px solid #e0e5e8;padding:28px;margin:0 auto;box-shadow:0 22px 60px #162a3810}.dash-head{display:flex;justify-content:space-between;align-items:center}.dash-head h2{font:600 24px Georgia,serif;margin:8px 0 0}.demo-pill{background:#f4eee4;color:#947044;padding:8px 12px;font-size:9px;letter-spacing:.15em;font-weight:700}.metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin:25px 0}.metrics article{padding:18px;background:#f7f8f8;border:1px solid #edf0f1}.metrics small{display:block;color:#7b8992;font-size:9px;letter-spacing:.12em}.metrics strong{display:block;font:500 34px Georgia,serif;margin:10px 0}.metrics span{font-size:11px;color:#7b8992}.table-wrap{border:1px solid #e6eaec}.table-title{display:flex;justify-content:space-between;align-items:center;padding:18px 16px}.table-title h3{font:600 18px Georgia,serif;margin:0}.table-title span{font-size:10px;color:#7b8992}.table-wrap table{width:100%;border-collapse:collapse;text-align:left}.table-wrap th{background:#f6f7f7;font-size:9px;letter-spacing:.1em;color:#71808a;padding:13px}.table-wrap td{padding:15px 13px;border-top:1px solid #edf0f1;font-size:12px}.table-wrap td b,.table-wrap td small{display:block}.table-wrap td small{font-size:10px;color:#89949a;margin-top:5px}.status{font-style:normal;border-radius:20px;padding:6px 9px;font-size:10px;background:#eef3f6}.status.new{color:#376f8a}.status.follow{color:#98713d;background:#f7f0e4}.status.booked{color:#34785e;background:#eaf4ee}.status.review{color:#6d6294;background:#f0eef7}.dash-note{font-size:10px;color:#8b969d;margin:18px 0 0}.demo-foot{max-width:1120px;margin:26px auto 0;display:flex;justify-content:space-between;font-size:10px;letter-spacing:.12em;color:#7d8990}.demo-foot a{color:#9a794c;text-decoration:none}@media(max-width:760px){.leads-demo{padding:0 18px 30px}.metrics{grid-template-columns:repeat(2,1fr)}.table-wrap{overflow-x:auto}.table-wrap table{min-width:720px}.demo-foot{flex-direction:column;gap:12px}}
`;
