import React, { useRef, useState, useEffect } from 'react';

const UseRefPractice: React.FC = () => {
  const [name, setName] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);

  const focus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <>
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border-solid border-2 border-sky-500 rounded-md"
      />
      <div>My name is {name}</div>
      <button onClick={focus}>Focus</button>
    </>
  );
};

export default UseRefPractice;
