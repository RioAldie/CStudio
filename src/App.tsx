import { createTheme, PaletteMode, ThemeProvider } from "@mui/material";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  BrowserRouter
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

  return (
    <BrowserRouter>
    <ThemeProvider  theme={DarkTheme}>
      <Routes>
        <Route path="/" element={<Home mode={mode} setMode={setMode} />} />
        <Route path="/Signup" element={<SignUp/>} />
        <Route path="/Profile" element={<Profile mode={mode} setMode={setMode}/>}/>
      </Routes>
    </ThemeProvider>
    
  </BrowserRouter>
  );
}