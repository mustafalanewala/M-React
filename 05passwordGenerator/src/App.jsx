import { useCallback, useState } from 'react';

function App() {
  const [length, setLength] = useState(8);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);
  const [password, setPassword] = useState('');

  const passwordGenerator = useCallback(() => {
    let generatedPassword = '';
    let characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (numbers) characters += '0123456789';
    if (symbols) characters += '!@#$%^&*()_+';

    for (let i = 0; i < length; i++) {
      generatedPassword += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    setPassword(generatedPassword);
  }, [length, numbers, symbols]);

  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    alert('Password copied to clipboard!');
  };

  return (
    <div className="app-container">
      <h1>Password Generator</h1>
      <div className="password-container">
        <input
          type="text"
          value={password}
          placeholder="Your password"
          readOnly
          className="password-input"
        />
        <button onClick={handleCopy} className="copy-button">COPY</button>
      </div>
      <div className="controls-container">
        <div className="range-container">
          <label>Length: {length}</label>
          <input
            type="range"
            min={6}
            max={20}
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="range-input"
          />
        </div>
        <div className="checkbox-container">
          <label>
            <input
              type="checkbox"
              checked={numbers}
              onChange={(e) => setNumbers(e.target.checked)}
            />
            Include Numbers
          </label>
          <label>
            <input
              type="checkbox"
              checked={symbols}
              onChange={(e) => setSymbols(e.target.checked)}
            />
            Include Symbols
          </label>
        </div>
      </div>
      <button onClick={passwordGenerator} className="generate-button">Generate Password</button>
    </div>
  );
}

export default App;