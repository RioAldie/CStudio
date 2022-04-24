import { Box, Typography } from "@mui/material";

const RightBar = () =>{
    return(
        <>
        <Box bgcolor="rebeccapurple" flex={2} p={2} sx={{display:{ xs: 'none', sm: 'block'}}}>
             <Typography variant="h6">RigthBar</Typography>
        </Box>
            
        </>
    )
}

export default RightBar;