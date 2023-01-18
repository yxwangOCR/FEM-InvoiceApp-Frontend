import React, { useContext, useEffect, useState } from 'react';

import helpers from '@/utils/helpers';

const ThemeContext = React.createContext<ThemeContextType>({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggleMode: () => { },
  mode: 'light' as ThemeType,
});

const ThemeProvider: React.FC<Props> = ({ children }) => {
  const [mode, setMode] = useState<ThemeType>(() => {
    return helpers.theme.getThemeMode() as ThemeType;
  });

  const toggleMode = () => {
    setMode((mode === 'dark')
      ? 'light'
      : 'dark');
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme-mode', mode);

    helpers.theme.setThemeMode(mode);
  }, [mode]);

  return (
    <ThemeContext.Provider
      value={{
        mode,
        toggleMode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

export const useThemeContext = () => useContext(ThemeContext);

export type ThemeType = 'dark' | 'light';
export type ThemeContextType = {
  mode: ThemeType;
  toggleMode: () => void;
};

interface Props {
  children: React.ReactElement | React.ReactElement[];
}
