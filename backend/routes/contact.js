import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import Portfolio from '../models/Portfolio.js';

dotenv.config();

const router = express.Router();

function buildTransporter() {
  if (process.env.SMTP_HOST) {
    return nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: process.env.SMTP_SECURE === 'true',
      auth: process.env.SMTP_USER && process.env.SMTP_PASS ? {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      } : undefined
    });
  }
  // Fallback: Gmail OAuth-less using app password or normal password if enabled
  if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
    return nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });
  }
  throw new Error('Email transport is not configured. Provide SMTP_* or EMAIL_USER/EMAIL_PASS env vars.');
}

router.post('/', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body || {};
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const portfolio = await Portfolio.findOne().lean();
    const toEmail = portfolio?.email || process.env.CONTACT_EMAIL;
    if (!toEmail) {
      return res.status(500).json({ error: 'Recipient email not configured' });
    }

    const transporter = buildTransporter();

    const mailOptions = {
      from: process.env.FROM_EMAIL || process.env.EMAIL_USER || 'no-reply@portfolio.local',
      to: toEmail,
      subject: `[Portfolio] ${subject}`,
      replyTo: email,
      text: `New message from ${name} <${email}>\n\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.5;">
          <h2>New Portfolio Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br/>')}</p>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);
    res.json({ success: true });
  } catch (err) {
    console.error('Contact send error:', err);
    res.status(500).json({ error: 'Failed to send message' });
  }
});

export default router;


