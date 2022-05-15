import { createTheme, PaletteMode, ThemeProvider } from "@mui/material";
import { json } from "node:stream/consumers";
import { ReactNode, useEffect, useState, createContext, useContext, useReducer } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
  Navigate
} from "react-router-dom";
import Home from "./home";
import Profile from "./profile";
import SignUp from "./signup";
import { AppContext, childrenProps } from "./context/AuthContext";


import ThemeReducer from "./context/ThemeReducer";
import ThemeContextProvider from "./context/ThemeContext";

export const SampleContext: childrenProps = {
  isLogin: false,
  mode: 'dark'
}
export default function App() {

  
  

//  function RequireAuth({ children }: childrenProps): any {
//     return isLogin ? children : <Navigate to={"/"} />;
//   }
 

  return (
    <BrowserRouter>
    

        <ThemeContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Signup" element={<SignUp/>} />
            <Route path="/Profile" element={
              
                <Profile />
              
            
            }/>
          </Routes>
        </ThemeContextProvider>
     
      
  </BrowserRouter>
  );
}

