import React, { useContext } from 'react';
import { ThemeContext } from './UsingUseState';

const FunctionContextComponent = () => {
  const darkTheme = useContext(ThemeContext);
  const themeStyles = {
    backgoundColor: darkTheme ? '#333' : '#ccc',
  };
  return (
    <>
      <div style={themeStyles}>Function theme</div>
    </>
  );
};

export default FunctionContextComponent;
