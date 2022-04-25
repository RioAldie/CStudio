import { Box, Typography, List, ListItem, ListItemAvatar, Avatar, ListItemText, Divider, Tabs, Tab } from "@mui/material";
import Contributor from "./contributor";

const RightBar = () =>{
    return(
        <>
        <Box flex={1.5} p={1} sx={{display:{ xs: 'none', sm: 'block'}}}>
            <Box position="fixed">
                <Box justifyContent= "center" sx={{ width: '100%', bgcolor: 'background.paper',display: 'flex' }}>
              <Typography variant="h5"> Top Creators</Typography>
            </Box>
            
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <Contributor name="Alexandra Mitrova" job="King Of Reptiles" like={1000} avatar="/image/avatar-1.png"/>
                <Divider variant="inset" component="li" />
                <Contributor name="Shean Dong" job="The Man of Moment" like={1000} avatar="/image/avatar-2.png"/>
                <Divider variant="inset" component="li" />
                <Contributor name="Sakamoto Rina" job="The Chef of Arts" like={889} avatar="/image/avatar-3.png"/>
                <Divider variant="inset" component="li" />
                <Contributor name="Rudi Santoso" job="Nature and Wild" like={661} avatar="/image/avatar-4.png"/>
                <Divider variant="inset" component="li" />
                <Contributor name="Teressa Rogers" job="Point Of Heart" like={509} avatar="/image/avatar-5.png"/>
            </List>
            </Box>
            
        </Box>
            
        </>
    )
}

export default RightBar;