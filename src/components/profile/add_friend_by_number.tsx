import React from "react";
import style from './../../css/add_friend.module.css';
import {Route, Routes, Link, useParams} from "react-router-dom";
import {useAuthStore} from "../../store";
import FormAddFriendBN from "../forms/formAddFriendBN";



const Add_friend_by_number = () => {
    const userName = useAuthStore(state => state.name)();
    const {name} = useParams();
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
                
                <FormAddFriendBN pathName={(name ?? "").replace('.', '#')}/>

            </div>

        </div>
    );
}

export default Add_friend_by_number;