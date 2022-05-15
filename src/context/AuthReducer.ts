import { PaletteMode } from '@mui/material';
import {initialState} from './AuthContext';
type ACTIONTYPE =
  | { type: "LOGIN"; payload: boolean }
  | { type: "LOGOUT"; payload: boolean }
const AuthReducer = (state : typeof initialState, action: ACTIONTYPE| any)=>{
    switch (action.type) {
        case "LOGIN":{
            console.log('login')
            return{
                isLogin: action.payload,
            };
        }
        case "LOGOUT":{
            console.log('logout')
            return{
                isLogin: action.payload,
            };
        }
        default:
            return state;
    }
}

export default AuthReducer;