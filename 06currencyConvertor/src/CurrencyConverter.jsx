import React, { useState } from "react";
import useCurrencyData from "./hooks/useCurrencyData"; // Custom hook for data

const CurrencyConverter = () => {
  const currencyData = useCurrencyData(); // Fetch currency data using the custom hook
  const currencies = Object.keys(currencyData);

  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState(null);

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleFromCurrencyChange = (e) => {
    setFromCurrency(e.target.value);
  };

  const handleToCurrencyChange = (e) => {
    setToCurrency(e.target.value);
  };

  const handleSwap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  const convertCurrency = () => {
    if (amount && fromCurrency && toCurrency) {
      const rate = currencyData[fromCurrency][toCurrency];
      if (rate) {
        const convertedAmount = (amount * rate).toFixed(2);
        setResult(convertedAmount);
      } else {
        setResult("Invalid conversion rate");
      }
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-900 p-4">
      <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-xl">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Currency Converter
        </h1>

        <div className="space-y-4">
          {/* From Currency Input */}
          <div className="flex items-center space-x-4">
            <input
              type="number"
              value={amount}
              onChange={handleAmountChange}
              placeholder="Amount"
              className="w-full p-3 -mb-6 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <select
              value={fromCurrency}
              onChange={handleFromCurrencyChange}
              className="p-3 -mb-6 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              {currencies.map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </div>

          {/* Swap Button */}
          <div className="flex justify-center relative z-50"> 
            <button
              onClick={handleSwap}
              className="w-1/4 p-3 text-xl font-semibold text-white bg-gray-500 rounded-lg shadow-md"
            >
              Swap
            </button>
          </div>

          {/* To Currency Input */}
          <div className="flex items-center space-x-4">
            <input
              type="text"
              value={result ? `${result} ${toCurrency}` : ""}
              readOnly
              className="w-full -mt-6 p-3 text-lg border border-gray-300 rounded-lg bg-gray-100 focus:outline-none"
            />
            <select
              value={toCurrency}
              onChange={handleToCurrencyChange}
              className="p-3 -mt-6 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              {currencies.map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </div>

          {/* Convert Button */}
          <div className="flex justify-center">
            <button
              onClick={convertCurrency}
              className="w-full p-3 text-xl font-semibold text-white bg-green-500 rounded-lg shadow-md hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Convert from {fromCurrency} to {toCurrency}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrencyConverter;
