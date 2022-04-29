import { Box, CssBaseline, Stack } from "@mui/material";
import Hero from "./component/hero";
import SignupForm from "./component/signup-form";


export default function SignUp(){
    return(
        <>
        <CssBaseline />
        <Box sx={{display: 'flex', justifyContent:'center', alignItems: 'center'}}>
            <Stack justifyContent="space-between" direction="row" spacing={2}>
                <SignupForm/>
                <Hero />
            </Stack>
        </Box>
        </>
    )
}