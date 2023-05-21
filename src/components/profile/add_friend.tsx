import React from "react";
import style from './../../css/add_friend.module.css';
import { Route, Routes, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {useAuthStore} from "../../store";
import {attachment} from "../../api/parser";
import {QRCodeSVG} from 'qrcode.react'
import {APP_URL} from "../../constants/api";
const Add_friend = () => {
    const userName = useAuthStore(state => state.name)();
    const profile = useAuthStore(s => s.profile);
    const avatar = profile.avatar;
    const qr_url = `${APP_URL}/profile/add_friend_by_number/${profile.username}.${profile.id}`
    return (
        <div className={style.add_friend}>
            
            <div className={style.header}>
                <Link to="/profile/friends">
                    <div className={style.back_button}></div>
                </Link>
                <div className={style.img} style={{backgroundImage: `url('${attachment(avatar)}')`}}/>
            </div>

            <div className={style.desc}>
                <div className={style.title}>
                    {userName}
                </div>
                <div className={style.subtitle}>
                    Покажи шарющему кентику, он поймёт, что надо делать...
                </div>

                <QRCodeSVG
                    className={style.qr_code}
                    value={qr_url}
                />
            </div>

            <Link to="/profile/add_friend_by_number">
                <div className={style.add_by_number}>
                    <button>Добавить по номеру</button>
                </div>
            </Link>

        </div>
    );
}

export default Add_friend;