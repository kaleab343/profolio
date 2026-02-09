// Simple Express server for development to handle Telegram API calls
const express = require('express');
const cors = require('cors');
const https = require('https');

const app = express();
const PORT = 3001;

const TELEGRAM_BOT_TOKEN = "8220132078:AAGKRnRm_MTHHPOdvqZ4zoWzAxIUvBFnhWk";
const TELEGRAM_CHAT_ID = "500761652";

app.use(cors());
app.use(express.json());

app.post('/api/send-email', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !message) {
      return res.status(400).json({ error: 'Please provide name and message' });
    }

    const telegramMessage = `
🔔 *New Portfolio Contact Message*

👤 *Name:* ${name}
${email ? `📧 *Email:* ${email}` : ''}
${subject ? `📝 *Subject:* ${subject}` : ''}

💬 *Message:*
${message}

⏰ *Received:* ${new Date().toLocaleString('en-US', { timeZone: 'Africa/Addis_Ababa' })}
    `.trim();

    const postData = JSON.stringify({
      chat_id: TELEGRAM_CHAT_ID,
      text: telegramMessage,
      parse_mode: 'Markdown'
    });

    const options = {
      hostname: 'api.telegram.org',
      port: 443,
      path: `/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData)
      }
    };

    const request = https.request(options, (response) => {
      let data = '';

      response.on('data', (chunk) => {
        data += chunk;
      });

      response.on('end', () => {
        try {
          const result = JSON.parse(data);
          
          if (result.ok) {
            res.status(200).json({ 
              success: true, 
              message: 'Message sent successfully via Telegram!' 
            });
          } else {
            console.error('Telegram error:', result);
            res.status(500).json({ 
              error: 'Failed to send message via Telegram.',
              details: result.description 
            });
          }
        } catch (e) {
          console.error('Parse error:', e);
          res.status(500).json({ error: 'Failed to parse Telegram response' });
        }
      });
    });

    request.on('error', (error) => {
      console.error('Request error:', error);
      res.status(500).json({ 
        error: 'Failed to send message. Please try again later.',
        details: error.message 
      });
    });

    request.write(postData);
    request.end();
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ 
      error: 'Server error. Please try again later.',
      details: error.message 
    });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Development API server running on http://localhost:${PORT}`);
  console.log(`📧 Telegram contact form endpoint ready at http://localhost:${PORT}/api/send-email`);
});
