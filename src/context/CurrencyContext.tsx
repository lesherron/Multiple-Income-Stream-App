import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';

interface CurrencyContextType {
  baseCurrency: string;
  targetCurrency: string;
  setTargetCurrency: (currency: string) => void;
  formatCurrency: (amount: number, options?: { showCode?: boolean, precision?: number }) => string;
  convert: (amount: number) => number;
  availableCurrencies: string[];
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

// Mock rates for now, in a real app these would be fetched from an API
const DEFAULT_RATES: Record<string, number> = {
  USD: 1,
  EUR: 0.92,
  GBP: 0.79,
  JPY: 151.45,
  CAD: 1.36,
  AUD: 1.53,
  INR: 83.34,
  CNY: 7.23,
};

const SYMBOLS: Record<string, string> = {
  USD: '$',
  EUR: '€',
  GBP: '£',
  JPY: '¥',
  CAD: 'C$',
  AUD: 'A$',
  INR: '₹',
  CNY: '¥',
};

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [targetCurrency, setTargetCurrency] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('currency') || 'USD';
    }
    return 'USD';
  });

  const baseCurrency = 'USD'; // Everything in the app is priced in USD by default

  useEffect(() => {
    localStorage.setItem('currency', targetCurrency);
  }, [targetCurrency]);

  const convert = (amount: number) => {
    const rate = DEFAULT_RATES[targetCurrency] || 1;
    return amount * rate;
  };

  const formatCurrency = (amount: number, options: { showCode?: boolean, precision?: number } = {}) => {
    const { showCode = false, precision = 0 } = options;
    const convertedAmount = convert(amount);
    const symbol = SYMBOLS[targetCurrency] || '';
    
    const formatted = new Intl.NumberFormat('en-US', {
      minimumFractionDigits: precision,
      maximumFractionDigits: precision,
    }).format(convertedAmount);

    return `${symbol}${formatted}${showCode ? ` ${targetCurrency}` : ''}`;
  };

  const availableCurrencies = useMemo(() => Object.keys(DEFAULT_RATES), []);

  return (
    <CurrencyContext.Provider value={{
      baseCurrency,
      targetCurrency,
      setTargetCurrency,
      formatCurrency,
      convert,
      availableCurrencies
    }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const context = useContext(CurrencyContext);
  if (context === undefined) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
}
