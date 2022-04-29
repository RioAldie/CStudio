import { Avatar, Box,Card,CardActions,CardContent,CardHeader,CardMedia,Checkbox,Collapse,IconButton,styled,Typography } from "@mui/material";
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
                <Post name="Alexandra Mitrova" image="/image/david-clode-uTj6-eZeHto-unsplash.jpg" date="September 14, 2016" avatar="/image/avatar-1.png"/>
                <Post name="Teressa Rogers" image="/image/alvan-nee-ZCHj_2lJP00-unsplash.jpg" date="January 19, 2022" avatar="/image/avatar-5.png"/>
                <Post name="Sean Dong" image="/image/moment-beach.jpg" date="Desember 29, 2021" avatar="/image/avatar-2.png"/>
                <Post name="Rudi Santoso" image="/image/nature-vibes.jpg" date="Maret 10, 2022" avatar="/image/avatar-4.png"/>
                <Post name="Sakamoto Rina" image="/image/wedding-cake.jpg" date="April 15, 2022" avatar="/image/avatar-3.png"/>
            </PostContainer>
        
        </Box>
        </>
    )
}

export default Feed;