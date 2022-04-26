import {Typography, CssBaseline, Grid, Box, Toolbar, Stack, createTheme, ThemeProvider}  from '@mui/material';
import {PhotoCamera} from '@mui/icons-material';
import Feed from './component/feed';

import RightBar from './component/rightbar';
import Navbar from './component/navbar';
import Sidebar from './component/sidebar';
import Add from './component/add';
import { useState } from 'react';
import { text } from 'stream/consumers';

export default function Home  () {

const [mode, setMode] = useState(); 
const DarkTheme = createTheme({
    palette:{
        mode: 'dark'
    }
}) 
    return(
        <>
        <ThemeProvider theme={DarkTheme}>
           
            <Box bgcolor={"background.default"} color={"text.primary"}>
                 <Stack justifyContent="space-evenly" direction="row" spacing={2}>
                    <Sidebar/>
                  <Feed/>
                  <RightBar/> 
            </Stack>
            <Add/>
            </Box>
        </ThemeProvider>
            
           
        </>
    )
}