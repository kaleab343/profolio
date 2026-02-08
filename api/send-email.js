// Vercel Serverless Function for sending messages via Telegram
module.exports = async (req, res) => {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle OPTIONS request for CORS preflight
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, subject, message } = req.body;

    // Validate input
    if (!name || !message) {
      return res.status(400).json({ error: 'Please provide name and message' });
    }

    // Get Telegram credentials from environment variables
    const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
      console.error('Telegram credentials not configured');
      return res.status(500).json({ 
        error: 'Telegram bot is not configured. Please contact the administrator.' 
      });
    }

    // Format the message for Telegram with proper escaping
    const telegramMessage = `
🔔 *New Portfolio Contact Message*

👤 *Name:* ${name}
${email ? `📧 *Email:* ${email}` : ''}
${subject ? `📝 *Subject:* ${subject}` : ''}

💬 *Message:*
${message}

⏰ *Received:* ${new Date().toLocaleString('en-US', { timeZone: 'Africa/Addis_Ababa' })}
    `.trim();

    // Send message to Telegram
    const telegramApiUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
    
    const response = await fetch(telegramApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: telegramMessage,
        parse_mode: 'Markdown'
      })
    });

    const result = await response.json();

    if (!response.ok || !result.ok) {
      console.error('Telegram API error:', result);
      return res.status(500).json({ 
        error: 'Failed to send message via Telegram.',
        details: result.description || 'Unknown error'
      });
    }

    return res.status(200).json({ 
      success: true, 
      message: 'Message sent successfully via Telegram! Thank you for contacting me.' 
    });

  } catch (error) {
    console.error('Telegram error:', error);
    return res.status(500).json({ 
      error: 'Failed to send message. Please try again later.',
      details: error.message 
    });
  }
};
