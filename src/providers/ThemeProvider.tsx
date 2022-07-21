import React, { createContext, useContext } from "react";
import { createTheme, ThemeProvider } from "@mui/material";

type CustomThemeProviderProps = {
   children: any;
}

type CustomThemeProviderType = {
    currentThemes : any;
    CustomTheme: any;
    theme: any;
    colorMode: any
}

export const useThemeProvider = () =>{
    const [mode, setMode] = React.useState<'light' | 'dark'>('light');

    const colorMode = React.useMemo(
      () => ({
        toggleColorMode: () => {
          setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
        },
      }),
      [],
    );
  
    const theme = React.useMemo(
      () =>
        createTheme({
          palette: {
            mode,
          },
        }),
      [mode],
    );
    return {
        mode,
        colorMode,
        theme
    } 
}

const defaultThemeContext = {};

const CustomThemeContext = createContext<CustomThemeProviderType>(defaultThemeContext as any)

export const useCustomTheme = () =>{
    return useContext(CustomThemeContext)
}
export const CustomThemeProvider = ({children}: CustomThemeProviderProps) =>{
    const customeTheme = useThemeProvider();
    return (
        <CustomThemeContext.Provider value={customeTheme as any}>
            <ThemeProvider theme={customeTheme.theme}>{children}</ThemeProvider>
        </CustomThemeContext.Provider>
    )
}