
import { PaletteMode } from "@mui/material";
import React, { createContext, ReactNode, useContext, useEffect, useReducer, useState } from "react";
import AuthReducer from "./AuthReducer";

export interface childrenProps{
    isLogin: Boolean, 
  
} 
interface AuthProps{
    children: React.ReactNode
}
type AuthContextValue={
    isLogin: boolean,
    setIslogin: React.Dispatch<React.SetStateAction<boolean>>
}
const AuthCtxdeafultvalue:AuthContextValue = {
    isLogin: false,
    setIslogin: state => {}
}


export const AuthCtx = createContext(AuthCtxdeafultvalue);

const AuthContextProvider = ({children}: AuthProps) =>{
    const [isLogin, setIslogin] = useState(AuthCtxdeafultvalue.isLogin);
    const CurrentUserLclStorage = localStorage.getItem("user");
    useEffect(()=>{
        // console.log(CurrentUserLclStorage)
        if(CurrentUserLclStorage != null){
            setIslogin(true);
        }
    },[CurrentUserLclStorage,setIslogin])
    return(
        <AuthCtx.Provider value={{isLogin, setIslogin}}>
            {children}
        </AuthCtx.Provider>
    )
}

export default AuthContextProvider;