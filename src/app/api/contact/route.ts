import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, lookingFor, situation } = body;

    // Validate required fields
    if (!name || !email || !phone || !lookingFor) {
      return NextResponse.json(
        { error: "Please fill out all required fields." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY is not defined in environment variables.");
      return NextResponse.json(
        { error: "Server configuration error: Resend API key missing." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const destinationEmail = process.env.CONTACT_NOTIFICATION_EMAIL || "info@handinhandtherapycentre.ca";
    
    // Resend requires onboarded domain or default onboarding sender
    const senderEmail = process.env.RESEND_FROM_EMAIL || "Hand In Hand Website <onboarding@resend.dev>";

    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: 'Segoe UI', Helvetica, Arial, sans-serif; background-color: #FBF9F5; color: #1B3B48; margin: 0; padding: 20px; }
            .card { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); }
            .header { background: #0F2530; color: #ffffff; padding: 24px; text-align: center; }
            .header h1 { margin: 0; font-size: 20px; font-weight: 800; letter-spacing: -0.5px; }
            .header p { margin: 4px 0 0 0; color: #EAA85E; font-size: 13px; font-weight: 700; text-transform: uppercase; }
            .body { padding: 28px; }
            .field-group { margin-bottom: 18px; border-bottom: 1px solid #f1f5f9; padding-bottom: 14px; }
            .field-group:last-child { border-bottom: none; margin-bottom: 0; padding-bottom: 0; }
            .label { font-size: 11px; font-weight: 800; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px; display: block; }
            .value { font-size: 15px; font-weight: 600; color: #1B3B48; margin: 0; }
            .badge { display: inline-block; background-color: #E8F0EC; color: #2A5243; font-weight: 800; padding: 4px 12px; border-radius: 20px; font-size: 13px; }
            .message-box { background: #F8FAFC; border-left: 4px solid #F57A54; padding: 14px 18px; border-radius: 8px; font-size: 14px; line-height: 1.6; color: #334155; white-space: pre-wrap; }
            .footer { background: #f8fafc; padding: 16px; text-align: center; font-size: 12px; color: #94a3b8; border-top: 1px solid #e2e8f0; }
          </style>
        </head>
        <body>
          <div class="card">
            <div class="header">
              <p>New Website Inquiry</p>
              <h1>Hand In Hand Therapy Centre</h1>
            </div>
            <div class="body">
              <div class="field-group">
                <span class="label">Program Track Requested</span>
                <span class="badge">${lookingFor}</span>
              </div>
              <div class="field-group">
                <span class="label">Full Name</span>
                <p class="value">${name}</p>
              </div>
              <div class="field-group">
                <span class="label">Email Address</span>
                <p class="value"><a href="mailto:${email}" style="color: #2A5243; text-decoration: none;">${email}</a></p>
              </div>
              <div class="field-group">
                <span class="label">Phone Number</span>
                <p class="value"><a href="tel:${phone}" style="color: #2A5243; text-decoration: none;">${phone}</a></p>
              </div>
              <div class="field-group">
                <span class="label">Client Situation / Notes</span>
                <div class="message-box">${situation ? situation : "No details provided."}</div>
              </div>
            </div>
            <div class="footer">
              Sent automatically from the Hand In Hand website contact form.
            </div>
          </div>
        </body>
      </html>
    `;

    const { data, error } = await resend.emails.send({
      from: senderEmail,
      to: [destinationEmail],
      replyTo: email,
      subject: `New Inquiry: ${name} (${lookingFor})`,
      html: htmlContent,
      text: `New Website Inquiry\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nLooking For: ${lookingFor}\nDetails:\n${situation || "N/A"}`,
    });

    if (error) {
      console.error("Resend API error:", error);
      return NextResponse.json(
        { error: error.message || "Failed to send email via Resend." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data });
  } catch (err: any) {
    console.error("Contact API internal error:", err);
    return NextResponse.json(
      { error: err.message || "Internal server error." },
      { status: 500 }
    );
  }
}
