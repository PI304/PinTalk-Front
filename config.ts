export const CONFIG = {
  DOMAIN: process.env.NEXT_PUBLIC_DOMAIN,
  API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
  ENV: process.env.NODE_ENV,
  AUTH_TOKEN_KEY: process.env.NEXT_PUBLIC_AUTH_TOKEN_KEY,
} as const;
