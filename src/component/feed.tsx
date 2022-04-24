import { Avatar, Box,Card,CardActions,CardContent,CardHeader,CardMedia,Checkbox,Collapse,IconButton,styled,Typography } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ExpandMore, Favorite, FavoriteBorder } from "@mui/icons-material";
import Post from "./post";
const Feed = () =>{

    const PostContainer = styled(Box)({
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        height: 'Max-content',
        flexDirection: "column",
        alignItems: "center"
    })
    return(
        <>
        <Box flex={4} p={2} justifyContent="center" alignItems="center">
            <PostContainer >
                <Post name="Marco De Laude" image="/image/david-clode-uTj6-eZeHto-unsplash.jpg" date="September 14, 2016"/>
                <Post name="Sakamoto Sukuna" image="/image/alvan-nee-ZCHj_2lJP00-unsplash.jpg" date="January 19, 2022"/>
            </PostContainer>
        
        </Box>
        </>
    )
}

export default Feed;