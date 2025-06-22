import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { email, subject, message } = req.body;

  try {
    const { data, error } = await resend.emails.send({
      from: 'Jimpa <jimpa.com>',
      to: ['jimpagyatso111@gmail.com'], // just your email for testing
      subject: subject || 'New Contact Message',
      text: `From: ${email}\n\n${message}`
    });

    if (error) {
      console.error(error);
      return res.status(500).json(error);
    }

    return res.status(200).json(data);
  } catch (err) {
    console.error('Unexpected error:', err);
    return res.status(500).json({ message: 'Unexpected error' });
  }
}
