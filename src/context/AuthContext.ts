import { PaletteMode } from "@mui/material";
import React, { createContext, ReactNode, useContext, useEffect, useReducer } from "react";
import AuthReducer from "./AuthReducer";

export interface childrenProps{
    isLogin: Boolean,
    mode: PaletteMode
}; 
export const initialState:childrenProps ={
    isLogin : false,
    mode: 'dark'
};
export const AppContext = createContext<childrenProps | null>(initialState);