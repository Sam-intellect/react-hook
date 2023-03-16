import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const Print = () => {
    console.log('Hello');
  };

  return (
    <>
      <button onClick={Print}>Hello</button>
    </>
  );
}

export default App;
