import { Avatar, Button } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SignIn from "../signin";
import { useContext, useEffect, useReducer } from "react";
import AuthReducer from "../../context/AuthReducer";
import { AuthCtx } from "../../context/AuthCtx";
import { Link } from "react-router-dom";

const BtnProfile = () =>{
    return(
        <Button variant="contained"  sx={{width: 110, display: 'flex',justifyContent:'space-between' }}> <Avatar sx={{ width: 24, height: 24,}} alt="Remy Sharp" src={`/image/avatar-1.png`} /> Alex </Button>
    )
}

export default function ButtonSign(){
    const {isLogin, setIslogin} = useContext(AuthCtx);
    const stateIsLogin =  isLogin;
    const BtnLogout = ()=>{
        return(
            <Button variant="contained" onClick={()=> setIslogin(false)} > <AccountCircleIcon/> Logout </Button>
        )
    }
    const btn = (isLogin: boolean) =>{
        if(isLogin){
           return (
               <Link to={'/profile'}>
                    <BtnProfile/>
               </Link>
                
                )
        }
        if(!isLogin){
           return <SignIn />
        }
    }
   return(
       <div>
        {btn(stateIsLogin)}
       </div>
        
   )
}
 