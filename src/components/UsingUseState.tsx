import React, { useState, useEffect } from 'react';

const UsingUseState = () => {
  const [count, setCount] = useState(4);
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

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {};
  }, []);
  return (
    <>
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
      <div>{windowWidth}</div>
    </>
  );
};

export default UsingUseState;
