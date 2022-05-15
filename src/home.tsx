import { CssBaseline,  Box, Stack, createTheme, ThemeProvider, PaletteMode}  from '@mui/material';
import Feed from './component/feed';
import RightBar from './component/rightbar';
import Navbar from './component/navbar';
import Sidebar from './component/sidebar';
import Add from './component/add';
import React, { useCallback, useContext, useEffect, useReducer, useState } from 'react';
import ThemeReducer from './context/ThemeReducer';
import AuthReducer from './context/AuthReducer';
import { ThemeCtx } from './context/ThemeContext';



interface HomeProps{
    mode: PaletteMode,
}
export default function Home () {



// Context API

// const [stateLogin,] =  useReducer(AuthReducer, initialState);
 const [theme, setTheme] = useState<PaletteMode>('dark');
const { mode, setMode} = useContext(ThemeCtx);
// const modeCtx = appContext.mode;
const DarkTheme = createTheme({
  palette:{
      mode: theme,
      primary: {
        main: '#FF5F00'
      }
  }
})
const handleTheme = () =>{
    if(!mode){
      // setTheme(theme === 'light' ? 'dark' : 'light');
      setTheme('light')
    }
    if(mode){
      setTheme('dark')
    }
}
useEffect(()=>{
  
  // setInterval(()=>{
  //   setMode(!mode);
  // },1500)
  handleTheme()
},[setMode, mode, handleTheme])


    return(
      <><CssBaseline />
          <ThemeProvider theme={DarkTheme}>

          
            <Box bgcolor={"background.default"} color={"text.primary"}>
              <Navbar/>
              <Box>
                <Stack justifyContent="space-evenly" direction="row" spacing={2}>
                  <Sidebar />
                  <Feed />
                  <RightBar />
                </Stack>
                <Add />
              </Box>
            </Box>
        </ThemeProvider>
        
          
      </>
    )
}