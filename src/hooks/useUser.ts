import {useState} from "react";
import {useLocalStorage} from "./useLocalStorage";

export interface User {
    id: string;
    name: string;
    email: string;
    authToken?: string;
}

export const useUser = () => {
    const {setItem, removeItem} = useLocalStorage()
    const [user, setUser] = useState<User | null>(null)

    const addUser = (userData: User) => {
        setItem('user', JSON.stringify(userData))
        setUser(userData)
    }

    const removeUser = () => {
        removeItem('user')
    }

    const getInitials = (name: string | undefined) => {
        const names = name?.split(' ');
        let initials : string = ''

        if(names) {
            initials = names[0].substring(0,1).toUpperCase();

            if(names.length > 1) {
                const secondNameInitial = names[1].substring(0,1).toUpperCase();
                initials += secondNameInitial
            }
        }

        return initials;
    }

    return {user, addUser, removeUser, getInitials}
}
