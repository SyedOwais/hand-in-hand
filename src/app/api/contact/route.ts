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
    const senderEmail = process.env.RESEND_FROM_EMAIL || "Hand In Hand Therapy <info@handinhandtherapycentre.ca>";

    // Shared CSS styling matching exact website brand identity:
    // Dark Navy: #0F2530 | Slate: #1B3B48 | Forest Green: #2A5243 | Mint Sage: #E8F0EC | Coral: #F57A54 | Gold: #EAA85E | Cream BG: #FBF9F5
    const sharedStyles = `
      body { font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif; background-color: #FBF9F5; color: #1B3B48; margin: 0; padding: 0; -webkit-font-smoothing: antialiased; }
      .wrapper { background-color: #FBF9F5; padding: 24px 12px; }
      .container { max-width: 620px; margin: 0 auto; background: #ffffff; border-radius: 20px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 10px 25px -5px rgba(15, 37, 48, 0.08); }
      
      /* Header Styling */
      .header-bg { background-color: #0F2530; background: linear-gradient(135deg, #0F2530 0%, #1B3B48 100%); padding: 32px 24px; text-align: center; border-bottom: 3px solid #2A5243; }
      .header-pretitle { color: #EAA85E; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 6px 0; }
      .header-title { color: #ffffff; font-size: 22px; font-weight: 900; margin: 0 0 6px 0; letter-spacing: -0.5px; }
      .header-slogan { color: #F57A54; font-size: 13px; font-weight: 800; margin: 0; letter-spacing: 0.5px; }
      
      /* Main Body */
      .content { padding: 32px 28px; }
      .greeting { font-size: 20px; font-weight: 800; color: #1B3B48; margin: 0 0 14px 0; }
      .lead-text { font-size: 14px; line-height: 1.65; color: #475569; margin: 0 0 24px 0; font-weight: 500; }
      
      /* Card Badges & Boxes */
      .badge-container { margin-bottom: 20px; }
      .program-badge { display: inline-block; background-color: #E8F0EC; color: #2A5243; font-weight: 800; padding: 6px 16px; border-radius: 20px; font-size: 13px; border: 1px solid rgba(42, 82, 67, 0.2); }
      
      .details-card { background-color: #F8FAFC; border-radius: 14px; border: 1px solid #E2E8F0; padding: 20px; margin-bottom: 24px; }
      .details-header { font-size: 11px; font-weight: 800; color: #2A5243; text-transform: uppercase; letter-spacing: 0.8px; margin-bottom: 14px; border-bottom: 2px solid #E8F0EC; padding-bottom: 8px; }
      .field-row { margin-bottom: 12px; font-size: 14px; color: #334155; }
      .field-label { font-size: 11px; font-weight: 800; color: #64748b; text-transform: uppercase; display: block; margin-bottom: 2px; }
      .field-value { font-weight: 700; color: #1B3B48; margin: 0; font-size: 15px; }
      .message-quote { background: #ffffff; border-left: 4px solid #F57A54; padding: 14px 16px; border-radius: 8px; font-size: 14px; line-height: 1.6; color: #1B3B48; margin-top: 8px; border-top: 1px solid #f1f5f9; border-right: 1px solid #f1f5f9; border-bottom: 1px solid #f1f5f9; }

      .highlight-box { background-color: #E8F0EC; border-left: 4px solid #2A5243; padding: 18px; border-radius: 12px; font-size: 13px; line-height: 1.6; color: #1B3B48; margin-bottom: 24px; }
      .highlight-box strong { color: #2A5243; }

      /* Locations Section */
      .locations-grid { margin-top: 24px; border-top: 1px solid #E2E8F0; padding-top: 20px; }
      .location-title { font-size: 12px; font-weight: 800; color: #1B3B48; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 10px; }
      .location-card { background: #F8FAFC; border-radius: 10px; padding: 12px 14px; margin-bottom: 10px; font-size: 12px; color: #475569; border: 1px solid #E2E8F0; }
      .location-card strong { color: #1B3B48; }

      /* Footer & Social Section */
      .footer-bg { background-color: #0F2530; padding: 28px 24px; text-align: center; border-top: 1px solid rgba(255,255,255,0.1); }
      .social-heading { color: #6B8E7B; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 12px; display: block; }
      
      .social-btn { display: inline-block; background-color: rgba(255,255,255,0.1); color: #ffffff; text-decoration: none; font-size: 12px; font-weight: 700; padding: 8px 16px; border-radius: 8px; margin: 4px; border: 1px solid rgba(255,255,255,0.15); }
      .social-btn:hover { background-color: #2A5243; }

      .footer-text { color: #94a3b8; font-size: 11px; margin-top: 20px; line-height: 1.6; }
      .footer-text a { color: #EAA85E; text-decoration: none; font-weight: 700; }
    `;

    // 1. Admin Inquiry Notification HTML Template
    const adminHtmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>${sharedStyles}</style>
        </head>
        <body>
          <div class="wrapper">
            <div class="container">
              <div class="header-bg">
                <p class="header-pretitle">New Website Inquiry</p>
                <h1 class="header-title">Hand In Hand Therapy Centre</h1>
                <p class="header-slogan">Together We Can!</p>
              </div>

              <div class="content">
                <div class="badge-container">
                  <span class="program-badge">Program Requested: ${lookingFor}</span>
                </div>

                <div class="details-card">
                  <div class="details-header">Client Contact Details</div>
                  
                  <div class="field-row">
                    <span class="field-label">Full Name</span>
                    <p class="field-value">${name}</p>
                  </div>

                  <div class="field-row">
                    <span class="field-label">Email Address</span>
                    <p class="field-value"><a href="mailto:${email}" style="color: #2A5243; text-decoration: none;">${email}</a></p>
                  </div>

                  <div class="field-row">
                    <span class="field-label">Phone Number</span>
                    <p class="field-value"><a href="tel:${phone}" style="color: #2A5243; text-decoration: none;">${phone}</a></p>
                  </div>

                  <div class="field-row" style="margin-bottom: 0;">
                    <span class="field-label">Situation / Client Notes</span>
                    <div class="message-quote">${situation ? situation : "No details provided."}</div>
                  </div>
                </div>
              </div>

              <div class="footer-bg">
                <span class="social-heading">Hand In Hand Social Channels</span>
                <div>
                  <a href="https://www.facebook.com/profile.php?id=100037961153848" target="_blank" class="social-btn">Therapy Facebook</a>
                  <a href="https://www.instagram.com/handinhandtherapy/" target="_blank" class="social-btn">Therapy Instagram</a>
                  <a href="https://www.facebook.com/profile.php?id=100076041793102" target="_blank" class="social-btn">Next Level Facebook</a>
                  <a href="https://www.instagram.com/hand_in_hand_the_next_level/" target="_blank" class="social-btn">Next Level Instagram</a>
                </div>

                <div class="footer-text">
                  Sent automatically from the website contact form.<br>
                  <a href="https://handinhandtherapy.ca">handinhandtherapy.ca</a>
                </div>
              </div>
            </div>
          </div>
        </body>
      </html>
    `;

    // 2. Customer Auto-Reply Confirmation HTML Template
    const clientAutoReplyHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>${sharedStyles}</style>
        </head>
        <body>
          <div class="wrapper">
            <div class="container">
              <div class="header-bg">
                <p class="header-pretitle">Inquiry Confirmation</p>
                <h1 class="header-title">Hand In Hand Therapy Centre</h1>
                <p class="header-slogan">Together We Can!</p>
              </div>

              <div class="content">
                <h2 class="greeting">Hi ${name},</h2>
                <p class="lead-text">
                  Thank you for connecting with <strong>Hand In Hand Therapy Centre & Adult Day Program</strong>. We have received your request regarding <strong>${lookingFor}</strong> support.
                </p>

                <div class="highlight-box">
                  <strong>What happens next?</strong><br>
                  Our clinical intake team is reviewing your information and will reach out to you promptly (typically within 1 business day) to answer questions, discuss your goals, or schedule a tour.
                </div>

                <div class="details-card">
                  <div class="details-header">Summary of Your Inquiry</div>
                  
                  <div class="field-row">
                    <span class="field-label">Selected Track</span>
                    <p class="field-value">${lookingFor}</p>
                  </div>

                  <div class="field-row">
                    <span class="field-label">Name</span>
                    <p class="field-value">${name}</p>
                  </div>

                  <div class="field-row">
                    <span class="field-label">Email</span>
                    <p class="field-value">${email}</p>
                  </div>

                  <div class="field-row">
                    <span class="field-label">Phone</span>
                    <p class="field-value">${phone}</p>
                  </div>

                  ${situation ? `
                    <div class="field-row" style="margin-bottom: 0;">
                      <span class="field-label">Details Provided</span>
                      <div class="message-quote">${situation}</div>
                    </div>
                  ` : ""}
                </div>

                <div class="locations-grid">
                  <div class="location-title">Our Centers & Direct Contact</div>
                  
                  <div class="location-card">
                    <strong>Concord / Vaughan Center:</strong><br>
                    750 Millway Avenue unit #5, Concord, ON | 📞 <a href="tel:6472809952" style="color: #2A5243; font-weight:700; text-decoration:none;">647-280-9952</a>
                  </div>

                  <div class="location-card">
                    <strong>Bradford Center:</strong><br>
                    465 Holland St W, Unit 3/4, Bradford, ON | 📞 <a href="tel:9052514756" style="color: #2A5243; font-weight:700; text-decoration:none;">(905)-251-4756</a>
                  </div>
                </div>
              </div>

              <div class="footer-bg">
                <span class="social-heading">Connect With Us On Social Media</span>
                <div>
                  <a href="https://www.facebook.com/profile.php?id=100037961153848" target="_blank" class="social-btn">Therapy Facebook</a>
                  <a href="https://www.instagram.com/handinhandtherapy/" target="_blank" class="social-btn">Therapy Instagram</a>
                  <a href="https://www.facebook.com/profile.php?id=100076041793102" target="_blank" class="social-btn">Next Level Facebook</a>
                  <a href="https://www.instagram.com/hand_in_hand_the_next_level/" target="_blank" class="social-btn">Next Level Instagram</a>
                </div>

                <div class="footer-text">
                  Hand In Hand Therapy Centre & Adult Day Program<br>
                  <a href="https://handinhandtherapy.ca">handinhandtherapy.ca</a> | <a href="mailto:info@handinhandtherapycentre.ca">info@handinhandtherapycentre.ca</a>
                </div>
              </div>
            </div>
          </div>
        </body>
      </html>
    `;

    // Send both emails concurrently
    const [adminResult, clientResult] = await Promise.allSettled([
      // 1. Admin Inquiry Notification
      resend.emails.send({
        from: senderEmail,
        to: [destinationEmail],
        replyTo: email,
        subject: `New Website Inquiry: ${name} (${lookingFor})`,
        html: adminHtmlContent,
        text: `New Website Inquiry\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nLooking For: ${lookingFor}\nDetails:\n${situation || "N/A"}`,
      }),
      // 2. Client Auto-Reply Confirmation
      resend.emails.send({
        from: senderEmail,
        to: [email],
        replyTo: destinationEmail,
        subject: `Thank you for contacting Hand In Hand Therapy Centre`,
        html: clientAutoReplyHtml,
        text: `Hi ${name},\n\nThank you for reaching out to Hand In Hand Therapy Centre & Adult Day Program. We have received your inquiry for ${lookingFor} support.\n\nOur clinical intake team will contact you promptly.\n\nHand In Hand Therapy Centre\ninfo@handinhandtherapycentre.ca`,
      }),
    ]);

    if (adminResult.status === "rejected" || (adminResult.status === "fulfilled" && adminResult.value.error)) {
      const err = adminResult.status === "rejected" ? adminResult.reason : adminResult.value.error;
      console.error("Resend Admin Email Error:", err);
      return NextResponse.json(
        { error: err?.message || "Failed to deliver inquiry notification email." },
        { status: 500 }
      );
    }

    if (clientResult.status === "rejected" || (clientResult.status === "fulfilled" && clientResult.value.error)) {
      console.warn("Resend Client Auto-Reply Warning:", clientResult.status === "rejected" ? clientResult.reason : clientResult.value.error);
    }

    return NextResponse.json({ success: true, data: adminResult.value.data });
  } catch (err: any) {
    console.error("Contact API internal error:", err);
    return NextResponse.json(
      { error: err.message || "Internal server error." },
      { status: 500 }
    );
  }
}
