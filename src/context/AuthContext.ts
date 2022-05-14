import { createContext, ReactNode, useContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

export interface childrenProps{
    isLogin: Boolean,
} 
export const initialState ={
    isLogin : false
}

export const AppContext = createContext<childrenProps | null>(null);



