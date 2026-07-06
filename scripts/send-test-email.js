try {
  require('dotenv').config({ path: '.env.local' });
} catch (err) {
  // dotenv not installed — OK if env vars are already provided in the environment
}

const nodemailer = require('nodemailer');

(async () => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: process.env.SMTP_SECURE === 'true' || process.env.SMTP_PORT === '465',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.verify();
    console.log('SMTP connection verified');

    const info = await transporter.sendMail({
      from: process.env.CONTACT_FROM,
      to: process.env.CONTACT_TO,
      subject: 'Test email from repo script',
      text: 'This is a test email sent from scripts/send-test-email.js',
    });

    console.log('Send result:', { accepted: info.accepted, rejected: info.rejected, messageId: info.messageId });
  } catch (err) {
    console.error('Error sending test email:', err);
    process.exitCode = 1;
  }
})();
