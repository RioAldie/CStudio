import { ReducerWithoutAction } from "react";
import {initialState} from './AuthContext';
type ACTIONTYPE =
  | { type: "LOGIN"; payload: boolean }
  | { type: "LOGOUT"; payload: boolean }
const AuthReducer = (state : typeof initialState, action: ACTIONTYPE)=>{
    switch (action.type) {
        case "LOGIN":{
            return{
                isLogin: action.payload,
            };
        }
        case "LOGOUT":{
            return{
                isLogin: action.payload,
            };
        }
        default:
            return state;
    }
}

export default AuthReducer;