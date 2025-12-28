import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    const fromEmail = process.env.RESEND_FROM_EMAIL!;
    const toEmail = process.env.RESEND_TO_EMAIL!;

    // Send notification to you
    await resend.emails.send({
      from: `Xuan Hoang Contact <${fromEmail}>`,
      to: toEmail,
      replyTo: email,
      subject: `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; background-color: #000000;" bgcolor="#000000">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#000000">
    <tr>
      <td align="center" bgcolor="#000000" style="padding: 40px 20px;">
        <table width="600" cellpadding="0" cellspacing="0" border="0" bgcolor="#0a0a0a" style="border: 1px solid #222; border-radius: 12px; overflow: hidden;">
          
          <!-- Header -->
          <tr>
            <td style="padding: 32px; border-bottom: 1px solid #222;" bgcolor="#0a0a0a">
              <p style="margin: 0 0 8px 0; font-size: 11px; font-weight: 600; letter-spacing: 1px; color: #facc15; text-transform: uppercase; font-family: Arial, sans-serif;">
                New Contact
              </p>
              <h1 style="margin: 0 0 8px 0; font-size: 28px; font-weight: 700; color: #ffffff; font-family: Arial, sans-serif;">
                ${name}
              </h1>
              <a href="mailto:${email}" style="font-size: 14px; color: #888888; text-decoration: none; font-family: Arial, sans-serif;">
                ${email}
              </a>
            </td>
          </tr>
          
          <!-- Message -->
          <tr>
            <td style="padding: 32px;" bgcolor="#0a0a0a">
              <p style="margin: 0 0 16px 0; font-size: 11px; font-weight: 600; letter-spacing: 1px; color: #666666; text-transform: uppercase; font-family: Arial, sans-serif;">
                Message
              </p>
              <p style="margin: 0; font-size: 16px; line-height: 1.8; color: #e0e0e0; font-family: Arial, sans-serif;">
                ${message.replace(/\n/g, "<br>")}
              </p>
            </td>
          </tr>
          
          <!-- Reply Button -->
          <tr>
            <td style="padding: 0 32px 32px 32px;" bgcolor="#0a0a0a">
              <a href="mailto:${email}" style="display: inline-block; padding: 14px 28px; background-color: #facc15; color: #000000; font-size: 14px; font-weight: 600; text-decoration: none; font-family: Arial, sans-serif;">
                Reply to ${name}
              </a>
            </td>
          </tr>
          
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
      `,
    });

    // Send confirmation to user
    await resend.emails.send({
      from: `Xuan Hoang Ha <${fromEmail}>`,
      to: email,
      subject: `Thanks for your message!`,
      text: `Hi ${name},\n\nThanks for reaching out! I've received your message and will get back to you as soon as possible.\n\nYour message:\n${message}\n\nBest regards,\nXuan Hoang Ha\nxuanhoang.space`,
      html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; background-color: #000000;" bgcolor="#000000">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#000000">
    <tr>
      <td align="center" bgcolor="#000000" style="padding: 40px 20px;">
        <table width="500" cellpadding="0" cellspacing="0" border="0" bgcolor="#0a0a0a" style="border: 1px solid #222; border-radius: 12px; overflow: hidden;">
          <tr>
            <td style="padding: 32px; border-bottom: 1px solid #222;" bgcolor="#0a0a0a">
              <h1 style="margin: 0; font-size: 24px; font-weight: 700; color: #ffffff; font-family: Arial, sans-serif;">Thanks for your message, ${name}!<span style="color: #facc15;">.</span></h1>
            </td>
          </tr>
          <tr>
            <td style="padding: 24px 32px;" bgcolor="#0a0a0a">
              <p style="margin: 0 0 20px 0; font-size: 15px; line-height: 1.6; color: #a0a0a0; font-family: Arial, sans-serif;">Hi ${name}, thanks for reaching out! I've received your message and will get back to you as soon as possible.</p>
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="background-color: #111111; padding: 20px; border-left: 3px solid #facc15;" bgcolor="#111111">
                    <p style="margin: 0 0 8px 0; font-size: 10px; font-weight: 600; letter-spacing: 1px; color: #666666; text-transform: uppercase; font-family: Arial, sans-serif;">Your Message</p>
                    <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #e0e0e0; font-family: Arial, sans-serif;">${message.replace(/\n/g, "<br>")}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding: 24px 32px; border-top: 1px solid #222;" bgcolor="#0a0a0a">
              <p style="margin: 0 0 4px 0; font-size: 14px; color: #666666; font-family: Arial, sans-serif;">Best regards,</p>
              <p style="margin: 0 0 16px 0; font-size: 16px; font-weight: 600; color: #ffffff; font-family: Arial, sans-serif;">Xuan Hoang Ha</p>
              <a href="https://xuanhoang.space" style="font-size: 13px; color: #facc15; text-decoration: none; font-family: Arial, sans-serif;">xuanhoang.space</a>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
