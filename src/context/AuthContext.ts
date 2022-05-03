import { createContext, ReactNode, useReducer } from "react";
import AuthReducer from "./AuthReducer";

interface AuthContextProps{
    children: ReactNode,
    currentUser: boolean
}
const INITIAL_STATE = {
    currentUser : false
}

export const AuthContext = createContext(INITIAL_STATE);



