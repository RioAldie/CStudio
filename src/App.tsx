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
import './style/Global.css';



import ThemeReducer from "./context/ThemeReducer";
import ThemeContextProvider, { ThemeCtx } from "./context/ThemeContext";
import AuthContextProvider, { AuthCtx } from "./context/AuthCtx";

export default function App() {
  const {isLogin} = useContext(AuthCtx);
  const [currentUser, setCurrentuser] =  useState(true);
  const [theme, setTheme] = useState<PaletteMode>('dark');
  const { mode, setMode} = useContext(ThemeCtx);
  interface childrenProps{
    children: ReactNode
  }
 function RequireAuth({ children }: childrenProps) {
    return <>{currentUser ? children : <Navigate to={"/"} />}</>;
  }
  const DarkTheme = createTheme({
    palette:{
        mode: theme,
        primary: {
          main: '#FF5F00'
        }
    }
  })
  const handleTheme = () =>{
    if(!mode){
      // setTheme(theme === 'light' ? 'dark' : 'light');
      setTheme('light')
    }
    if(mode){
      setTheme('dark')
    }
}
const handleIsLogin = ()=>{
    if(!isLogin){
      setCurrentuser(false);
      console.log(currentUser);
    }
    if(isLogin){
      setCurrentuser(true);
      console.log(currentUser);
    }
    
}
 
useEffect(()=>{
  handleTheme();
  handleIsLogin();
  
},[setMode, mode, handleTheme, setCurrentuser,currentUser,isLogin])
  
  return (
    <BrowserRouter>
    <ThemeProvider theme={DarkTheme}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Signup" element={<SignUp/>} />
            <Route path="/Profile" element={
              <RequireAuth>
                <Profile />
              </RequireAuth>
            }/>
          </Routes>
      </ThemeProvider>
  </BrowserRouter>
  );
}

