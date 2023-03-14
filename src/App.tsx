import { useState } from 'react';
import './App.css';
import UsingUseState from './components/UsingUseState';
import UseRefPractice from './components/UseRefPractice';
// import ThemeProvider from './components/ThemeProvider';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <UsingUseState /> */}
      <UseRefPractice />
    </>
  );
}

export default App;
