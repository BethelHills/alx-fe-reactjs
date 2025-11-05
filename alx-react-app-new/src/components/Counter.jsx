import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount((c) => c + 1);
  const decrement = () => setCount((c) => c - 1);
  const reset = () => setCount(0);

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '1rem',
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    maxWidth: '240px',
    margin: '1rem auto',
    background: '#fff'
  };

  const countStyle = {
    fontSize: '1.5rem',
    margin: 0,
    color: '#111'
  };

  const buttonRow = {
    display: 'flex',
    gap: '0.5rem'
  };

  return (
    <div style={containerStyle}>
      <h3 style={{ margin: 0 }}>Counter</h3>
      <p style={countStyle}>{count}</p>
      <div style={buttonRow}>
        <button onClick={decrement} aria-label="decrement">-</button>
        <button onClick={increment} aria-label="increment">+</button>
        <button onClick={reset} aria-label="reset">Reset</button>
      </div>
    </div>
  );
}

export default Counter;
