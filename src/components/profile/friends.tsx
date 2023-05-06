import React from "react";
import style from './../../css/friends.module.css';
import { Route, Routes, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {useAuthStore} from "../../store";

const Friends = () => {
    const userName = useAuthStore(state => state.profile.username);
    return (
        <div className={style.friends}>

            <div className={style.header}>
                <div className={style.titel}>
                    Ваши друзья
                </div>

                <div className={style.nav}>
                    <Link to="/profile/add_friend">
                        <div className={style.add__friend}>
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M26.6665 35V31.6667C26.6665 29.8986 25.9641 28.2029 24.7139 26.9526C23.4636 25.7024 21.7679 25 19.9998 25H8.33317C6.56506 25 4.86937 25.7024 3.61913 26.9526C2.36888 28.2029 1.6665 29.8986 1.6665 31.6667V35" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M14.1667 18.3333C17.8486 18.3333 20.8333 15.3486 20.8333 11.6667C20.8333 7.98477 17.8486 5 14.1667 5C10.4848 5 7.5 7.98477 7.5 11.6667C7.5 15.3486 10.4848 18.3333 14.1667 18.3333Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M33.3335 13.3333V23.3333" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M38.3335 18.3333H28.3335" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </Link>
                    <Link to="/profile/notifications">
                        <div className={style.notifications}></div>
                    </Link>
                </div>
            </div>

            <div className={style.content}>
                <div className={style.hello}>
                    Здравствуй, {userName}!
                </div>

                <div className={style.logo}></div>

                <div className={style.desc}>
                    У Вас нет ни одного друга {":("} Нажмите на кнопку “Добавить друга” и отсканируйте QR-код
                </div>

                <Link to="/profile/add_friend">
                    <div className={style.group__button}>
                        <div className={style.button__icon}>
                            <svg width="25" height="25" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M26.6665 35V31.6667C26.6665 29.8986 25.9641 28.2029 24.7139 26.9526C23.4636 25.7024 21.7679 25 19.9998 25H8.33317C6.56506 25 4.86937 25.7024 3.61913 26.9526C2.36888 28.2029 1.6665 29.8986 1.6665 31.6667V35" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M14.1667 18.3333C17.8486 18.3333 20.8333 15.3486 20.8333 11.6667C20.8333 7.98477 17.8486 5 14.1667 5C10.4848 5 7.5 7.98477 7.5 11.6667C7.5 15.3486 10.4848 18.3333 14.1667 18.3333Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M33.3335 13.3333V23.3333" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M38.3335 18.3333H28.3335" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <div className={style.button__title}>Добавить друга</div>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Friends;