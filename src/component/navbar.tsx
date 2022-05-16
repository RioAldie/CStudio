import { AppBar, Box, styled, Toolbar, Typography, Menu, MenuItem , Button, PaletteMode, Badge} from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
import Switch from '@mui/material/Switch';
import MenuIcon from '@mui/icons-material/Menu';
import React, { Dispatch, DispatchWithoutAction, SetStateAction, useContext, useEffect, useMemo, useReducer, useState } from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SignIn from "./signin";
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ButtonSign from "./atoms/btnLogin";
import ThemeReducer from "../context/ThemeReducer";
import { ThemeCtx, THEME_STATE } from "../context/ThemeContext";



const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
});
const NavBox = styled(Box)({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly"
});
const NavLink = styled(Button)({
    color: 'white'
    
})
const NavList = styled("div")(({theme}) =>({
    display: "none",
    width: 600,
    color: 'lightgray',
    alignSelf: 'center',
    marginLeft: '-100px',
    justifyContent: "space-evenly",
    [theme.breakpoints.up("md")]:{
        display: "flex"
    }
}))
interface NavProps{
    mode: PaletteMode,
    setMode: React.Dispatch<React.SetStateAction<PaletteMode>>,
}

export default function Navbar (){
    const [open, setOpen] = useState(false);
    const [checked, setChecked] = useState(false);
    // const [mode, setMode] = useState<PaletteMode>();
    // const [state ,dispatch] = useReducer(ThemeReducer, THEME_STATE)
    const { mode, setMode} = useContext(ThemeCtx);
    
    
    return(
        <>
        <AppBar position="sticky" color="primary">
            <StyledToolbar>
                <NavBox>
                    <PhotoCamera/>
                    <Typography variant="h6" sx={{display:{ xs: 'none', sm:'block'}}}>CStudio</Typography>
                </NavBox>
               
                <NavList>
                   
                </NavList>
                <NavBox>
                <Badge badgeContent={4} color="secondary" sx={{marginRight: 2}}>
                    <MailIcon color="action" />
                </Badge>
                <Badge badgeContent={9} color="secondary" sx={{marginRight: 2}}>
                    <NotificationsIcon color="action" />
                </Badge>
               <Switch
                checked={mode}
                onChange={(e)=>setMode(mode === true ? false : true)}
                onClick={(e)=>setChecked(!checked)}
                inputProps={{ 'aria-label': 'controlled' }}
                color="primary"
                />
                <Box sx={{display:{xs: 'none',sm: 'block'}}}>
                    <ButtonSign/>
                </Box>
               
                <MenuIcon sx={{display:{ xs: 'block', sm:'block', md:'none'}}} onClick={(e) =>setOpen(true)}/>
               <Menu
                    id="demo-positioned-menu"
                    aria-labelledby="demo-positioned-button"
                    open={open}
                    onClose={(e)=> setOpen(false)}
                    anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                    }}
                    transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                    }}
                >
                    <MenuItem >Home</MenuItem>
                    <MenuItem >Katalog</MenuItem>
                    <MenuItem >About</MenuItem>
                    <MenuItem >Contact</MenuItem>
                    <MenuItem ><ButtonSign/></MenuItem>
                </Menu>
               </NavBox>
            </StyledToolbar>
            
        </AppBar>
        
        </>
    )
}