const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const sendMail = require('./mail');

const app = express();
const submittedEmails = new Set();

app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
}));
app.use(express.json());

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: { message: 'Too many requests, please try again later.' },
});

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

app.post('/contact', contactLimiter, async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Name, email, and message are required.' });
  }
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: 'Invalid email address.' });
  }
  if (name.length > 100 || message.length > 2000) {
    return res.status(400).json({ message: 'Input too long.' });
  }
  if (submittedEmails.has(email)) {
    return res.status(403).json({ message: 'Email already used to submit a message.' });
  }

  try {
    await sendMail(name, email, message);
    submittedEmails.add(email);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to send email' });
  }
});

app.get('/', (req, res) => {
  res.send('Backend is running');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});