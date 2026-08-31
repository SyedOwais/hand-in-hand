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

    // Shared Header Block with Official Website Logo
    const headerHtml = `
      <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #0F2530; border-bottom: 4px solid #2A5243; text-align: center;">
        <tr>
          <td style="padding: 32px 20px; text-align: center;">
            <table align="center" cellpadding="0" cellspacing="0" border="0" style="margin: 0 auto 16px auto;">
              <tr>
                <td style="background-color: #ffffff; padding: 12px 24px; border-radius: 16px; border: 1px solid #e2e8f0; text-align: center;">
                  <img src="https://handinhandtherapy.ca/images/hand-in-hand-v2.png" alt="Hand In Hand Therapy Centre & Adult Day Program" width="220" style="display: block; width: 220px; max-width: 100%; height: auto; margin: 0 auto; border: 0;" />
                </td>
              </tr>
            </table>
            <div style="color: #EAA85E; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 4px;">
              Hand In Hand Therapy Centre & Adult Day Program
            </div>
            <div style="color: #F57A54; font-size: 14px; font-weight: 800; letter-spacing: 0.5px;">
              Together We Can!
            </div>
          </td>
        </tr>
      </table>
    `;

    // Shared Sleek Professional Footer with Explicitly-Styled Social Badges
    const footerHtml = `
      <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #0F2530; border-top: 3px solid #2A5243; text-align: center;">
        <tr>
          <td style="padding: 36px 24px; text-align: center;">
            
            <div style="color: #ffffff; font-size: 15px; font-weight: 800; margin-bottom: 4px;">
              Hand In Hand Therapy Centre & Adult Day Program
            </div>
            <div style="color: #6B8E7B; font-size: 12px; font-weight: 700; margin-bottom: 24px;">
              Serving York Region & Simcoe County
            </div>

            <!-- Social Media Buttons -->
            <table align="center" cellpadding="0" cellspacing="0" border="0" style="margin: 0 auto 24px auto; max-width: 520px; width: 100%;">
              <tr>
                <td style="padding: 0 8px 16px 8px; text-align: center;" width="50%" valign="top">
                  <div style="color: #EAA85E; font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: 1.2px; margin-bottom: 8px;">
                    Therapy Centre (Ages 2–18)
                  </div>
                  <a href="https://www.facebook.com/profile.php?id=100037961153848" target="_blank" style="display: inline-block; background-color: #1877F2; color: #ffffff !important; text-decoration: none !important; font-size: 11px; font-weight: 800; padding: 8px 14px; border-radius: 20px; margin: 3px;">
                    f Facebook
                  </a>
                  <a href="https://www.instagram.com/handinhandtherapy/" target="_blank" style="display: inline-block; background-color: #E4405F; color: #ffffff !important; text-decoration: none !important; font-size: 11px; font-weight: 800; padding: 8px 14px; border-radius: 20px; margin: 3px;">
                    📷 Instagram
                  </a>
                </td>
                <td style="padding: 0 8px 16px 8px; text-align: center;" width="50%" valign="top">
                  <div style="color: #F57A54; font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: 1.2px; margin-bottom: 8px;">
                    The Next Level (Ages 18+)
                  </div>
                  <a href="https://www.facebook.com/profile.php?id=100076041793102" target="_blank" style="display: inline-block; background-color: #1877F2; color: #ffffff !important; text-decoration: none !important; font-size: 11px; font-weight: 800; padding: 8px 14px; border-radius: 20px; margin: 3px;">
                    f Facebook
                  </a>
                  <a href="https://www.instagram.com/hand_in_hand_the_next_level/" target="_blank" style="display: inline-block; background-color: #E4405F; color: #ffffff !important; text-decoration: none !important; font-size: 11px; font-weight: 800; padding: 8px 14px; border-radius: 20px; margin: 3px;">
                    📷 Instagram
                  </a>
                </td>
              </tr>
            </table>

            <!-- Divider -->
            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 20px;">
              <tr>
                <td style="border-top: 1px solid rgba(255,255,255,0.12);"></td>
              </tr>
            </table>

            <!-- Links -->
            <div style="color: #94a3b8; font-size: 12px; line-height: 1.8;">
              Website: <a href="https://handinhandtherapy.ca" style="color: #EAA85E !important; text-decoration: none !important; font-weight: 700;">handinhandtherapy.ca</a><br>
              Email: <a href="mailto:info@handinhandtherapycentre.ca" style="color: #EAA85E !important; text-decoration: none !important; font-weight: 700;">info@handinhandtherapycentre.ca</a>
            </div>
            <div style="color: #64748b; font-size: 11px; margin-top: 12px;">
              © ${new Date().getFullYear()} Hand In Hand Therapy Centre & Adult Day Program. All Rights Reserved.
            </div>

          </td>
        </tr>
      </table>
    `;

    // 1. Admin Inquiry Notification HTML Template
    const adminHtmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
        </head>
        <body style="font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif; background-color: #FBF9F5; color: #1B3B48; margin: 0; padding: 24px 12px;">
          <table width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width: 620px; margin: 0 auto; background: #ffffff; border-radius: 20px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 10px 25px -5px rgba(15, 37, 48, 0.08);">
            <tr>
              <td>
                ${headerHtml}

                <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #ffffff;">
                  <tr>
                    <td style="padding: 32px 28px;">
                      
                      <div style="margin-bottom: 20px;">
                        <span style="display: inline-block; background-color: #E8F0EC; color: #2A5243; font-weight: 800; padding: 6px 16px; border-radius: 20px; font-size: 12px; border: 1px solid rgba(42, 82, 67, 0.2); text-transform: uppercase; letter-spacing: 0.5px;">
                          🔔 New Website Inquiry
                        </span>
                      </div>

                      <h2 style="font-size: 20px; font-weight: 800; color: #1B3B48; margin: 0 0 16px 0;">
                        Inquiry Details
                      </h2>

                      <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 14px; margin-bottom: 24px;">
                        <tr>
                          <td style="padding: 20px;">
                            
                            <div style="margin-bottom: 14px;">
                              <span style="font-size: 11px; font-weight: 800; color: #64748b; text-transform: uppercase; display: block; margin-bottom: 2px;">Requested Track</span>
                              <span style="font-size: 16px; font-weight: 800; color: #2A5243; display: block;">${lookingFor}</span>
                            </div>

                            <div style="margin-bottom: 14px;">
                              <span style="font-size: 11px; font-weight: 800; color: #64748b; text-transform: uppercase; display: block; margin-bottom: 2px;">Full Name</span>
                              <span style="font-size: 15px; font-weight: 700; color: #1B3B48; display: block;">${name}</span>
                            </div>

                            <div style="margin-bottom: 14px;">
                              <span style="font-size: 11px; font-weight: 800; color: #64748b; text-transform: uppercase; display: block; margin-bottom: 2px;">Email Address</span>
                              <a href="mailto:${email}" style="font-size: 15px; font-weight: 700; color: #2A5243 !important; text-decoration: none !important;">${email}</a>
                            </div>

                            <div style="margin-bottom: 14px;">
                              <span style="font-size: 11px; font-weight: 800; color: #64748b; text-transform: uppercase; display: block; margin-bottom: 2px;">Phone Number</span>
                              <a href="tel:${phone}" style="font-size: 15px; font-weight: 700; color: #2A5243 !important; text-decoration: none !important;">${phone}</a>
                            </div>

                            <div>
                              <span style="font-size: 11px; font-weight: 800; color: #64748b; text-transform: uppercase; display: block; margin-bottom: 4px;">Client Notes / Situation</span>
                              <div style="background-color: #ffffff; border-left: 4px solid #F57A54; border: 1px solid #e2e8f0; border-left-width: 4px; border-left-color: #F57A54; padding: 14px 16px; border-radius: 8px; font-size: 14px; line-height: 1.6; color: #1B3B48;">${situation ? situation : "No details provided."}</div>
                            </div>

                          </td>
                        </tr>
                      </table>

                    </td>
                  </tr>
                </table>

                ${footerHtml}
              </td>
            </tr>
          </table>
        </body>
      </html>
    `;

    // 2. Customer Auto-Reply Confirmation HTML Template
    const clientAutoReplyHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
        </head>
        <body style="font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif; background-color: #FBF9F5; color: #1B3B48; margin: 0; padding: 24px 12px;">
          <table width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width: 620px; margin: 0 auto; background: #ffffff; border-radius: 20px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 10px 25px -5px rgba(15, 37, 48, 0.08);">
            <tr>
              <td>
                ${headerHtml}

                <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #ffffff;">
                  <tr>
                    <td style="padding: 32px 28px;">
                      
                      <div style="margin-bottom: 20px;">
                        <span style="display: inline-block; background-color: #E8F0EC; color: #2A5243; font-weight: 800; padding: 6px 16px; border-radius: 20px; font-size: 12px; border: 1px solid rgba(42, 82, 67, 0.2); text-transform: uppercase; letter-spacing: 0.5px;">
                          ✓ Inquiry Received
                        </span>
                      </div>

                      <h2 style="font-size: 20px; font-weight: 800; color: #1B3B48; margin: 0 0 12px 0;">
                        Hi ${name},
                      </h2>
                      <p style="font-size: 14px; line-height: 1.65; color: #475569; margin: 0 0 24px 0; font-weight: 500;">
                        Thank you for reaching out to <strong>Hand In Hand Therapy Centre & Adult Day Program</strong>. We have received your inquiry for <strong>${lookingFor}</strong> support.
                      </p>

                      <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 24px;">
                        <tr>
                          <td style="background-color: #E8F0EC; border-left: 4px solid #2A5243; padding: 18px 20px; border-radius: 0 12px 12px 0;">
                            <div style="font-size: 12px; font-weight: 800; color: #2A5243; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px;">
                              What Happens Next?
                            </div>
                            <div style="font-size: 13px; line-height: 1.6; color: #1B3B48;">
                              Our clinical intake team is reviewing your information and will reach out to you promptly (typically within 1 business day) to answer questions, discuss your goals, or arrange a clinic tour.
                            </div>
                          </td>
                        </tr>
                      </table>

                      <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 14px; margin-bottom: 28px;">
                        <tr>
                          <td style="padding: 20px;">
                            <div style="font-size: 11px; font-weight: 800; color: #2A5243; text-transform: uppercase; letter-spacing: 0.8px; margin-bottom: 14px; border-bottom: 2px solid #E8F0EC; padding-bottom: 8px;">
                              Summary of Your Submission
                            </div>
                            
                            <div style="margin-bottom: 12px;">
                              <span style="font-size: 11px; font-weight: 800; color: #64748b; text-transform: uppercase; display: block; margin-bottom: 2px;">Selected Track</span>
                              <span style="font-size: 15px; font-weight: 700; color: #1B3B48; display: block;">${lookingFor}</span>
                            </div>

                            <div style="margin-bottom: 12px;">
                              <span style="font-size: 11px; font-weight: 800; color: #64748b; text-transform: uppercase; display: block; margin-bottom: 2px;">Full Name</span>
                              <span style="font-size: 15px; font-weight: 700; color: #1B3B48; display: block;">${name}</span>
                            </div>

                            <div style="margin-bottom: 12px;">
                              <span style="font-size: 11px; font-weight: 800; color: #64748b; text-transform: uppercase; display: block; margin-bottom: 2px;">Email Address</span>
                              <a href="mailto:${email}" style="font-size: 15px; font-weight: 700; color: #2A5243 !important; text-decoration: none !important;">${email}</a>
                            </div>

                            <div style="margin-bottom: 12px;">
                              <span style="font-size: 11px; font-weight: 800; color: #64748b; text-transform: uppercase; display: block; margin-bottom: 2px;">Phone Number</span>
                              <a href="tel:${phone}" style="font-size: 15px; font-weight: 700; color: #2A5243 !important; text-decoration: none !important;">${phone}</a>
                            </div>

                            ${situation ? `
                              <div>
                                <span style="font-size: 11px; font-weight: 800; color: #64748b; text-transform: uppercase; display: block; margin-bottom: 4px;">Details Shared</span>
                                <div style="background-color: #ffffff; border-left: 4px solid #F57A54; border: 1px solid #e2e8f0; border-left-width: 4px; border-left-color: #F57A54; padding: 14px 16px; border-radius: 8px; font-size: 14px; line-height: 1.6; color: #1B3B48;">${situation}</div>
                              </div>
                            ` : ""}
                          </td>
                        </tr>
                      </table>

                      <div style="font-size: 12px; font-weight: 800; color: #1B3B48; text-transform: uppercase; letter-spacing: 0.8px; margin-bottom: 12px;">
                        Our Centers & Direct Contact
                      </div>
                      
                      <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 12px; margin-bottom: 10px;">
                        <tr>
                          <td style="padding: 14px 16px;">
                            <div style="font-size: 13px; font-weight: 800; color: #1B3B48; margin-bottom: 2px;">
                              Concord / Vaughan Center (Therapy & Adult Day Program)
                            </div>
                            <div style="font-size: 12px; color: #475569; margin-bottom: 6px;">
                              750 Millway Avenue unit #5, Concord, ON
                            </div>
                            <a href="tel:6472809952" style="display: inline-block; background-color: #1B3B48; color: #ffffff !important; font-size: 11px; font-weight: 800; text-decoration: none !important; padding: 6px 14px; border-radius: 20px;">
                              📞 Call: 647-280-9952
                            </a>
                          </td>
                        </tr>
                      </table>

                      <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 12px;">
                        <tr>
                          <td style="padding: 14px 16px;">
                            <div style="font-size: 13px; font-weight: 800; color: #1B3B48; margin-bottom: 2px;">
                              Bradford Center (Therapy & Community Programs)
                            </div>
                            <div style="font-size: 12px; color: #475569; margin-bottom: 6px;">
                              465 Holland St W, Unit 3/4, Bradford, ON
                            </div>
                            <a href="tel:9052514756" style="display: inline-block; background-color: #2A5243; color: #ffffff !important; font-size: 11px; font-weight: 800; text-decoration: none !important; padding: 6px 14px; border-radius: 20px;">
                              📞 Call: (905)-251-4756
                            </a>
                          </td>
                        </tr>
                      </table>

                    </td>
                  </tr>
                </table>

                ${footerHtml}
              </td>
            </tr>
          </table>
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
