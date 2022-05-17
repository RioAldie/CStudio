import { Avatar, Box, Button, styled, TextField, Typography } from "@mui/material";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import { db } from "../firebase/firebase";
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
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [title, setTitle] = useState('');
    const users = useContext(UserContext);
    const userdata = JSON.parse(users.data || '');
    const handleFormdata = () =>{
        const profile={
            firstname: firstname,
            lastname: lastname,
            email: userdata.email,
            title: title,
            timeStamp: serverTimestamp()
        }
        
        handleSetData(profile);
    }
    const handleSetData = async (profiles:Object)=>{
        try {
           const res =  await setDoc(doc(db, "users",userdata.uid), {
          ...profiles
        })
        console.log("send data success")
        } catch (error) {
          console.log(error);    
        }
      
      }
    // useEffect(()=>{
    //     console.log(userdata.email)
    // },[users])
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
                    onChange={(e)=>setFirstname(e.target.value)}
                    />
                     <TextField
                    id="outlined-required"
                    label="lastname"
                    defaultValue="Dodo"
                    onChange={(e)=>setLastname(e.target.value)}
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
                    disabled
                    id="outlined-disabled"
                    label="email"
                    defaultValue={userdata.email}
                    onChange={(e)=>setEmail(e.target.value)}
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
                    disabled
                    id="outlined-disabled"
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
                    onChange={(e)=>setTitle(e.target.value)}
                    />
                    </Box>
                    
                </BoxDetail>
                <BoxDetail>
                    <Box sx={{display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'flex-end'}}>
                        <Button variant="contained" sx={{marginRight: 5}} onClick={(e)=> handleFormdata()}>Save</Button>
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