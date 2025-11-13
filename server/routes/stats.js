import express from 'express';
import Portfolio from '../models/Portfolio.js';
import { computeStats } from '../services/statsService.js';

const router = express.Router();

// Simple in-memory cache to reduce external calls
const cache = {
  data: null,
  ts: 0,
  ttlMs: 10 * 60 * 1000 // 10 minutes
};

// computeStats imported from service

router.get('/', async (req, res) => {
  try {
    const now = Date.now();
    if (cache.data && now - cache.ts < cache.ttlMs) {
      return res.json({ cached: true, ...cache.data });
    }
    const data = await computeStats();
    cache.data = data;
    cache.ts = now;
    return res.json({ cached: false, ...data });
  } catch (err) {
    console.error('Error fetching stats:', err);
    res.status(500).json({ error: 'Failed to fetch stats' });
  }
});

// Manual refresh endpoint (no auth here; add auth if deploying publicly)
router.post('/refresh', async (req, res) => {
  try {
    const data = await computeStats();
    cache.data = data;
    cache.ts = Date.now();
    res.json({ refreshed: true, ...data });
  } catch (err) {
    console.error('Error refreshing stats:', err);
    res.status(500).json({ error: 'Failed to refresh stats' });
  }
});

export default router;


