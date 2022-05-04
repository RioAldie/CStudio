import { Alert, Box, Button, Modal, Stack, styled, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { Link, useNavigate } from "react-router-dom";

const StyledModal = styled(Modal)({
    display: 'flex',
    alignItems:'center',
    justifyContent: 'center'
});
interface SignInProps{
    isLogin: Boolean,
    setIsLogin: React.Dispatch<React.SetStateAction<boolean>>,
    setUserid: React.Dispatch<React.SetStateAction<String>>
}

export default function SignIn(props:SignInProps){
    const [open, setOpen] = useState(false);
    const [err, setErr] = useState(false);
    const [email, setEmail] = useState("");
    const [userform, setUserform] = useState<string>();
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const {isLogin, setIsLogin, setUserid} = props;

    const handleLogin = ()=>{
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            setErr(false)
            const user = userCredential.user;
            console.log(user)
            const userid = user.uid
            setUserform(user.uid);
            console.log(userform)
            setUserid(userid.toString());
            setOpen(false);
            setIsLogin(true);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErr(true);
            // ..
        });
    }
    return(
        <>
        <Button variant="contained" onClick={(e)=> setOpen(true)}> <AccountCircleIcon/> Login </Button>
        
        <StyledModal
            open={open}
            onClose={(e) => setOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
                
            <Box width={500} height={400} bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={3} textAlign={"center"} sx={{display: 'flex',flexDirection: 'column', justifyContent:'space-evenly'}}>
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
                variant="outlined"
                onChange={(e)=> setEmail(e.target.value)} />
                <TextField
                fullWidth
                id="outlined-basic"
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="outlined"
                onChange={(e)=> setPassword(e.target.value)}
                />
                <Button sx={{height: 50}} variant="contained" size="large" onClick={handleLogin}>Sign In</Button>
                <Typography variant="subtitle1">Did't Have an Account? 
                <Link to={"/Signup"}>
                {' Sign Up'}
                </Link>
                </Typography>
                {   err && 
                    <Stack sx={{ width: '100%' }}>
                    <Alert severity="error">Password or Email is Wrong</Alert>  
                    </Stack>
                }
                
                
            </Box>
           
        </StyledModal></>
    )
}