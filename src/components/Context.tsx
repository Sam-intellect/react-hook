import { createContext } from 'react';

type Mode = 'dark' | 'light';
type ToggleMode = () => void;

interface ContextValue {
  mode: Mode;
  toggleMode: ToggleMode;
}

export const Context = createContext<ContextValue>({
  mode: 'light',
  toggleMode: () => {},
});
