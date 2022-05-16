import { Box, CssBaseline, PaletteMode, Stack } from "@mui/material";
import { useState } from "react";
import Navbar from "./component/navbar";
import ProfileContent from "./component/profile-content";
import Settings from "./component/setting";

interface ProfileProps{
    mode: PaletteMode,
    setMode: React.Dispatch<React.SetStateAction<PaletteMode>>,
    setIsLogin: React.Dispatch<React.SetStateAction<boolean>>,
    setUserid: React.Dispatch<React.SetStateAction<String>>,
    isLogin: boolean,
}

export default function Profile(){
   
   const [currentUser, setCurrentuser] = useState(true);
    return(
        <>
            <CssBaseline/>
             
            <Box bgcolor={"background.default"} color={"text.primary"}>
            <Navbar /> 
                <Stack justifyContent="space-between" direction="row" spacing={2} p={4}>
                    <Settings />
                   <ProfileContent />
                </Stack>
                
            </Box>
        </>
    )
}