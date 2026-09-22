const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

const sendMail = async (name, email, message) => {
  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: process.env.CONTACT_RECEIVER_EMAIL,
    subject: `New Contact Form Submission from ${name}`,
    text: `
You've received a new message from your portfolio:

Name: ${name}
Email: ${email}

Message:
${message}
    `.trim(),
    html: `
      <div style="font-family: Arial, sans-serif; padding: 10px;">
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      </div>
    `,
  };

  return await transporter.sendMail(mailOptions);
};

module.exports = sendMail;