import { Box, Button, Modal, styled, TextField, Typography } from "@mui/material";
import { useState } from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SignupForm from "./signup-form";
import { Link } from "react-router-dom";

const StyledModal = styled(Modal)({
    display: 'flex',
    alignItems:'center',
    justifyContent: 'center'
});
export default function SignIn(){

    const [open, setOpen] = useState(false);
    return(
        <>
        <Button variant="contained" onClick={(e)=> setOpen(true)}> <AccountCircleIcon/> Login </Button>
        
        <StyledModal
            open={open}
            onClose={(e) => setOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box width={500} height={320} bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={3} textAlign={"center"} sx={{display: 'flex',flexDirection: 'column', justifyContent:'space-evenly'}}>
                <Typography variant="h5">
                    Welcome Back!
                </Typography>
                <Typography variant="subtitle2" sx={{color: 'grey'}}>
                     a lot creator share their content today, check it now!
                </Typography>
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
                <Button sx={{height: 50}} variant="contained" size="large">Sign In</Button>
                <Typography variant="subtitle1">Did't Have an Account? 
                <Link to={"/Signup"}>
                {' Sign Up'}
                </Link>
                </Typography>
            </Box>
        </StyledModal></>
    )
}