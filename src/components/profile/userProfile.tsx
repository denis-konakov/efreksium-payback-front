import React from "react";
import style from './../../css/userProfile.module.css';
import { Route, Routes, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {useAuthStore} from "../../store";
import {attachment} from "../../api/parser";

const UserProfile = () => {
    const userName = useAuthStore(state => state.name)();
    const avatar = useAuthStore(s => s.profile.avatar);
    const logout = useAuthStore(s => s.logout);
    const navigate = useNavigate();
    const handleExit = async () => {
        await logout();
        navigate('/');
    }
    return (
        <div className={style.userProfile}>
            
            <div className={style.header}>
                <Link to="/profile/user_groups">
                    <div className={style.back_button}></div>
                </Link>
                <div className={style.img} style={{backgroundImage: `url('${attachment(avatar)}')`}}/>
                <div className={style.type_profile}></div>
            </div>

            <div className={style.user__name}>{userName}</div>
            
            <div className={style.user__options}>
                <div className={style.option + " " + style.option__checkbox}>
                    <div className={style.desc}>
                        <div className={style.title}>Солнце ушло</div>
                        <div className={style.subtitle}>включить тёмную тему</div>
                    </div>

                    <div className={style.checkbox}>
                        <label className={style.checkbox_google}>
                            <input type="checkbox"></input>
                            <span className={style.checkbox_google_switch}></span>
                        </label>
                    </div>
                </div>

                <div className={style.option + " " + style.option__checkbox}>
                    <div className={style.desc}>
                        <div className={style.title}>В обществе</div>
                        <div className={style.subtitle}>разрешить заявки в друзья</div>
                    </div>

                    <div className={style.checkbox}>
                        <label className={style.checkbox_google}>
                            <input type="checkbox"></input>
                            <span className={style.checkbox_google_switch}></span>
                        </label>
                    </div>
                </div>

                <div className={style.option + " " + style.option__checkbox}>
                    <div className={style.desc}>
                        <div className={style.title}>Тусовщик</div>
                        <div className={style.subtitle}>разрешить добавления в группы</div>
                    </div>

                    <div className={style.checkbox}>
                        <label className={style.checkbox_google}>
                            <input type="checkbox"></input>
                            <span className={style.checkbox_google_switch}></span>
                        </label>
                    </div>
                </div>

                <div className={style.option}>
                    <Link to="/profile/profileSub">
                        <div className={style.desc}>
                            <div className={style.title}>Подписка</div>
                            <div className={style.subtitle}>премиум доступ к сервису</div>
                        </div>
                    </Link>
                </div>

                <div className={style.option} onClick={handleExit}>
                    <div className={style.desc}>
                        <div className={style.title}>Выход</div>
                        <div className={style.subtitle}>выйти из аккаунта, бросив кентиков...</div>
                    </div>
                </div>
                
            </div>

        </div>
    );
}

export default UserProfile;