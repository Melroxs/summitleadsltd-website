"use client";

import { useState, type FormEvent } from "react";

const serviceOptions = [
  "Lead Generation",
  "Website Development",
  "Application Development",
  "AI Automation",
  "CRM & Business Systems",
  "Multiple Services",
  "Other",
];

export function ContactForm({ initialService }: { initialService?: string }) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [message, setMessage] = useState("");
  const defaultService = serviceOptions.includes(initialService ?? "") ? initialService : "";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");
    setMessage("");

    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as { message?: string };
      if (!response.ok) {
        setStatus("error");
        setMessage(result.message ?? "We couldn’t send your enquiry. Please use WhatsApp or email instead.");
        return;
      }
      setStatus("sent");
      setMessage(result.message ?? "Your enquiry has been sent. We’ll be in touch.");
      form.reset();
    } catch {
      setStatus("error");
      setMessage("We couldn’t connect to the enquiry service. Please use WhatsApp or email instead.");
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label className="field">
        <span>Full name <b aria-hidden="true">*</b></span>
        <input autoComplete="name" name="name" required minLength={2} maxLength={120} placeholder="How should we address you?" />
      </label>
      <label className="field">
        <span>Business name <b aria-hidden="true">*</b></span>
        <input autoComplete="organization" name="business" required maxLength={160} placeholder="Your company" />
      </label>
      <label className="field">
        <span>Email address <b aria-hidden="true">*</b></span>
        <input autoComplete="email" name="email" type="email" required maxLength={254} placeholder="you@company.com" />
      </label>
      <label className="field">
        <span>WhatsApp / phone <b aria-hidden="true">*</b></span>
        <input autoComplete="tel" name="phone" type="tel" required minLength={7} maxLength={32} placeholder="+27 …" />
      </label>
      <label className="field">
        <span>Service required <b aria-hidden="true">*</b></span>
        <select name="service" required defaultValue={defaultService}>
          <option value="" disabled>Select a service</option>
          {serviceOptions.map((service) => <option key={service} value={service}>{service}</option>)}
        </select>
      </label>
      <label className="field">
        <span>Project budget <small>optional</small></span>
        <input name="budget" type="text" maxLength={120} placeholder="Optional budget range" />
      </label>
      <label className="field field--full">
        <span>Project details <b aria-hidden="true">*</b></span>
        <textarea name="message" required minLength={10} maxLength={5000} rows={5} placeholder="What are you looking to achieve?" />
      </label>
      <div className="honeypot" aria-hidden="true">
        <label>Leave this field empty<input type="text" name="website" tabIndex={-1} autoComplete="off" /></label>
      </div>
      <div className="form-footer field--full">
        <button className="button button--primary" type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "START THE CONVERSATION"}
          <span aria-hidden="true">↗</span>
        </button>
        <p className="form-privacy">Your details will only be used to respond to your enquiry. This is a non-production prototype, so email delivery may be unavailable.</p>
      </div>
      {message ? <p className={`form-message form-message--${status}`} role={status === "error" ? "alert" : "status"} aria-live="polite">{message}</p> : null}
    </form>
  );
}
