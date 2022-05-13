import { Button } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { AppContext } from "../../App";
import SignIn from "../signin";

interface SignProps{
    isLogin: boolean
}
export default function ButtonSign(){
    return(
        <>
        <AppContext.Consumer>
            {
                ({isLogin}) =>{
                    if(isLogin){
                        return <Button variant="contained"> <AccountCircleIcon/> Logout </Button>
                    }
                    if(!isLogin){
                        return  <SignIn isLogin={isLogin} />
                    }
                }
            }
        </AppContext.Consumer>
        </>
    )
}