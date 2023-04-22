import React from "react";
import style from './../../css/profile.module.css';
import { Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import User_groups from "./user_groups";
import Footer from "./footer";
import New_group from "./new_group";
import Friends from "./friends";
import Add_friend from "./add_friend";
import Add_friend_by_number from "./add_friend_by_number";
import UserProfile from "./userProfile";
import ProfileSub from "./profileSub";
import {useAuthStore} from "../../store";

const Profile = () => {
    const navigate = useNavigate();
    const [isLoggedIn, userName] = useAuthStore(state => [state.isLoggedIn, state.profile.username]);
    console.log(isLoggedIn)
    return (

        isLoggedIn ?
        <div className={style.profile}>
            <Routes>
                <Route path="user_groups" element={<User_groups/>} />
                <Route path="new_group" element={<New_group />} />

                <Route path="friends" element={<Friends/>} />
                <Route path="add_friend" element={<Add_friend/>} />
                <Route path="add_friend_by_number" element={<Add_friend_by_number/>} />

                <Route path="userProfile" element={<UserProfile/>} />
                <Route path="profileSub" element={<ProfileSub />} />
            </Routes>
            
            <Footer />
        </div>
        : navigate("/", { replace: true })
    );
}

export default Profile;