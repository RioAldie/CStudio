import {Typography, CssBaseline, Grid, Box, Toolbar, Stack}  from '@mui/material';
import {PhotoCamera} from '@mui/icons-material';
import Feed from './component/feed';

import RightBar from './component/rightbar';
import Navbar from './component/navbar';
import Sidebar from './component/sidebar';
import Add from './component/add';


export default function Home  () {
 

    return(
        <>
        
            <Navbar/>
            <Box>
                 <Stack justifyContent="space-evenly" direction="row" spacing={2}>
                    <Sidebar/>
                  <Feed/>
                  <RightBar/> 
            </Stack>
            <Add/>
            </Box>
           
        </>
    )
}