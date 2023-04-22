import React from "react";
import style from './../../css/user_groups.module.css';
import { Link } from "react-router-dom";

const User_groups = () => {
    return (
            <div className={style.user_groups}>
                <div className={style.header}>
                    <div className={style.titel}>
                        Ваши группы
                    </div>

                    <div className={style.nav}>
                        <Link to="/profile/new_group">
                            <div className={style.add_group}></div>
                        </Link>
                        <a href="/">
                            <div className={style.notifications}></div>
                        </a>
                    </div>
                </div>

                <div className={style.content}>
                    <div className={style.hello}>
                        Здравствуй, {userName}!
                    </div>

                    <div className={style.logo}></div>

                    <div className={style.desc}>
                        Создайте новую группу и добавьте в неё друзей, с которыми необходимо разделить счет
                    </div>

                    <Link to="/profile/new_group">
                        <div className={style.group__button}>
                            <div className={style.button__icon}></div>
                            <div className={style.button__title}>Создать группу</div>
                        </div>
                    </Link>
                </div>
            </div>
    );
}

export default User_groups;