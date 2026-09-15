const express = require('express');
const cors = require('cors');
const sendMail = require('./mail');

const app = express();
const submittedEmails = new Set();

app.use(cors());
app.use(express.json());

app.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;

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

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
