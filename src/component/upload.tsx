
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import { addDoc, collection, doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase';
import React, { useState } from 'react';
import { Box, FormControl, InputLabel, MenuItem, TextField } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const Input = styled('input')({
  display: 'none',
});
interface uploadProps{
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Upload(props: uploadProps) {
  const [caption, setCaption] = useState();
  const [photo, setPhoto] =  useState();
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  const {setOpen} = props;
  const handleSetData = async ()=>{
    try {
       const res =  await addDoc(collection(db, "cities"), {
      name: "Kediri",
      state: "East Java",
      country: "Indonesia",
      timeStamp: serverTimestamp()
    });
    setOpen(false);
    } catch (error) {
      console.log(error);    
    }
  
  }
  return (
    <Stack direction="row" alignItems="center" spacing={2} sx={{display:'flex', flexDirection:'column',justifyContent:'space-evenly',alignItems:'center'}}>
      
      <label htmlFor="">
      <Box sx={{ minWidth: '450px' }}>
            <TextField fullWidth label="Caption" id="fullWidth" />
            <FormControl fullWidth sx={{mt:3}}>
              <InputLabel id="demo-simple-select-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Box>
      </label>
      <Box sx={{mt: 3}}>
      <label htmlFor="icon-button-file">
        <Input accept="image/*" id="icon-button-file" type="file" />
        <IconButton color="primary" aria-label="upload picture" component="span" sx={{mt: 3}}>
          <PhotoCamera />
         </IconButton>
      </label>
        
        
        <label htmlFor="">
          <Button variant="contained" component="span" sx={{mt: 3}}>
            Upload
          </Button>
        </label>
      </Box>
    </Stack>
  );
}
