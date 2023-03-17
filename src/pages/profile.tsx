import MobileHeader from "../components/MobileHeader";
import {useUser} from "../hooks/useUser";
import {useContext} from "react";
import {AuthContext} from "../context/AuthContext";
import {useAuth} from "../hooks/useAuth";

const Profile = () => {
    const {logout} = useAuth()
    const {user} = useContext(AuthContext)
    const {getInitials} = useUser()

    return (
        <div className="profile">
            <MobileHeader prevLink="/" nextLink="" header=""/>
            <div className="profile-content grid">
                <div className="profile-image-container">
                    <div className="user-tile heading primary">
                        {getInitials(user?.name)}
                    </div>
                </div>
                <div className="profile-user-data-container">
                    <p className="profile-name heading secondary">{user?.name}</p>
                    <p className="profile-email body regular">{user?.email}</p>
                </div>
                <div className="logout-container">
                    <button className="link" onClick={logout}>Sign Out</button>
                </div>
            </div>
        </div>
    )
}

export default Profile
