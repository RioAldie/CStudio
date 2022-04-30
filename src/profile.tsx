import { Box, CssBaseline, PaletteMode, Stack } from "@mui/material";
import Navbar from "./component/navbar";
import ProfileContent from "./component/profile-content";
import Settings from "./component/setting";

interface ProfileProps{
    mode: PaletteMode,
    setMode: React.Dispatch<React.SetStateAction<PaletteMode>>,
}

export default function Profile(props: ProfileProps){
   const {mode, setMode} = props;
   
    return(
        <>
            <CssBaseline/>
            <Navbar setMode={setMode} mode={mode}  />
            <Box>
                <Stack justifyContent="space-between" direction="row" spacing={2} p={4}>
                    <Settings />
                   <ProfileContent />
                </Stack>
            </Box>
        </>
    )
}