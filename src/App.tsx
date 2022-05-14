import { createTheme, PaletteMode, ThemeProvider } from "@mui/material";
import { json } from "node:stream/consumers";
import { ReactNode, useEffect, useState, createContext, useContext } from "react";
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



export default function App() {
  const [mode, setMode] = useState<PaletteMode>('light'); 
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const [userid, setUserid] = useState<String>("");
  const DarkTheme = createTheme({
      palette:{
          mode: mode,
          primary: {
            main: '#FF5F00'
          }
      }
  })
  const Dispatch = (action: string)=>{
  
    if(action === "SET_LOGIN"){
      return setIsLogin(!isLogin);
    }
  }
  const SampleContext: childrenProps = {
    isLogin: false,
  }



  


//  function RequireAuth({ children }: childrenProps): any {
//     return isLogin ? children : <Navigate to={"/"} />;
//   }

  return (
    <BrowserRouter>
      <AppContext.Provider value={SampleContext}>
        <ThemeProvider  theme={DarkTheme}>
          <Routes>
            <Route path="/" element={<Home mode={mode} setMode={setMode} isLogin={isLogin} setIsLogin={setIsLogin} setUserid={setUserid}  />} />
            <Route path="/Signup" element={<SignUp/>} />
            <Route path="/Profile" element={
              
                <Profile mode={mode} setMode={setMode} isLogin={isLogin} setIsLogin={setIsLogin} setUserid={setUserid} />
              
            
            }/>
          </Routes>
        </ThemeProvider>
      </AppContext.Provider>
  </BrowserRouter>
  );
}

