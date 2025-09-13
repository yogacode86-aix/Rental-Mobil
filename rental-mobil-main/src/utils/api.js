// Selalu fallback ke Railway jika env tidak ada
export const API_URL = (
  process.env.NEXT_PUBLIC_API_URL || 'https://uji-coba-production-7dc8.up.railway.app/api'
).replace(/\/+$/, '');