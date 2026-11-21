import { NextResponse } from "next/server";

export const runtime = "nodejs";

const allowedServices = new Set([
  "Lead Generation",
  "Website Development",
  "Application Development",
  "AI Automation",
  "CRM & Business Systems",
  "Multiple Services",
  "Other",
]);
const rateWindows = new Map<string, { count: number; resetAt: number }>();
const MAX_REQUESTS = 5;
const WINDOW_MS = 60_000;

function text(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function clientKey(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  return forwarded || request.headers.get("x-real-ip") || "unknown";
}

function isEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > 12_000) {
    return NextResponse.json({ message: "This enquiry is too large. Please shorten the details and try again." }, { status: 413 });
  }

  const address = clientKey(request);
  const now = Date.now();
  const current = rateWindows.get(address);
  if (current && current.resetAt > now && current.count >= MAX_REQUESTS) {
    return NextResponse.json({ message: "Too many attempts. Please wait a minute or contact us directly by WhatsApp or email." }, { status: 429 });
  }
  if (!current || current.resetAt <= now) rateWindows.set(address, { count: 1, resetAt: now + WINDOW_MS });
  else rateWindows.set(address, { count: current.count + 1, resetAt: current.resetAt });

  let body: Record<string, unknown>;
  try {
    const parsed: unknown = await request.json();
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) throw new Error("Invalid body");
    body = parsed as Record<string, unknown>;
  } catch {
    return NextResponse.json({ message: "Please check your enquiry details and try again." }, { status: 400 });
  }

  if (text(body.website)) {
    return NextResponse.json({ message: "We couldn’t validate this enquiry. Please try again or contact us directly." }, { status: 400 });
  }

  const name = text(body.name);
  const business = text(body.business);
  const email = text(body.email);
  const phone = text(body.phone);
  const service = text(body.service);
  const message = text(body.message);
  const budget = text(body.budget);

  if (
    name.length < 2 || name.length > 120 ||
    business.length < 2 || business.length > 160 ||
    !isEmail(email) || email.length > 254 ||
    phone.length < 7 || phone.length > 32 ||
    !allowedServices.has(service) ||
    message.length < 10 || message.length > 5000 ||
    budget.length > 120
  ) {
    return NextResponse.json({ message: "Please complete the required fields with valid information." }, { status: 400 });
  }

  // CHAMPREP API reference: POST https://api.champrep.com/v1/mail/send, Authorization: Bearer <key>, scope: mail:send.
  // The supplied documentation did not include its message JSON or response schema. Do not guess a provider payload.
  if (!process.env.CHAMPREP_API_KEY) {
    return NextResponse.json(
      { message: "Email sending is not configured in this non-production prototype. No enquiry was sent. Please contact us by WhatsApp or email." },
      { status: 503 },
    );
  }

  return NextResponse.json(
    { message: "The CHAMPREP message format is not configured for this prototype, so no enquiry was sent. Please contact us by WhatsApp or email." },
    { status: 503 },
  );
}
