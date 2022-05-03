import { ReducerWithoutAction } from "react";

interface AuthReducerProps{
    payload: ReducerWithoutAction<any>,
    state:  ReducerWithoutAction<any>,
    type: String,
    action: ReducerWithoutAction<any>,
    currentUser: ReducerWithoutAction<any>
}

const AuthReducer = (state : ReducerWithoutAction<any>, action: AuthReducerProps)=>{
    switch (action.type) {
        case "LOGIN":{
            return{
                currentUser: action.payload,
            };
        }
        case "LOGOUT":{
            return{
                currentUser: action.payload
            };
        }
        default:
            return state;
    }
}

export default AuthReducer;