const nodemailer = require('nodemailer');

async function main() {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'your-email@gmail.com',
      pass: 'your-app-password', // use App Password here
    },
  });

  try {
    const info = await transporter.sendMail({
      from: 'your-email@gmail.com',
      to: 'your-email@gmail.com',
      subject: 'Test email from Nodemailer',
      text: 'Hello, this is a test email!',
    });
    console.log('Test email sent:', info.response);
  } catch (error) {
    console.error('Error sending test email:', error);
  }
}

main();
