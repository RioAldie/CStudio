import { Button } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SignIn from "../signin";
import { useContext, useEffect, useReducer } from "react";
import { AppContext, initialState } from "../../context/AuthContext";
import AuthReducer from "../../context/AuthReducer";

interface SignProps{
    isLogin: boolean
}
// export default function ButtonSign(){
//     const appContext = useContext(AppContext);
//     const ContextLogin = appContext?.isLogin;
//     const handleLogin = (isLogin: Boolean| undefined)=>{
//         if(!isLogin){
//             return <SignIn />
//         }
//         if(isLogin){
//             return <Button variant="contained"> <AccountCircleIcon/> Logout </Button>
//         }
//     }
//     useEffect(()=>{
//         handleLogin(ContextLogin)
//     },[handleLogin])
//    return(
//        <div>
//            {handleLogin(ContextLogin)}
//        </div>
        
//    )
// }
export default function ButtonSign(){
    const [state, dispatch] = useReducer(AuthReducer, initialState);
    const stateIsLogin =  state.isLogin;
    const btn = (isLogin: boolean) =>{
        if(isLogin){
           return <Button variant="contained" onClick={() => dispatch({ type: 'LOGOUT', payload: true})}> <AccountCircleIcon/> Logout </Button>
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
 