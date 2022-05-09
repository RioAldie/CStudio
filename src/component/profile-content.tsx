import { Avatar, Box, Button, styled, TextField, Typography } from "@mui/material";
import MiniPost from "./mini-post";

const BoxStyled = styled(Box)({
    width: "100%",
    height: 450,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
});
const BoxDetails = styled(Box)({
    width: '100%',
    height: 800,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: 'center'
});
const BoxDetail = styled(Box)({
    display: "flex",
    flexDirection: "row",
    width: "90%",
    height: "50px",
    justifyContent: "space-between",
    alignItems: "center"
    
})
const BoxName = styled("div")(({theme}) =>({
    display: "flex",
    height: '130px',
    flexDirection: 'column',
    [theme.breakpoints.up("md")]:{
        flexDirection: 'row',
        height: '100px'
    }
}))
export default function ProfileContent(){
    return(
        <Box flex={3}  height={1000}>
            <BoxStyled sx={{display: 'flex', flexDirection: 'column'}}>
            <Avatar alt="Remy Sharp" src={`/image/avatar-1.png`} 
            sx={{ width: 150, height: 150 }}
            />
                    <Typography variant="h6" fontWeight={"normal"}>
                        Shen Dong
                    </Typography>
                    <Typography variant="h6" fontWeight={"light"} color={'gray'}>
                        shendong@gmail.com
                    </Typography>
            </BoxStyled>
            <Typography variant="h5" fontWeight={"bold"}>
                        Profile
                    </Typography>
            <BoxDetails>
                <BoxDetail>
                    <Typography variant="h6" fontWeight={"bold"}>
                        Username
                    </Typography>
                    <BoxName sx={{ width: '50%', alignItems: 'center', display: 'flex', justifyContent:'space-between'}}>
                    <TextField
                    id="outlined-required"
                    label="firstname"
                    defaultValue="Alexandra"
                    />
                     <TextField
                    id="outlined-required"
                    label="lastname"
                    defaultValue="Dodo"
                    />
                    </BoxName>
                   
                </BoxDetail>
                <BoxDetail>
                    <Typography variant="h6" fontWeight={"bold"}>
                        E-mail
                    </Typography>
                    <Box sx={{ width: '50%', display: 'flex', justifyContent:'space-between'}}>
                       <TextField
                    fullWidth
                    id="outlined-required"
                    label="email"
                    defaultValue="Alexandra@gmail.com"
                    /> 
                    </Box>
                    
                </BoxDetail>
                <BoxDetail>
                    <Typography variant="h6" fontWeight={"bold"}>
                        Password
                    </Typography>
                    <Box sx={{ width: '50%', display: 'flex', justifyContent:'space-between'}}>
                        <TextField
                    fullWidth
                    type={'password'}
                    id="outlined-required"
                    label="password"
                    defaultValue="se56sgsjsjksk"
                    />
                    </Box>
                    
                </BoxDetail>
                <BoxDetail>
                    <Typography variant="h6" fontWeight={"bold"}>
                        Title
                    </Typography>
                    <Box sx={{ width: '50%', display: 'flex', justifyContent:'space-between'}}>
                        <TextField
                    fullWidth
                    id="outlined-required"
                    label="title"
                    defaultValue="Reptiled Master"
                    />
                    </Box>
                    
                </BoxDetail>
                <BoxDetail>
                    <Box sx={{display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'flex-end'}}>
                        <Button variant="contained" sx={{marginRight: 5}}>Save</Button>
                        <Button variant="outlined">Cancel</Button>
                    </Box>
                    
                </BoxDetail>
                
            </BoxDetails>
            <Typography variant="h5" fontWeight={"bold"} color={'gray'}>
                        Lasted Post
                    </Typography>
            <Box display={'flex'} p={2} height={600} flexDirection={'row'} flexWrap={'wrap'}>
                
                <MiniPost/>
                <MiniPost/>
                <MiniPost/>
                <MiniPost/>
                <MiniPost/>
                <MiniPost/>
            </Box>
            
        </Box>
    )
}