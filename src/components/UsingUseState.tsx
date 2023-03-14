import React, { useState, useEffect, useContext } from 'react';
import { Context } from './Context';

const UsingUseState = () => {
  const [count, setCount] = useState(4);
  const [state, setState] = useState<boolean>(false);
  const [darkTheme, setDarkTheme] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { mode, toggleMode } = useContext(Context);

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const decrementCount = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const reset = () => {
    setCount(0);
  };
  // const bool = () => {
  //   if (setState === true) {
  //     console.log('');
  //   }
  // };

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {};
  }, []);

  const toggleTheme = () => {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  };
  return (
    <>
      <div
        className={`flex mx-auto place-content-center items-center gap-5 bg-${
          mode === 'dark' ? 'gray-900' : 'gray-100'
        } text-${mode === 'dark' ? 'white' : 'gray-800'}`}
      >
        <button
          className="bg-black text-white text-3xl p-2 w-16 rounded-lg"
          onClick={incrementCount}
        >
          +
        </button>
        <h1 className="text-5xl">{count}</h1>
        <button
          className="bg-black text-white text-3xl p-2 w-16 rounded-lg"
          onClick={decrementCount}
        >
          -
        </button>
      </div>
      <button onClick={reset}>RESET</button>
      <button onClick={toggleMode}>Toggle Theme</button>
      {/* <button onClick={bool}>state</button> */}
      <div>{windowWidth}</div>
    </>
  );
};

export default UsingUseState;
