import { Badge, Box, ListItem, ListItemAvatar, ListItemText, Typography,styled } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { ReactNode } from "react";

const BadgeBox = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width:'30px',
    height: '50px'
})
interface ContributorProps{
    name: String,
    like: ReactNode,
    job: String,
    avatar: String

}
export default function Contributor(props: ContributorProps){
    const {name, like, job, avatar} = props;
    return(
        <>
        <ListItem alignItems="flex-start" sx={{cursor: 'pointer'}}>
                    <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src={`${avatar}`} />
                    
                    </ListItemAvatar>
                    <ListItemText
                    primary={name}
                    secondary={
                        <>
                        <Typography
                            sx={{ display: 'inline',cursor: 'pointer' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                            {job}
                        </Typography>                        
                        </>
                    }
                    />
                    <BadgeBox >
                    <Badge color="secondary" badgeContent={like} max={999}>
                    <  FavoriteIcon color="error" />
                    </Badge>
                    </BadgeBox>
                </ListItem>
        </>
    )
}