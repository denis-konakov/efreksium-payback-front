import React from "react";
import style from './../../css/profile.module.css';
import { Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import User_groups from "./user_groups.jsx";
import Footer from "./footer.jsx";
import New_group from "./new_group.jsx";
import Friends from "./friends.jsx";
import Add_friend from "./add_friend.jsx";
import Add_friend_by_number from "./add_friend_by_number.jsx";
import UserProfile from "./userProfile.jsx";
import ProfileSub from "./profileSub.jsx";

const Profile = () => {
    const navigate = useNavigate();
    return (

        isLoggedIn ?
        <div className={style.profile}>
            <Routes>
                <Route path="user_groups" element={<User_groups userName={userName}/>} />
                <Route path="new_group" element={<New_group />} />

                <Route path="friends" element={<Friends userName={userName}/>} />
                <Route path="add_friend" element={<Add_friend userName={userName}/>} />
                <Route path="add_friend_by_number" element={<Add_friend_by_number userName={userName}/>} />

                <Route path="userProfile" element={<UserProfile userName={userName}/>} />
                <Route path="profileSub" element={<ProfileSub />} />
            </Routes>
            
            <Footer />
        </div>
        : navigate("/", { replace: true })
    );
}

export default Profile;