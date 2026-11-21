"use client";

import { useState, type FormEvent } from "react";

const serviceOptions = ["Lead Generation", "Website Development", "Application Development", "AI Automation", "CRM & Business Systems", "Multiple Services", "Other"];

export function ContactForm({ initialService }: { initialService?: string }) {
  const [status, setStatus] = useState<"idle" | "sent" | "error" | "sending">("idle");
  const [message, setMessage] = useState("");
  const defaultService = serviceOptions.includes(initialService ?? "") ? initialService : "";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    if (String(data.get("_honey") ?? "").trim()) return;

    setStatus("sending");
    setMessage("Sending your enquiry securely…");
    data.set("_subject", "New Summit Leads website enquiry");
    data.set("_template", "table");
    data.set("_replyto", String(data.get("email") ?? ""));
    data.set("_url", window.location.href);

    try {
      const response = await fetch("https://formsubmit.co/ajax/hello@summitleadsltd.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(Object.fromEntries(data.entries())),
      });
      const result = await response.json();
      if (!response.ok || result.success !== "true" && result.success !== true) {
        const detail = String(result.message || "");
        if (/activation|actived|confirm/i.test(detail)) {
          throw new Error("Your enquiry service is awaiting its one-time activation. FormSubmit has sent an activation email to hello@summitleadsltd.com. Please check the inbox and spam folder; submissions are held by FormSubmit until the address is confirmed.");
        }
        throw new Error(detail || "FormSubmit did not accept the enquiry. Please email hello@summitleadsltd.com or contact us on WhatsApp.");
      }
      setStatus("sent");
      setMessage("Thank you — your enquiry has been submitted. Summit Leads will be in touch.");
      form.reset();
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "We couldn't submit your enquiry. Please email hello@summitleadsltd.com or use WhatsApp.");
    }
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
      <div className="honeypot" aria-hidden="true"><label>Leave this field empty<input type="text" name="_honey" tabIndex={-1} autoComplete="off" /></label></div>
      <div className="form-footer field--full">
        <button className="button button--primary" type="submit" disabled={status === "sending"}>{status === "sending" ? "SENDING ENQUIRY…" : "SUBMIT ENQUIRY"} <span aria-hidden="true">↗</span></button>
        <p className="form-privacy">Your enquiry is securely submitted through FormSubmit to hello@summitleadsltd.com. Spam protection is enabled. You can also <a href="https://wa.me/27739081412?text=Hello%20Summit%20Leads%2C%20I%27d%20like%20to%20discuss%20a%20project." target="_blank" rel="noopener noreferrer">message Summit Leads on WhatsApp</a>.</p>
      </div>
      {message ? <p className={`form-message form-message--${status}`} role="status" aria-live="polite">{message}</p> : null}
    </form>
  );
}
