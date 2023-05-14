import React, {useEffect} from "react";
import style from './../../css/profile.module.css';
import { Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import User_groups from "./GroupsPage/user_groups";
import Footer from "./footer";
import New_group from "./new_group";
import FriendsPage from "./FriendsPage/FriendsPage";
import Add_friend from "./add_friend";
import Add_friend_by_number from "./add_friend_by_number";
import UserProfile from "./userProfile";
import ProfileSub from "./profileSub";
import User_inside_group from "./user_inside_group";
import Admin_inside_group from "./admin_inside_group";
import History from "./history";
import Notifications from "./notifications";
import {useAuthStore} from "../../store";
import PreLoading from "../preLoad/preLoading";

const Profile = () => {
    const navigate = useNavigate();
    const isLoggedIn = useAuthStore(state => state.isLoggedIn);
    const updateProfile = useAuthStore(state => state.updateProfile);
    useEffect(() => {
        updateProfile().then(null).catch(null)
    }, []);
    return (
        isLoggedIn ?
        <div className={style.profile}>
            <Routes>
                <Route path="preload" element={<PreLoading/>} />
                <Route path="user_groups" element={<User_groups/>} />
                <Route path="new_group" element={<New_group />} />
                <Route path="user_inside_group" element={<User_inside_group />} />
                <Route path="admin_inside_group" element={<Admin_inside_group />} />

                <Route path="friends" element={<FriendsPage/>} />
                <Route path="add_friend" element={<Add_friend/>} />
                <Route path="add_friend_by_number/:name?" element={<Add_friend_by_number/>} />

                <Route path="userProfile" element={<UserProfile/>} />
                <Route path="profileSub" element={<ProfileSub />} />

                <Route path="history" element={<History />} />
                <Route path="notifications" element={<Notifications />} />
            </Routes>
            <Footer />
        </div>
        : navigate("/", { replace: true })
    );
}

export default Profile;