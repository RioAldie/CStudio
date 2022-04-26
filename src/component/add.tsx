import { Avatar, Backdrop, Box, Button, Fab, Fade, IconButton, Input, ListItem, ListItemAvatar, ListItemText, Modal, styled, TextField, Tooltip, Typography } from "@mui/material";
import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import { PhotoCamera } from "@mui/icons-material";
import Upload from "./upload";

export default function Add(){
    const [open, setOpen] = useState(false);

    const StyledModal = styled(Modal)({
        display: 'flex',
        alignItems:'center',
        justifyContent: 'center'
    });
    const StyledUpload = styled(Box)({
        display: 'flex',
        alignItems:'center',
        justifyContent: 'center',
        marginTop: '40px'
        
    })
    return(
        <>
        
        <div>
            <Button onClick={(e)=> setOpen(true)}>
                <Tooltip title="Add" arrow
                    sx={{
                        position: 'fixed',
                        bottom: 20,
                        md: 20,
                        ml: 20,
                        mb: 5,
                        display:{
                            xs: 'none',
                            md: 'flex'
                        }
                    }}
                    >
                        <Fab aria-label="add" color="primary">
                            <AddIcon/>
                        </Fab>
                </Tooltip>
                <Tooltip title="Add" arrow
                    sx={{
                        position: 'fixed',
                        bottom: 10,
                        md: 20,
                        ml: 80,
                        mb: 5,
                        display:{
                            xs: 'flex',
                            md: 'none'
                        }
                    }}
                    >
                        <Fab aria-label="add" color="primary">
                            <AddIcon/>
                        </Fab>
                </Tooltip>
            </Button>
            <StyledModal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={(e)=>setOpen(false)}
                closeAfterTransition
                
                BackdropProps={{
                timeout: 500,
                }}
            >
                <Fade in={open}>
                <Box width={500} height={320} bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={3} >
                   <Typography variant="h5" color="gray" textAlign={'center'}>Post Content</Typography>
                    <ListItem alignItems="flex-start" sx={{cursor: 'pointer'}}>
                    <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src={`/image/avatar-2.png`} />
                    
                    </ListItemAvatar>
                    <ListItemText
                    primary={"Shean Dong"}
                    secondary={
                        <>
                        <Typography
                            sx={{ display: 'inline',cursor: 'pointer' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                            {"The Man Of Moment"}
                        </Typography>                        
                        </>
                    }
                    />
                    </ListItem>
                    <StyledUpload>
                    <TextField fullWidth label="Caption" id="fullWidth" />
                        </StyledUpload>
                    <StyledUpload>
                        <Upload/>
                    </StyledUpload>
                
                    
                    
                </Box>
                </Fade>
            </StyledModal>
        </div>
        </>
    )
}