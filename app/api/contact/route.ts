import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Email validation helper
const isValidEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export async function POST(request: Request) {
  try {
    // Parse request body
    const { name, email, message } = await request.json();

    // Validate inputs
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'Please provide all required fields.' },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { success: false, error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    // Create transporter with more secure configuration
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // Use TLS
      auth: {
        user: 'munnakushw7@gmail.com',
        pass: process.env.EMAIL_PASSWORD || 'ekow mnxr ewnx xzgr',
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    // Verify SMTP connection
    try {
      await transporter.verify();
      console.log('SMTP connection verified successfully');
    } catch (error) {
      console.error('SMTP verification failed:', error);
      return NextResponse.json(
        { success: false, error: 'Email service configuration error.' },
        { status: 500 }
      );
    }

    // Email content with improved formatting
    const mailOptions = {
      from: {
        name: 'Portfolio Contact Form',
        address: 'munnakushw7@gmail.com'
      },
      to: 'munnakushw7@gmail.com',
      replyTo: email,
      subject: `New Portfolio Contact: ${name}`,
      text: `
Name: ${name}
Email: ${email}
Message: ${message}

This message was sent from your portfolio website's contact form.
      `,
      html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
  <h2 style="color: #2563eb; margin-bottom: 20px;">New Contact Form Submission</h2>
  
  <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
    <p style="margin: 0 0 10px;"><strong>Name:</strong> ${name}</p>
    <p style="margin: 0 0 10px;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></p>
    <p style="margin: 0 0 10px;"><strong>Message:</strong></p>
    <p style="white-space: pre-wrap; margin: 0; padding: 10px; background-color: white; border-radius: 4px;">${message}</p>
  </div>
  
  <p style="color: #6b7280; font-size: 14px; margin-top: 20px; text-align: center;">
    This message was sent from your portfolio website's contact form.
  </p>
</div>
      `,
    };

    try {
      // Send email with timeout
      const emailSent = await Promise.race([
        transporter.sendMail(mailOptions),
        new Promise((_, reject) => 
          setTimeout(() => reject(new Error('Email sending timeout')), 30000)
        )
      ]);

      console.log('Email sent successfully:', emailSent);
      return NextResponse.json({ success: true });
    } catch (error) {
      console.error('Error sending email:', error);
      throw error; // Re-throw to be caught by outer try-catch
    }
  } catch (error: any) { // Type error as any to access message property
    console.error('Contact form error:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to send message. Please try again later.',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    );
  }
} 