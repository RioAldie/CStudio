import { AppBar, Box, styled, Toolbar, Typography, Menu, MenuItem , Button} from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
import Switch from '@mui/material/Switch';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";


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
    color: 'inherit'
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


export default function Navbar (){
    const [open, setOpen] = useState(false);
    const [checked, setChecked] = useState(false);
    return(
        <>
        <AppBar position="sticky" >
            <StyledToolbar>
                <NavBox>
                    <PhotoCamera/>
                    <Typography variant="h6" sx={{display:{ xs: 'none', sm:'block'}}}>CStudio</Typography>
                </NavBox>
               
                <NavList>
                    <NavLink color="inherit" >
                        Home
                    </NavLink>
                    <NavLink color="inherit">
                        Katalog
                    </NavLink>
                    <NavLink color="inherit">
                        About
                    </NavLink>
                    <NavLink>
                        Contact
                    </NavLink>

                </NavList>
                <NavBox>
               <Switch
                checked={checked}
                onChange={(e)=>setChecked(!checked)}
                inputProps={{ 'aria-label': 'controlled' }}
                color="warning"
                />
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
                </Menu>
               </NavBox>
            </StyledToolbar>
            
        </AppBar>
        
        </>
    )
}