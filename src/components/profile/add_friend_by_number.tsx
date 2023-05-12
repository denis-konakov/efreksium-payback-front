import React from "react";
import style from './../../css/add_friend.module.css';
import { Route, Routes, Link } from "react-router-dom";
import {useAuthStore} from "../../store";
import FormAddFriendBN from "../forms/formAddFriendBN";



const Add_friend_by_number = () => {
    const handleLogIn = async (e) => {
        e.preventDefault();

        if (password != repPassword) {
            setRepPasswordError('Пароли не совпадают!');
        } else {
            navigate("/sign_in", { replace: true });
        }
    }

    const userName = useAuthStore(state => state.name)();
    return (
        <div className={style.add_friend_by_number}>
            
            <div className={style.header}>
                <Link to="/profile/add_friend">
                    <div className={style.back_button}></div>
                </Link>
                <div className={style.img}></div>
            </div>

            <div className={style.desc}>
                <div className={style.title}>
                    {userName}
                </div>
                <div className={style.subtitle}>
                    Друг познается в беде, но важно, чтобы он не был чертом...
                </div>
                
                <FormAddFriendBN />

            </div>

        </div>
    );
}

export default Add_friend_by_number;