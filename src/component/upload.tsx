
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import { addDoc, collection, doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase';
import React, { useState } from 'react';

const Input = styled('input')({
  display: 'none',
});
interface uploadProps{
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Upload(props: uploadProps) {
  const [caption, setCaption] = useState();
  const [photo, setPhoto] =  useState();
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
    <Stack direction="row" alignItems="center" spacing={2}>
      <form>
      {/* <label htmlFor="contained-button-file">
        <Input accept="image/*" id="contained-button-file" multiple type="file" />
        <Button variant="contained" component="span">
          Upload
        </Button>
      </label> */}
      <label htmlFor="icon-button-file">
        <Input accept="image/*" id="icon-button-file" type="file" />
        <IconButton color="primary" aria-label="upload picture" component="span">
          <PhotoCamera />
        </IconButton>
      </label> 
      <label htmlFor="">
        <Button variant="contained" component="span" >
          Upload
        </Button>
      </label>

        </form>
    </Stack>
  );
}
