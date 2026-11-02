import React, { createContext, useContext } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const themeConfig = {
    primary: '#00f0ff',
    primaryGlow: 'rgba(0, 240, 255, 0.4)',
    accentGradient: 'from-cyan-400 via-blue-500 to-indigo-500',
  };

  return (
    <ThemeContext.Provider value={themeConfig}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
