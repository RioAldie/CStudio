import { AppBar, Box, styled, Toolbar, Typography, Menu, MenuItem , Button, PaletteMode, Badge} from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
import Switch from '@mui/material/Switch';
import MenuIcon from '@mui/icons-material/Menu';
import React, { Dispatch, DispatchWithoutAction, SetStateAction, useEffect, useState } from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SignIn from "./signin";
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';


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
    isLogin: boolean,
    setIsLogin: React.Dispatch<React.SetStateAction<boolean>>,
    setUserid: React.Dispatch<React.SetStateAction<String>>
}

export default function Navbar (props: NavProps){
    const [open, setOpen] = useState(false);
    const [checked, setChecked] = useState(false);
    
    useEffect(()=>{
        console.log('login', isLogin)
    })
    const { mode, setMode, isLogin, setIsLogin, setUserid} = props;
    const handleButton = () =>{
        if(isLogin === true){
            return(
                <Button variant="contained" onClick={(e)=> { setIsLogin(false)}}> <AccountCircleIcon/> Logout </Button>
            )
        }else{
            return(
                <SignIn isLogin={isLogin} setIsLogin={setIsLogin} setUserid={setUserid} />
            )
        }
    }
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
                checked={checked}
                onChange={(e)=>setMode(mode === 'light' ? 'dark' : 'light')}
                onClick={(e)=>setChecked(!checked)}
                inputProps={{ 'aria-label': 'controlled' }}
                color="primary"
                />
                <Box sx={{display:{xs: 'none',sm: 'block'}}}>
                     {handleButton()}
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
                    <MenuItem >{handleButton()}</MenuItem>
                </Menu>
               </NavBox>
            </StyledToolbar>
            
        </AppBar>
        
        </>
    )
}