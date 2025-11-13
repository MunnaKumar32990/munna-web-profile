import { useState, useEffect, useCallback } from 'react';
import portfolioAPI from '../services/portfolioApi';

const usePortfolio = () => {
  const [portfolio, setPortfolio] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async (forceRefresh = false) => {
    try {
      setLoading(true);
      setError(null);
      const data = forceRefresh 
        ? await portfolioAPI.refresh() 
        : await portfolioAPI.fetchPortfolio();
      setPortfolio(data);
      console.log('Portfolio data loaded:', data?.name || 'No data');
    } catch (err) {
      setError(err.message);
      console.error('Error loading portfolio:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const refresh = useCallback(() => {
    fetchData(true);
  }, [fetchData]);

  return { portfolio, loading, error, refresh };
};

export default usePortfolio;

