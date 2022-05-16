import { PaletteMode } from "@mui/material";
import { useEffect } from "react";
import { THEME_STATE } from "./ThemeContext";

type ACTIONTYPE =
| { type: "LIGHT"; payload: PaletteMode }
| { type: "DARK"; payload: PaletteMode }
const ThemeReducer = (state: typeof THEME_STATE, action:  ACTIONTYPE) =>{
   
    switch (action.type) {
        case "LIGHT":{
           return{ 
               mode: action.payload
        }};
        case "DARK":{
            return{ 
               mode: action.payload
            }
        };
    
        default:
            return state;
    }

   
}
export default ThemeReducer;