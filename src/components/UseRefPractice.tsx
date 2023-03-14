import React, { useRef, useState, useEffect } from 'react';

const UseRefPractice: React.FC = () => {
  const [name, setName] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);
  const prevName = useRef('');

  useEffect(() => {
    prevName.current = name;
  }, [name]);

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
      <div>
        My name is {name} and it used to be {prevName.current}
      </div>
      <button onClick={focus}>Focus</button>
    </>
  );
};

export default UseRefPractice;
