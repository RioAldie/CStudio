import { PaletteMode } from "@mui/material";
import { createContext, ReactNode, useContext, useEffect, useReducer } from "react";
import AuthReducer from "./AuthReducer";

export interface childrenProps{
    isLogin: Boolean,
    mode: PaletteMode
  
} 

export const initialState ={
    isLogin : true,
}



export const AppContext = createContext<childrenProps | null>(null);



