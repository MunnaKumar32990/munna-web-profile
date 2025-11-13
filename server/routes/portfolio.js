import express from 'express';
import Portfolio from '../models/Portfolio.js';
import { computeStats } from '../services/statsService.js';

const router = express.Router();

// Get all portfolio data
router.get('/', async (req, res) => {
  try {
    // Get the first (and only) portfolio document
    const portfolio = await Portfolio.findOne();
    
    if (!portfolio) {
      return res.status(404).json({ 
        error: 'Portfolio data not found. Please run the migration script first.' 
      });
    }

    // Compute live stats and inject into response (non-breaking)
    let live = null;
    try {
      live = await computeStats();
    } catch (e) {
      // Do not fail the whole request if stats fail
      live = null;
    }

    const doc = portfolio.toObject();

    // Enhance codingPlatforms stats strings for display
    if (Array.isArray(doc.codingPlatforms)) {
      const platforms = [...doc.codingPlatforms];
      const mapByName = (name) => platforms.find(p => (p.name || '').toLowerCase() === name.toLowerCase());

      if (live?.leetcode) {
        const lc = mapByName('LeetCode');
        if (lc) {
          const solved = live.leetcode.totalSolved ?? null;
          lc.stats = solved != null ? `${solved} problems solved` : (lc.stats || '');
        }
      }

      if (live?.codeforces) {
        const cf = mapByName('Codeforces');
        if (cf) {
          const rating = live.codeforces.rating ?? null;
          cf.stats = rating != null ? `Rating ${rating}` : (cf.stats || '');
        }
      }

      if (live?.github) {
        const gh = mapByName('GitHub');
        if (gh) {
          const repos = live.github.publicRepos ?? null;
          const contrib = live.github.contributionsLastYear ?? null;
          if (repos != null && contrib != null) gh.stats = `${repos} repos, ${contrib} contributions last year`;
          else if (repos != null) gh.stats = `${repos} public repositories`;
        }
      }

      doc.codingPlatforms = platforms;
    }

    // Also include a separate liveStats object for advanced UI
    doc.liveStats = live;

    res.json(doc);
  } catch (error) {
    console.error('Error fetching portfolio:', error);
    res.status(500).json({ error: 'Server error while fetching portfolio data' });
  }
});

// Get specific fields (optional - for optimization)
router.get('/:field', async (req, res) => {
  try {
    const { field } = req.params;
    const portfolio = await Portfolio.findOne().select(field);
    
    if (!portfolio) {
      return res.status(404).json({ error: 'Portfolio data not found' });
    }
    
    res.json(portfolio[field] || {});
  } catch (error) {
    console.error('Error fetching portfolio field:', error);
    res.status(500).json({ error: 'Server error while fetching portfolio data' });
  }
});

// Update portfolio data (optional - for admin panel)
router.put('/', async (req, res) => {
  try {
    const portfolio = await Portfolio.findOneAndUpdate(
      {},
      req.body,
      { new: true, upsert: true, runValidators: true }
    );
    
    res.json(portfolio);
  } catch (error) {
    console.error('Error updating portfolio:', error);
    res.status(500).json({ error: 'Server error while updating portfolio data' });
  }
});

export default router;

