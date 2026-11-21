"use client";

import { useState, type FormEvent } from "react";

const serviceOptions = ["Lead Generation", "Website Development", "Application Development", "AI Automation", "CRM & Business Systems", "Multiple Services", "Other"];
const whatsappNumber = "27739081412";

export function ContactForm({ initialService }: { initialService?: string }) {
  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");
  const [message, setMessage] = useState("");
  const defaultService = serviceOptions.includes(initialService ?? "") ? initialService : "";

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    if (String(data.get("website") ?? "").trim()) return;

    const fields = {
      name: String(data.get("name") ?? "").trim(),
      business: String(data.get("business") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      phone: String(data.get("phone") ?? "").trim(),
      service: String(data.get("service") ?? "").trim(),
      budget: String(data.get("budget") ?? "").trim(),
      details: String(data.get("message") ?? "").trim(),
    };
    const enquiry = [
      "Hello Summit Leads, I'd like to make an enquiry.",
      "",
      "Name: " + fields.name,
      "Business: " + fields.business,
      "Email: " + fields.email,
      "Phone / WhatsApp: " + fields.phone,
      "Service: " + fields.service,
      "Budget: " + (fields.budget || "Not specified"),
      "",
      "Project details:",
      fields.details,
    ].join("\n");

    const whatsappUrl = "https://wa.me/" + whatsappNumber + "?text=" + encodeURIComponent(enquiry);
    const popup = window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    if (!popup) window.location.href = whatsappUrl;
    setStatus("sent");
    setMessage("Your enquiry is ready in WhatsApp. Please press Send in WhatsApp to deliver it to Summit Leads.");
    form.reset();
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label className="field"><span>Full name <b aria-hidden="true">*</b></span><input autoComplete="name" name="name" required minLength={2} maxLength={120} placeholder="How should we address you?" /></label>
      <label className="field"><span>Business name <b aria-hidden="true">*</b></span><input autoComplete="organization" name="business" required maxLength={160} placeholder="Your company" /></label>
      <label className="field"><span>Email address <b aria-hidden="true">*</b></span><input autoComplete="email" name="email" type="email" required maxLength={254} placeholder="you@company.com" /></label>
      <label className="field"><span>WhatsApp / phone <b aria-hidden="true">*</b></span><input autoComplete="tel" name="phone" type="tel" required minLength={7} maxLength={32} placeholder="+27 …" /></label>
      <label className="field"><span>Service required <b aria-hidden="true">*</b></span><select name="service" required defaultValue={defaultService}><option value="" disabled>Select a service</option>{serviceOptions.map((service) => <option key={service} value={service}>{service}</option>)}</select></label>
      <label className="field"><span>Project budget <small>optional</small></span><input name="budget" type="text" maxLength={120} placeholder="Optional budget range" /></label>
      <label className="field field--full"><span>Project details <b aria-hidden="true">*</b></span><textarea name="message" required minLength={10} maxLength={5000} rows={5} placeholder="What are you looking to achieve?" /></label>
      <div className="honeypot" aria-hidden="true"><label>Leave this field empty<input type="text" name="website" tabIndex={-1} autoComplete="off" /></label></div>
      <div className="form-footer field--full">
        <button className="button button--primary" type="submit">SEND ENQUIRY VIA WHATSAPP <span aria-hidden="true">↗</span></button>
        <p className="form-privacy">Your details are placed into a WhatsApp message addressed to Summit Leads. You must press Send in WhatsApp to deliver the enquiry. You can also email <a href="mailto:hello@summitleadsltd.com">hello@summitleadsltd.com</a>.</p>
      </div>
      {message ? <p className={`form-message form-message--${status}`} role="status" aria-live="polite">{message}</p> : null}
    </form>
  );
}
