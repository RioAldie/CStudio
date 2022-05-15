import { ThemeProvider } from "@material-ui/styles"
import { createTheme, PaletteMode } from "@mui/material"
import React, { createContext, useEffect, useReducer, useState } from "react"
import ThemeReducer from "./ThemeReducer"

  interface ThemeProps{
      children: React.ReactNode
  }
  interface appProps{
    mode?: PaletteMode,
    setter : () =>void
  }
  export const THEME_STATE:appProps = {
    mode: 'light',
    setter : () =>{}
}
type AppContextState = { modeLight: boolean; modeDark: boolean }
type AppContextValue = {
    mode: boolean;
    // type, you get when hovering over `setState` from `useState`
    setMode: React.Dispatch<React.SetStateAction<boolean>>;
  };

const appCtxDefaultValue:AppContextValue = {
    mode: false,
    setMode: state => { } // noop default callback
};


export const ThemeCtx = createContext(appCtxDefaultValue);
const ThemeContextProvider = ({children}: ThemeProps)=>{
    const [mode, setMode] = useState(appCtxDefaultValue.mode)
    return(
        <ThemeCtx.Provider value={{mode, setMode}}>
                 
                    {children}
                
        </ThemeCtx.Provider>
      
    )
}

export default ThemeContextProvider;