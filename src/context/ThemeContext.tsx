import React, { createContext, useEffect, useState, ReactNode } from "react";

// Create a ThemeContext
export const ThemeContext = createContext<{
  isDarkMode: boolean;
  toggleTheme: () => void;
} | null>(null);

type ThemeProviderProps = {
  children: ReactNode; 
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
