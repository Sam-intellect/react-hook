import React, { useState } from 'react';

const UsingUseState = () => {
  return (
    <>
      <div className="flex mx-auto items-center gap-5">
        <button className="bg-black text-white text-3xl p-2 w-16 rounded-lg">
          +
        </button>
        <h1 className="text-5xl">0</h1>
        <button className="bg-black text-white text-3xl p-2 w-16 rounded-lg">
          -
        </button>
      </div>
    </>
  );
};

export default UsingUseState;
