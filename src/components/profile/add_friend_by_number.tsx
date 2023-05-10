import React from "react";
import style from './../../css/add_friend.module.css';
import { Route, Routes, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {useAuthStore} from "../../store";

const Add_friend_by_number = () => {
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
                <form action="">
                    <div className={style.input_number}>
                        <input type="tel" placeholder="Введите номер кентика" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required></input>
                    </div>
                </form>
            </div>

            <Link to="/profile/friends">
                <div className={style.add_by_number}>
                    <button>Кинуть приглашение</button>
                </div>
            </Link>

        </div>
    );
}

export default Add_friend_by_number;