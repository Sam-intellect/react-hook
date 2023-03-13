import React, { useState, useEffect } from 'react';
import FunctionContextComponent from './FunctionContextComponent';
export const ThemeContext = React.createContext();

const UsingUseState = () => {
  const [count, setCount] = useState(4);
  const [state, setState] = useState<boolean>(false);
  const [darkTheme, setDarkTheme] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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
      <ThemeContext.Provider value={darkTheme}>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <FunctionContextComponent />
      </ThemeContext.Provider>
      <div className="flex mx-auto place-content-center items-center gap-5">
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
      {/* <button onClick={bool}>state</button> */}
      <div>{windowWidth}</div>
    </>
  );
};

export default UsingUseState;
