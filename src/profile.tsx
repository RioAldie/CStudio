import { Box, CssBaseline, PaletteMode, Stack } from "@mui/material";
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
   
   
    return(
        <>
            <CssBaseline/>
            {/* <Navbar setMode={setMode} mode={mode} isLogin={false} setIsLogin={setIsLogin} setUserid={setUserid} /> */}
            <Box>
                <Stack justifyContent="space-between" direction="row" spacing={2} p={4}>
                    <Settings />
                   <ProfileContent />
                </Stack>
            </Box>
        </>
    )
}