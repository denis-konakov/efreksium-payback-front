import React from "react";
import style from './../../css/notifications.module.css';
import { Link } from "react-router-dom";

const Notifications = () => {
    return (
        <div className={style.notifications}>
            
            <div className={style.header}>
                <div className={style.content}>
                    <Link to="/profile/groups">
                        <div className={style.icon}>
                            <svg width="32" height="29" viewBox="0 0 32 29" fill="black" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.7602 22.7409C12.5069 22.7409 12.2535 22.6563 12.0535 22.475L3.96019 15.1404C3.77422 14.9699 3.66992 14.7398 3.66992 14.5C3.66992 14.2602 3.77422 14.0301 3.96019 13.8596L12.0535 6.52502C12.4402 6.1746 13.0802 6.1746 13.4669 6.52502C13.8535 6.87544 13.8535 7.45544 13.4669 7.80585L6.08019 14.5L13.4669 21.1942C13.8535 21.5446 13.8535 22.1246 13.4669 22.475C13.2802 22.6563 13.0135 22.7409 12.7602 22.7409Z" fill="black"/>
                                <path d="M27.3336 15.4062H4.89355C4.34689 15.4062 3.89355 14.9954 3.89355 14.5C3.89355 14.0046 4.34689 13.5938 4.89355 13.5938H27.3336C27.8802 13.5938 28.3336 14.0046 28.3336 14.5C28.3336 14.9954 27.8802 15.4062 27.3336 15.4062Z" fill="black"/>
                            </svg>
                        </div>
                    </Link>
                    <div className={style.titel}>
                        Уведомления
                    </div>
                </div>
            </div>

            <div className={style.main}>
                <iframe src="https://www.youtube.com/embed/PkT0PJwy8mI"
                        title="Ты думал что-то здесь будет?" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen/>
            </div>

        </div>
    );
}

export default Notifications;