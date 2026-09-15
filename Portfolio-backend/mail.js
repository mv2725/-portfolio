const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'meetvyas255@gmail.com',
    pass: 'oyzlspsdbqsefhwa', // Gmail App Password
  },
});

const sendMail = async (name, email, message) => {
  const mailOptions = {
    from: 'meetvyas255@gmail.com',
    to: 'your-email@gmail.com', // replace with your receiving address
    subject: `New Contact Form Submission from ${name}`,
    text: `
You’ve received a new message from your portfolio:

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
