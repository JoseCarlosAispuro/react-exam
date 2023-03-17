import {ReactNode} from "react";
import {AuthContext} from "../../context/AuthContext";
import {useAuth} from "../../hooks/useAuth";

const ProtectedRoute = ({children}: {children: ReactNode}) => {
    const {user} = useAuth()

    return (
        <AuthContext.Provider value={{user}}>
            {children}
        </AuthContext.Provider>
    )
}

export default ProtectedRoute
