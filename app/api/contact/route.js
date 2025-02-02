
// app/api/contact/route.js
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const body = await request.json();
    
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false,
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD
      }
        ,
        tls: {
          rejectUnauthorized: false,
          minVersion: 'TLSv1.2'

        }
    });

    const mailOptions = {
      from:  process.env.FROM_EMAIL,
      to:  body.email,
      name:"Concept",
      
      subject: 'New Quotation Submission',
      html: `
        <div style="max-width: 600px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif;">
          <div style="background-color: #f8f9fa; padding: 30px; border-radius: 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h1 style="color: #1a365d; text-align: center; margin-bottom: 30px; font-size: 24px;">Thank You for Contacting Concept Future</h1>
            
            <div style="background-color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h2 style="color: #2d3748; font-size: 18px; margin-bottom: 15px;">Your Message Details:</h2>
              <p style="color: #4a5568; margin-bottom: 10px;"><strong>From:</strong> ${body.email}</p>
              <p style="color: #4a5568; line-height: 1.6;"><strong>Message:</strong><br>${body.comments}</p>
            </div>

            <p style="color: #4a5568; text-align: center; line-height: 1.6;">
              We have received your quotation request and our team will review it shortly.<br>
              We aim to respond to all inquiries within 24-48 business hours.
            </p>
            
            <div style="text-align: center; margin-top: 30px; color: #718096; font-size: 14px;">
              <p>Best Regards,<br>The Concept Future Team</p>
            </div>
          </div>
        </div>
      `
    };


    const info = await transporter.sendMail(mailOptions);
    console.log('Server responded with "%s"', info);
    
    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json(
      { message: 'Failed to send email' },
      { status: 500 }
    );
  }
}