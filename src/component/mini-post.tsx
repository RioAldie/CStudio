import { Avatar, Badge, Box,Card,CardActions,CardContent,CardHeader,CardMedia,Checkbox,Collapse,IconButton,styled,Typography } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ExpandMore, Favorite, FavoriteBorder } from "@mui/icons-material";

export default function MiniPost(){
    return(
        <Card sx={{ maxWidth: 245,maxHeight: 380, marginTop: '40px', marginLeft: '30px' }} >
                <CardHeader
                   
                    action={
                        <IconButton aria-label="edit">
                        <EditIcon />
                        </IconButton>
                    }
                    title={""}
                    subheader={"15 Februari 2020"}
                    sx={{ cursor: 'pointer'}}
                />
                <CardMedia
                    component="img"
                    height="50%"
                    image ={`/image/nature-vibes.jpg`}
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                    This impressive paella is a perfect party d
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    
                    <Badge color="secondary" badgeContent={12} max={99}>
                    <  FavoriteIcon color="error" />
                    </Badge>
                   
                    <IconButton aria-label="share">
                    <ShareIcon />
                    </IconButton>
                    <IconButton aria-label="delete">
                    <DeleteIcon />
                    </IconButton>
                </CardActions>
                
                    </Card>
    )
}