import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations/contact";
import { getIP, ratelimit } from "@/lib/ratelimit";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 587),
  secure: process.env.SMTP_SECURE === "true" || process.env.SMTP_PORT === "465",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function POST(req: Request) {
  try {
    const ip = getIP(req);
    const { success } = await ratelimit.limit(ip);
    if (!success) {
      return NextResponse.json({ success: false, error: "Too many requests" }, { status: 429 });
    }

    const body = await req.json();
    const trimmedBody = Object.fromEntries(
      Object.entries(body).map(([key, value]) => [key, typeof value === "string" ? value.trim() : value])
    );

    const validation = contactFormSchema.safeParse(trimmedBody);
    if (!validation.success) {
      return NextResponse.json({ success: false, error: "Invalid form data" }, { status: 400 });
    }

    const { name, email, phone, subject, message } = validation.data;

    // verify connection (will throw if invalid)
    await transporter.verify();

    const info = await transporter.sendMail({
      from: process.env.CONTACT_FROM,
      to: process.env.CONTACT_TO,
      subject: subject || `New contact from ${name}`,
      replyTo: email,
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}

Subject: ${subject || "Not provided"}

Message:
${message}
      `.trim(),
    });

    // Log full info server-side for debugging
    console.info("Email send info:", { accepted: info.accepted, rejected: info.rejected, messageId: info.messageId });

    // Return minimal send result to client for debugging (no credentials)
    return NextResponse.json({ success: true, info: { accepted: info.accepted, rejected: info.rejected, messageId: info.messageId } });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: "Something went wrong" }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ success: false, error: "Method not allowed" }, { status: 405 });
}
