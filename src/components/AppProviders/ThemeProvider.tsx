import React, { useContext, useEffect, useState } from 'react';

import helpers from '@/utils/helpers';

// eslint-disable-next-line @typescript-eslint/no-empty-function
const emptyFunc = () => {};

const ThemeContext = React.createContext<ThemeContextType>({
  setMode: emptyFunc,
  mode: 'light' as ThemeType,
});

const ThemeProvider: React.FC<Props> = ({ children }) => {
  const [mode, setMode] = useState<ThemeType>(() => {
    return helpers.theme.getThemeMode() as ThemeType;
  });

  useEffect(() => {
    const prevMode = mode === 'dark'
      ? 'light'
      : 'dark';

    document.body.classList.remove(prevMode);
    document.body.classList.add(mode);

    helpers.theme.setThemeMode(mode);
  }, [mode]);

  return (
    <ThemeContext.Provider
      value={{
        mode,
        setMode,
      }}
    >
      <span>mode: {mode} </span>
      <button
        onClick={() => {
          setMode((mode) => (mode === 'dark'
            ? 'light'
            : 'dark'));
        }}
      >
        toggle mode
      </button>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

export const useThemeContext = () => useContext(ThemeContext);

export type ThemeType = 'dark' | 'light';
export type ThemeContextType = {
  mode: ThemeType;
  setMode: (theme: ThemeType) => void;
};

interface Props {
  children: React.ReactElement | React.ReactElement[];
}
