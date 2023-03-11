import { useState } from 'react';
import './App.css';
import UsingUseState from './components/UsingUseState';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <UsingUseState />
      </div>
    </>
  );
}

export default App;
