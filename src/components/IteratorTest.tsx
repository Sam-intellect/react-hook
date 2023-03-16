import React from 'react';
import useIterator from './useIterator';

const IteratorTest = () => {
  const { user, index, isLoading, next, previous } = useIterator(
    'https://randomuser.me/api/'
  );

  if (isLoading) return <div>loading...</div>;
  return (
    <div>
      <div>
        <h1>{user?.name}</h1>
        <button onClick={next}>Next</button>
      </div>
    </div>
  );
};

export default IteratorTest;
