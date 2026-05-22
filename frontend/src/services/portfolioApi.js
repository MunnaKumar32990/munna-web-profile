import { portfolioData } from '../data/data.js';

// Use relative URL for development (uses Vite proxy) or full URL from env
const API_BASE_URL = import.meta.env.VITE_API_URL || '/api';

class PortfolioAPI {
  constructor() {
    this.baseURL = API_BASE_URL;
    this.cache = null;
    this.cacheTime = null;
    this.CACHE_DURATION = 0; // Disable cache temporarily
  }

  async fetchPortfolio() {
    // Check cache
    if (this.cache && this.cacheTime && Date.now() - this.cacheTime < this.CACHE_DURATION) {
      return this.cache;
    }

    try {
      const response = await fetch(`${this.baseURL}/portfolio`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      // Update cache
      this.cache = data;
      this.cacheTime = Date.now();
      
      return data;
    } catch (error) {
      console.warn('API unavailable, using fallback data:', error.message);
      return portfolioData;
    }
  }

  clearCache() {
    this.cache = null;
    this.cacheTime = null;
  }

  // Force refresh - clear cache and fetch fresh data
  async refresh() {
    this.clearCache();
    return await this.fetchPortfolio();
  }
}

// Export singleton instance
export const portfolioAPI = new PortfolioAPI();
export default portfolioAPI;

// Extra helper to fetch live coding stats
export async function fetchLiveStats() {
  const baseURL = import.meta.env.VITE_API_URL || '/api';
  const res = await fetch(`${baseURL}/stats`);
  if (!res.ok) {
    throw new Error(`Failed to fetch stats: ${res.status}`);
  }
  return res.json();
}

