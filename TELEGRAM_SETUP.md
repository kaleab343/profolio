# Telegram Integration Setup

This portfolio now uses **Telegram Bot** instead of email for the contact form. Messages from the contact form are sent directly to your Telegram account.

## ✅ Features

- 📱 Instant notifications via Telegram
- 🚀 No email server configuration needed
- 🔒 Secure bot token authentication
- 💬 Rich message formatting with emojis
- ⚡ Fast and reliable delivery

## 🔧 Setup Instructions

### Step 1: Create a Telegram Bot

1. Open Telegram and search for `@BotFather`
2. Send `/newbot` command
3. Follow the instructions to:
   - Choose a name for your bot (e.g., "My Portfolio Bot")
   - Choose a username for your bot (must end in 'bot', e.g., "myportfolio_contact_bot")
4. BotFather will give you a **Bot Token** (looks like: `123456789:ABCdefGHIjklMNOpqrsTUVwxyz`)
5. **Save this token securely!**

### Step 2: Get Your Chat ID

1. Start a chat with your new bot by clicking the link BotFather provides
2. Send any message to your bot (e.g., "Hello")
3. Open this URL in your browser (replace `YOUR_BOT_TOKEN` with your actual token):
   ```
   https://api.telegram.org/botYOUR_BOT_TOKEN/getUpdates
   ```
4. Look for the `"chat":{"id":` field in the response
5. The number after `"id":` is your **Chat ID** (e.g., `500761652`)

### Step 3: Configure Environment Variables

For **Vercel Deployment**:

1. Go to your Vercel project settings
2. Navigate to "Environment Variables"
3. Add these two variables:
   - `TELEGRAM_BOT_TOKEN` = Your bot token
   - `TELEGRAM_CHAT_ID` = Your chat ID

For **Local Development**:

1. Create a `.env` file in the project root (if it doesn't exist)
2. Add these lines:
   ```env
   TELEGRAM_BOT_TOKEN=YOUR_BOT_TOKEN_HERE
   TELEGRAM_CHAT_ID=YOUR_CHAT_ID_HERE
   ```
3. Make sure `.env` is in your `.gitignore` (it should be by default)

### Step 4: Deploy

Once environment variables are set:

- **Vercel**: Just push your code - it will automatically deploy
- **Local**: Run `npm start` to test locally

## 📝 How It Works

1. User fills out the contact form on your portfolio
2. Form data is sent to `/api/send-email` endpoint (Vercel Serverless Function)
3. The serverless function formats the message and sends it to Telegram Bot API
4. You receive an instant notification on Telegram with:
   - 👤 Sender's name
   - 📧 Sender's email (if provided)
   - 📝 Subject (if provided)
   - 💬 Message content
   - ⏰ Timestamp

## 🎨 Message Format

Messages arrive in Telegram formatted like this:

```
🔔 New Portfolio Contact Message

👤 Name: John Doe
📧 Email: john@example.com
📝 Subject: Job Opportunity

💬 Message:
Hello, I would like to discuss a potential project...

⏰ Received: 2/9/2026, 2:45:30 AM
```

## 🔒 Security Notes

- **Never commit your bot token or chat ID to Git**
- The `.env` file is gitignored by default
- Bot tokens should be treated like passwords
- If your token is compromised, revoke it via BotFather and create a new one

## 🧪 Testing

A test script is provided to verify your Telegram integration:

```bash
node tmp_rovodev_test_api.js
```

This will send a test message to your Telegram to confirm everything is working.

## 🆘 Troubleshooting

### "Telegram bot is not configured" error
- Make sure `TELEGRAM_BOT_TOKEN` and `TELEGRAM_CHAT_ID` are set in your environment variables
- Check that there are no extra spaces or quotes in the values

### Not receiving messages
- Verify you've started a chat with your bot (send it a message first)
- Check that your Chat ID is correct by visiting the getUpdates URL
- Ensure your bot token is valid

### Messages not formatted correctly
- The API uses Markdown formatting
- If special characters cause issues, they will appear as plain text

## 📚 Additional Resources

- [Telegram Bot API Documentation](https://core.telegram.org/bots/api)
- [BotFather Commands](https://core.telegram.org/bots#6-botfather)
- [Vercel Environment Variables](https://vercel.com/docs/concepts/projects/environment-variables)

## 🎉 What Changed from Email

### Removed:
- ❌ Nodemailer dependency
- ❌ Email server configuration
- ❌ Email validation requirements
- ❌ SMTP credentials

### Added:
- ✅ Telegram Bot API integration
- ✅ Instant notifications
- ✅ Simpler configuration
- ✅ More reliable delivery
- ✅ Optional email field (instead of required)

---

**Need help?** Contact me via the same Telegram bot! 😊
