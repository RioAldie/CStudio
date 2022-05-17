import { createContext, ReactNode } from "react"


type UserCtxState = {
    data: string | null
}
interface childrenProps {
    children: ReactNode
}

const UserCtxDefaultValue: UserCtxState = {
    data: localStorage.getItem('user')
}

export const UserContext = createContext(UserCtxDefaultValue);

    
const UserContextProvider = ({children}: childrenProps)=>{
    return(
        <UserContext.Provider value={UserCtxDefaultValue}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;