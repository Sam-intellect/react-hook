import React, { useState, useCallback } from 'react';
import { Context } from './Context';

const ThemeProvider: React.FC = ({ children }) => {
  const [mode, setMode] = useState<Mode>('light');

  const toggleMode = useCallback(() => {
    setMode((prevMode) => (prevMode === 'dark' ? 'light' : 'dark'));
  }, []);

  return (
    <>
      <Context.Provider value={{ mode, toggleMode }}>
        {children}
      </Context.Provider>
    </>
  );
};

export default ThemeProvider;
