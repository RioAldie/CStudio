import { Button } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SignIn from "../signin";
import { useContext, useEffect, useReducer } from "react";
import AuthReducer from "../../context/AuthReducer";
import { AuthCtx } from "../../context/AuthCtx";

export default function ButtonSign(){
    const {isLogin, setIslogin} = useContext(AuthCtx);
    const stateIsLogin =  isLogin;
    const btn = (isLogin: boolean) =>{
        if(isLogin){
           return <Button variant="contained" onClick={()=> setIslogin(false)} > <AccountCircleIcon/> Logout </Button>
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
 