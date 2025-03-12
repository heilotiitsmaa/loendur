// src/App.js
import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Loendur: {count}</h1>
      <button onClick={increment}>Lisa</button>
      <button onClick={decrement}>Vähenda</button>
    </div>
  );
}

export default App;
