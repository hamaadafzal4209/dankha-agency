import { Resend } from "resend";
import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations/contact";
import { getIP, ratelimit } from "@/lib/ratelimit";

const resend = new Resend(process.env.RESEND_API_KEY);

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

    await resend.emails.send({
      from: process.env.CONTACT_FROM!,
      to: process.env.CONTACT_TO!,
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

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: "Something went wrong" }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ success: false, error: "Method not allowed" }, { status: 405 });
}
