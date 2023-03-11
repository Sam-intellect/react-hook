import React, { useState } from 'react';

const UsingUseState = () => {
  const [count, setCount] = useState(4);

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const decrementCount = () => {
    setCount((prevCount) => prevCount - 1);
  };
  return (
    <>
      <div className="flex mx-auto items-center gap-5">
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
    </>
  );
};

export default UsingUseState;
