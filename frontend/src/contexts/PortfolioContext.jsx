import React, { createContext, useContext } from 'react';
import usePortfolio from '../hooks/usePortfolio';

export const PortfolioContext = createContext(null);

export const PortfolioProvider = ({ children }) => {
  const { portfolio, loading, error, refresh } = usePortfolio();

  return (
    <PortfolioContext.Provider value={{ portfolio, loading, error, refresh }}>
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolioData = () => {
  const context = useContext(PortfolioContext);
  
  if (!context) {
    throw new Error('usePortfolioData must be used within PortfolioProvider');
  }
  
  // Fallback to empty object if loading or error, but components should handle loading state
  return {
    portfolio: context.portfolio || {},
    loading: context.loading,
    error: context.error,
    refresh: context.refresh
  };
};

export default PortfolioContext;

