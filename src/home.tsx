import {Typography, CssBaseline, Grid, Box, Toolbar, Stack}  from '@mui/material';
import {PhotoCamera} from '@mui/icons-material';
import Feed from './component/feed';

import RightBar from './component/rightbar';
import Navbar from './component/navbar';
import Sidebar from './component/sidebar';


export default function Home  () {
 

    return(
        <>
        
            <Navbar/>
            <Box>
                 <Stack justifyContent="space-evenly" direction="row" spacing={2}>
                
                  <Feed/>
                  <RightBar/> 
            </Stack>
         
            </Box>
           
        </>
    )
}