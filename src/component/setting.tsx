import { ExpandLess, ExpandMore, PhotoCamera, StarBorder } from "@mui/icons-material";
import { Box, Collapse, List, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Typography } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import EmailIcon from '@mui/icons-material/Email';
import WorkIcon from '@mui/icons-material/Work';
import LockIcon from '@mui/icons-material/Lock';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import { useState } from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function Settings(){
    const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
    return(
        <Box flex={1}  sx={{display:{xs: 'none', sm: 'block'}}}>
            <Box position={'fixed'} textAlign={'center'}>
                <Typography variant="h5" fontWeight={'bold'}>
                    Settings
                </Typography>
                <List
                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper',marginTop: 3 }}
                component="nav" 
                
                >
                <ListSubheader id="nested">
                    
                </ListSubheader>
                <ListItemButton>
                    <ListItemIcon>
                    <AccountCircleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Profile" />
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                    <LockIcon />
                    </ListItemIcon>
                    <ListItemText primary="Password" />
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                    <EmailIcon />
                    </ListItemIcon>
                    <ListItemText primary="Email" />
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                    <WorkIcon />
                    </ListItemIcon>
                    <ListItemText primary="Jobs" />
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                    <PhotoCamera />
                    </ListItemIcon>
                    <ListItemText primary="Post" />
                </ListItemButton>
                <ListItemButton onClick={handleClick}>
                    <ListItemIcon>
                    <PhoneIphoneIcon />
                    </ListItemIcon>
                    <ListItemText primary="Social Media" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                        <FacebookIcon />
                        </ListItemIcon>
                        <ListItemText primary="Facebook" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                        <TwitterIcon />
                        </ListItemIcon>
                        <ListItemText primary="Twitter" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                        <InstagramIcon />
                        </ListItemIcon>
                        <ListItemText primary="Instagram" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                        <PinterestIcon />
                        </ListItemIcon>
                        <ListItemText primary="Pinterest" />
                    </ListItemButton>
                    </List>
                </Collapse>
                <ListItemButton>
                    <ListItemIcon>
                    <ContactSupportIcon />
                    </ListItemIcon>
                    <ListItemText primary="Help Center" />
                </ListItemButton>
            </List>
            </Box>
             
        </Box>
    )
}