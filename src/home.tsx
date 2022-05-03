import { CssBaseline,  Box, Stack, createTheme, ThemeProvider, PaletteMode}  from '@mui/material';
import Feed from './component/feed';
import RightBar from './component/rightbar';
import Navbar from './component/navbar';
import Sidebar from './component/sidebar';
import Add from './component/add';
import React from 'react';


interface HomeProps{
    mode: PaletteMode,
    setMode: React.Dispatch<React.SetStateAction<PaletteMode>>,
    isLogin: boolean,
    setIsLogin: React.Dispatch<React.SetStateAction<boolean>>
}
export default function Home (props: HomeProps) {


const { mode, setMode, isLogin, setIsLogin} = props; 
const DarkTheme = createTheme({
    palette:{
       mode: mode,
        primary: {
          main: '#FF5F00'
        }
    }
}) 
    return(
      <><CssBaseline />
      <ThemeProvider theme={DarkTheme}>
        <Box bgcolor={"background.default"} color={"text.primary"}>
          <Navbar setMode={setMode} mode={mode} isLogin={isLogin} setIsLogin={setIsLogin}  />
          <Box>
            <Stack justifyContent="space-evenly" direction="row" spacing={2}>
              <Sidebar />
              <Feed />
              <RightBar />
            </Stack>
            <Add />
          </Box>
        </Box>
      </ThemeProvider></>
    )
}