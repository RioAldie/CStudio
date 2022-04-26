import {Typography, CssBaseline, Grid, Box, Toolbar, Stack, createTheme, ThemeProvider, PaletteMode}  from '@mui/material';
import {PhotoCamera} from '@mui/icons-material';
import Feed from './component/feed';

import RightBar from './component/rightbar';
import Navbar from './component/navbar';
import Sidebar from './component/sidebar';
import Add from './component/add';
import { useState } from 'react';
import { text } from 'stream/consumers';

export default function App () {

const [mode, setMode] = useState<PaletteMode>('light'); 
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
          <Navbar setMode={setMode} mode={mode}  />
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