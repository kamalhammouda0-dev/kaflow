import { Resend } from "resend";
import { NextResponse } from "next/server";

export const runtime = "edge";

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const { name, email, website, company, pain } = await req.json();

    if (!name || !email) {
      return NextResponse.json(
        { error: "Vul alle verplichte velden in." },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "KA Flow <onboarding@resend.dev>",
      to: ["kamalhammouda0@gmail.com"],
      replyTo: email,
      subject: `Gratis scan aanvraag — ${name}`,
      html: `
        <h2 style="font-family:sans-serif;color:#15171c">Nieuwe scanaanvraag via kaflow.nl</h2>
        <table style="font-family:sans-serif;font-size:14px;border-collapse:collapse">
          <tr><td style="padding:6px 16px 6px 0;color:#6b7280;font-weight:600">Naam</td><td style="padding:6px 0">${name}</td></tr>
          <tr><td style="padding:6px 16px 6px 0;color:#6b7280;font-weight:600">Bedrijf</td><td style="padding:6px 0">${company || "—"}</td></tr>
          <tr><td style="padding:6px 16px 6px 0;color:#6b7280;font-weight:600">E-mail</td><td style="padding:6px 0"><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td style="padding:6px 16px 6px 0;color:#6b7280;font-weight:600">Website</td><td style="padding:6px 0">${website || "—"}</td></tr>
        </table>
        <h3 style="font-family:sans-serif;color:#15171c;margin-top:24px">Grootste uitdaging</h3>
        <p style="font-family:sans-serif;font-size:14px;color:#374151;white-space:pre-wrap">${pain || "—"}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Er ging iets mis. Probeer het opnieuw of mail rechtstreeks." },
      { status: 500 }
    );
  }
}
