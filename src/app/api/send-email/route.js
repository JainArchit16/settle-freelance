// pages/api/send-email.js
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const createAdminEmail = (data) => `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>New Contact Form Submission</title>
</head>
<body style="margin: 0; padding: 20px; font-family: Arial, sans-serif;">
    <div style="max-width: 600px; margin: 0 auto; background: #f8f9fa; border-radius: 10px; padding: 30px;">
        <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #2563eb; font-size: 28px; margin: 0;">New Contact Request</h1>
            <p style="color: #6b7280; margin-top: 10px;">Website Contact Form Submission</p>
        </div>
        
        <div style="background: white; border-radius: 8px; padding: 25px;">
            <h2 style="color: #1f2937; font-size: 20px; margin-top: 0;">Contact Details:</h2>
            <table style="width: 100%; border-collapse: collapse;">
                <tr>
                    <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; color: #4b5563;">Name:</td>
                    <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; color: #1f2937; font-weight: 500;">${data.name}</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; color: #4b5563;">Email:</td>
                    <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; color: #1f2937; font-weight: 500;">${data.email}</td>
                </tr>
                <tr>
                    <td style="padding: 10px; color: #4b5563;">Phone:</td>
                    <td style="padding: 10px; color: #1f2937; font-weight: 500;">${data.phone}</td>
                </tr>
            </table>
        </div>
        
        <div style="margin-top: 30px; text-align: center; color: #6b7280; font-size: 14px;">
            <p>This email was sent from your website contact form.</p>
        </div>
    </div>
</body>
</html>
`;

const createCustomerEmail = (data) => `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>Thank You for Contacting Us</title>
</head>
<body style="margin: 0; padding: 20px; font-family: Arial, sans-serif;">
    <div style="max-width: 600px; margin: 0 auto; background: #f8f9fa; border-radius: 10px; padding: 30px;">
        <div style="text-align: center; margin-bottom: 30px;">
            
            <h1 style="color: #2563eb; font-size: 28px; margin: 20px 0;">Thank You, ${data.name}!</h1>
        </div>
        
        <div style="background: white; border-radius: 8px; padding: 25px; text-align: center;">
            <p style="color: #4b5563; font-size: 16px; line-height: 1.6;">
                We've received your inquiry and our team will get back to you within 24 hours.
            </p>
            <div style="margin: 30px 0;">
                <a href="https://yourwebsite.com" 
                   style="background: #2563eb; color: white; padding: 12px 25px; 
                          text-decoration: none; border-radius: 5px; display: inline-block;
                          font-weight: 500; transition: background 0.3s;">
                    Visit Our Website
                </a>
            </div>
        </div>
        
        <div style="margin-top: 30px; text-align: center; color: #6b7280; font-size: 14px;">
            <p>This is an automated message. Please do not reply to this email.</p>
            <p style="margin-top: 10px;">© 2025 Settle Mitra. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
`;

export async function POST(request) {
  const { name, email, phone } = await request.json();

  // Validation
  if (!name || !email || !phone) {
    return NextResponse.json(
      { message: "All fields are required" },
      { status: 400 }
    );
  }

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 587,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send email to admin
    await transporter.sendMail({
      from: `"Website Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject: `New Contact Request from ${name}`,
      html: createAdminEmail({ name, email, phone }),
    });

    // Send confirmation email to customer
    await transporter.sendMail({
      from: `"Settle Mitra" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Thank You for Contacting Us",
      html: createCustomerEmail({ name }),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json(
      { message: "Failed to send emails" },
      { status: 500 }
    );
  }
}
