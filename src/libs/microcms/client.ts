import { createClient } from 'microcms-js-sdk';

if (!process.env.SERVICE_DOMAIN) {
  throw new Error("SERVICE_DOMAIN is required");
}

if (!process.env.API_KEY) {
  throw new Error("API_KEY is required");
}

export const client = createClient({
  serviceDomain: process.env.SERVICE_DOMAIN,
  apiKey: process.env.API_KEY,
});