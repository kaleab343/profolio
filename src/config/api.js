// API configuration for development and production

const isDevelopment = process.env.NODE_ENV === 'development';
const isProduction = process.env.NODE_ENV === 'production';

// Get API base URL
export const getApiUrl = () => {
  // In production (Vercel), use relative URL
  if (isProduction) {
    return '/api';
  }
  
  // In development, use direct Telegram API
  return null; // Will use direct Telegram call
};

export const API_ENDPOINTS = {
  SEND_EMAIL: '/send-email'
};

export { isDevelopment, isProduction };
