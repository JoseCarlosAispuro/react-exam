import {createContext} from "react";
import {User} from "../hooks/useUser"

interface AuthContext {
    user: User | null;
}

export const AuthContext = createContext<AuthContext>({
    user: null
})
