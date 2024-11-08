import React, { useState, useEffect } from 'react';
import '../css/Forex.css';

export default function Forex() {
  const [currencyRates, setCurrencyRates] = useState({});
  const [baseCurrency, setBaseCurrency] = useState('USD');
  const [targetCurrency, setTargetCurrency] = useState('EUR');
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(0);

  useEffect(() => {
    // Fetch exchange rates on component mount
    fetch('https://api.exchangerate-api.com/v4/latest/' + baseCurrency)
      .then((response) => response.json())
      .then((data) => setCurrencyRates(data.rates))
      .catch((error) => console.error('Error fetching exchange rates:', error));
  }, [baseCurrency]);

  const handleConversion = () => {
    const rate = currencyRates[targetCurrency];
    setConvertedAmount((amount * rate).toFixed(2));
  };

  return (
    <div className="forex-container">
      <h1 className="forex-title">Forex Exchange Rates</h1>

      <div className="forex-conversion">
        <div className="conversion-input">
          <label htmlFor="amount">Amount:</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            min="1"
          />
        </div>

        <div className="conversion-input">
          <label htmlFor="baseCurrency">From:</label>
          <select
            id="baseCurrency"
            value={baseCurrency}
            onChange={(e) => setBaseCurrency(e.target.value)}
          >
            {Object.keys(currencyRates).map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>

        <div className="conversion-input">
          <label htmlFor="targetCurrency">To:</label>
          <select
            id="targetCurrency"
            value={targetCurrency}
            onChange={(e) => setTargetCurrency(e.target.value)}
          >
            {Object.keys(currencyRates).map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>

        <button className="btn convert-btn" onClick={handleConversion}>
          Convert
        </button>

        <div className="conversion-result">
          {convertedAmount > 0 && (
            <p>
              {amount} {baseCurrency} = {convertedAmount} {targetCurrency}
            </p>
          )}
        </div>
      </div>

      <div className="exchange-rates">
        <h2>Current Exchange Rates</h2>
        <ul>
          {Object.entries(currencyRates).map(([currency, rate]) => (
            <li key={currency}>
              1 {baseCurrency} = {rate.toFixed(4)} {currency}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
