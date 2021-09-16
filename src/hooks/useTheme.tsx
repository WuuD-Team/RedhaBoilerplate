import * as React from 'react';
import {useState, useEffect, createContext} from 'react';

import colors from '../shared/theme/colors';

export const ThemeContext = createContext({});

export default function ThemeProvider({children}) {
  const colorScheme = 'dark';
  const [theme, setTheme]: Array<any> = useState(colors[colorScheme]);

  useEffect(() => {
    setTheme(colors[colorScheme]);
  }, [colorScheme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}>
      {children}
    </ThemeContext.Provider>
  );
}
