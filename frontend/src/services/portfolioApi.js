import { portfolioData } from '../data/data.js';

// ─────────────────────────────────────────────────────────────────────────────
// DATA SOURCE STRATEGY
//
//  • If VITE_API_URL is set in your .env file, the app fetches from that
//    backend URL and falls back to local data.js only on failure.
//  • If VITE_API_URL is NOT set (default / frontend-only mode), the app
//    uses data.js directly — no network request, instant load.
//
//  To edit your portfolio content: update frontend/src/data/data.js
//  To point at a live backend:    set VITE_API_URL=https://your-api.com in .env
// ─────────────────────────────────────────────────────────────────────────────

const BACKEND_URL = import.meta.env.VITE_API_URL; // undefined when not set

class PortfolioAPI {
  constructor() {
    this.cache = null;
  }

  async fetchPortfolio() {
    // ── Frontend-only mode (no backend configured) ──────────────────────────
    if (!BACKEND_URL) {
      console.info('[Portfolio] Using local data.js (no VITE_API_URL set)');
      return portfolioData;
    }

    // ── Backend mode: fetch with a 5-second timeout ─────────────────────────
    if (this.cache) return this.cache;

    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 5000);

      const response = await fetch(`${BACKEND_URL}/api/portfolio`, {
        signal: controller.signal,
      });
      clearTimeout(timeout);

      if (!response.ok) throw new Error(`HTTP ${response.status}`);

      const data = await response.json();
      this.cache = data;
      return data;
    } catch (error) {
      console.warn('[Portfolio] Backend unavailable, falling back to data.js:', error.message);
      return portfolioData;
    }
  }

  clearCache() {
    this.cache = null;
  }

  async refresh() {
    this.clearCache();
    return this.fetchPortfolio();
  }
}

export const portfolioAPI = new PortfolioAPI();
export default portfolioAPI;

// Live coding stats helper (only works when backend is configured)
export async function fetchLiveStats() {
  if (!BACKEND_URL) throw new Error('No backend configured');
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 5000);
  const res = await fetch(`${BACKEND_URL}/api/stats`, { signal: controller.signal });
  clearTimeout(timeout);
  if (!res.ok) throw new Error(`Failed to fetch stats: ${res.status}`);
  return res.json();
}

