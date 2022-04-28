import { Box, CssBaseline, Stack } from "@mui/material";
import SignupForm from "./component/signup-form";

export default function SignUp(){
    return(
        <>
        <CssBaseline />
        <Box >
            <Stack justifyContent="space-evenly" direction="row" spacing={2}>
                <SignupForm/>
                <Box bgcolor={"yellow"} flex={2}>hero</Box> 
            </Stack>
           
        </Box>
        </>
    )
}