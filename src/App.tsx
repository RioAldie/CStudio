import { createTheme, PaletteMode, ThemeProvider } from "@mui/material";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  BrowserRouter
} from "react-router-dom";
import Home from "./home";
import SignUp from "./signup";


export default function App() {

const DarkTheme = createTheme({
  palette:{
      
      primary: {
        main: '#FF5F00'
      }
  }
})
  return (
    <BrowserRouter>
    <ThemeProvider  theme={DarkTheme}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Signup" element={<SignUp />} />
      </Routes>
    </ThemeProvider>
    
  </BrowserRouter>
  );
}