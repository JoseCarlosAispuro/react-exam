import {useUser} from "./useUser";
import {useLocalStorage} from "./useLocalStorage";
import {useEffect} from "react";
import {User} from "./useUser";
import {useNavigate} from "react-router-dom"

export const useAuth = () => {
    const {user, addUser, removeUser} = useUser()
    const navigate = useNavigate()
    const {getItem} = useLocalStorage()

    useEffect(() => {
        const user = getItem('user')
        if(user) {
            addUser(JSON.parse(user))
        } else {
            navigate('/sign-in')
        }
    },[])

    const login = (user: User) => {
        addUser(user)
        navigate('/')
    }

    const logout = () => {
        removeUser()
        navigate('/sign-in')
    }

    return {user, login, logout}
}
