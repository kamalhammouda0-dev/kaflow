import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const { name, company, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Vul alle verplichte velden in." },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "KA Flow <onboarding@resend.dev>",
      to: ["kamalhammouda0@gmail.com"],
      replyTo: email,
      subject: `Kennismaking via KA Flow — ${name}`,
      html: `
        <h2 style="font-family:sans-serif;color:#15171c">Nieuwe aanvraag via kaflow.nl</h2>
        <table style="font-family:sans-serif;font-size:14px;border-collapse:collapse">
          <tr><td style="padding:6px 16px 6px 0;color:#6b7280;font-weight:600">Naam</td><td style="padding:6px 0">${name}</td></tr>
          <tr><td style="padding:6px 16px 6px 0;color:#6b7280;font-weight:600">Bedrijf</td><td style="padding:6px 0">${company || "—"}</td></tr>
          <tr><td style="padding:6px 16px 6px 0;color:#6b7280;font-weight:600">E-mail</td><td style="padding:6px 0"><a href="mailto:${email}">${email}</a></td></tr>
        </table>
        <h3 style="font-family:sans-serif;color:#15171c;margin-top:24px">Bericht</h3>
        <p style="font-family:sans-serif;font-size:14px;color:#374151;white-space:pre-wrap">${message}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error("[contact]", msg);
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
