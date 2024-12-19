import { useState, useEffect } from 'react';
import data from '../../currencies.json'; // Importing data.json

const useCurrencyData = () => {
  const [currencyData, setCurrencyData] = useState(data);
  
  useEffect(() => {
    // Fetch the currency data (this can be extended for dynamic API calls in future)
    setCurrencyData(data);
  }, []);

  return currencyData;
};

export default useCurrencyData;
