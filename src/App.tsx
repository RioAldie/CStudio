import { createTheme, PaletteMode, ThemeProvider } from "@mui/material";
import { ReactNode, useState } from "react";
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


export default function App() {
  const [mode, setMode] = useState<PaletteMode>('light'); 
  const DarkTheme = createTheme({
      palette:{
          mode: mode,
          primary: {
            main: '#FF5F00'
          }
      }
  })
  interface childrenProps{
    children: ReactNode;
  } 
 const currentUser = false;
 const RequireAuth = ({ children }: childrenProps): any =>{
   return currentUser ? children : <Navigate to={"/"}/>
 }
  return (
    <BrowserRouter>
    <ThemeProvider  theme={DarkTheme}>
      <Routes>
        <Route path="/" element={<Home mode={mode} setMode={setMode} />} />
        <Route path="/Signup" element={<SignUp/>} />
        <Route path="/Profile" element={
          <RequireAuth>
            <Profile mode={mode} setMode={setMode}/>
          </RequireAuth>
        
        }/>
      </Routes>
    </ThemeProvider>
    
  </BrowserRouter>
  );
}