import Link from "next/link";
import { services } from "@/lib/content";

export function ServiceCards() {
  return (
    <div className="service-grid">
      {services.map((service) => (
        <article className={`service-card${service.featured ? " service-card--primary" : ""}`} key={service.number}>
          <div className="service-card-top">
            <span>{service.number} <i>/</i> {service.verb}</span>
            <span className="service-card-spark" aria-hidden="true">↗</span>
          </div>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
          <ul className="tag-list">
            {service.tags.map((tag) => <li key={tag}>{tag}</li>)}
          </ul>
          <Link className={service.featured ? "service-link service-link--primary" : "service-link"} href={service.href}>
            {service.cta} <span aria-hidden="true">↗</span>
          </Link>
        </article>
      ))}
    </div>
  );
}
