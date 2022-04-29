import { PhotoCamera } from "@mui/icons-material";
import { AppBar, Box, Button, Link, MenuItem, styled, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const BoxStyled = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: 700,
});
const NavBox = styled(Box)({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
});
export default function SignupForm(){
    const [value, setValue] = useState('guest');
    const roles = [
                    {
                        role: 'guest',
                        label: 'Guest'
                    },
                    {
                        role: 'creator',
                        label: 'Creator'

                }]
   
    return(
        
        <Box bgcolor={"grey"} flex={0.5}  p={2} justifyContent="center" alignItems="center">
            <AppBar position="relative" color="primary">
                 <NavBox>
                    <PhotoCamera/>
                    <Typography variant="h5">CStudio</Typography>
                  </NavBox>
            </AppBar>
          
            <BoxStyled p={2}>
            <Typography variant="h5" color={"primary"}>
                    Register
                </Typography>
                <Box  width={400} sx={{ maxWidth: 545,display: 'flex', justifyContent: 'space-between'}}>
                    <TextField 
                    id="firtsname" 
                    label="Firstname" 
                    variant="outlined" sx={{width: 190}} />
                    <TextField 
                    id="lastname" 
                    label="Lastname" 
                    variant="outlined"sx={{width: 190}} />
                </Box>
                 
                <TextField 
                fullWidth
                id="email" 
                label="Email" 
                type="email"
                variant="outlined" />
                <TextField
                fullWidth
                id="outlined-basic"
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="outlined"
                />
                 <TextField
                 fullWidth
                id="role"
                select
                label="Role"
                value={value}
                onChange= {(e)=> setValue(e.target.value)}
                helperText="Please select your role"
                >
                   {roles.map((role) => (
                        <MenuItem color="grey" key={role.role} value={role.role}>
                        {role.label}
                        </MenuItem>
                    ))}
                 
                </TextField>
                <Button fullWidth size="large" variant="contained" color="primary">Sign Up</Button>
                <Typography variant="subtitle1">Have an Account? 
                <Link href="#" underline="none">
                {' Sign In'}
                </Link>
                </Typography>
               
            </BoxStyled>
           
        </Box>
    )
}