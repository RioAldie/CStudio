import { Badge, Box, List, ListItem, ListItemIcon, ListItemText, ListItemButton, Typography } from "@mui/material";
import ForestIcon from '@mui/icons-material/Forest';
import LandscapeIcon from '@mui/icons-material/Landscape';
import ChairIcon from '@mui/icons-material/Chair';
import PetsIcon from '@mui/icons-material/Pets';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
const Sidebar = () =>{
    return(
        <>
        <Box  flex={1} p={2} sx={{ display:{ xs: 'none', sm:'block'}}}>
            <Box position='fixed'>
            <List>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#">
                        <ListItemIcon>
                            <ForestIcon />
                        </ListItemIcon>
                        <ListItemText primary="Hutan"/>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#">
                        <ListItemIcon>
                            <LandscapeIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Alam"/>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#">
                        <ListItemIcon>
                            <PetsIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Animal"/>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#">
                        <ListItemIcon>
                            <ChairIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Furniture"/>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#">
                        <ListItemIcon>
                            <DirectionsBikeIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Sport"/>
                    </ListItemButton>
                </ListItem>
            </List>
            </Box>
            
        </Box>
            
        </>
    )
}

export default Sidebar;