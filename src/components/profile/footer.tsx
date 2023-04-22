import React from "react";
import style from './../../css/footer.module.css';
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <div className={style.footer}>
            <NavLink to="/profile/user_groups">
                <div className={style.element + " " + style.groups}>
                    <div className={style.img}>
                        <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24.7916 30.625V27.7083C24.7916 26.1612 24.177 24.6775 23.083 23.5835C21.9891 22.4896 20.5053 21.875 18.9583 21.875H7.29159C5.74449 21.875 4.26076 22.4896 3.1668 23.5835C2.07283 24.6775 1.45825 26.1612 1.45825 27.7083V30.625" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M13.1251 16.0417C16.3467 16.0417 18.9584 13.43 18.9584 10.2083C18.9584 6.98667 16.3467 4.375 13.1251 4.375C9.90342 4.375 7.29175 6.98667 7.29175 10.2083C7.29175 13.43 9.90342 16.0417 13.1251 16.0417Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M33.5417 30.625V27.7083C33.5408 26.4158 33.1106 25.1603 32.3187 24.1388C31.5269 23.1173 30.4182 22.3877 29.1667 22.0646" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M23.3333 4.56458C24.588 4.88585 25.7002 5.6156 26.4944 6.63878C27.2886 7.66196 27.7197 8.92037 27.7197 10.2156C27.7197 11.5109 27.2886 12.7693 26.4944 13.7925C25.7002 14.8156 24.588 15.5454 23.3333 15.8667" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>

                    <div className={style.titel}>
                        Группы
                    </div>
                </div>
            </NavLink>

            <NavLink to="/profile/friends">
                <div className={style.element + " " + style.friends}>
                    <div className={style.img}>
                        <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.4166 2.91663H8.74992C7.97637 2.91663 7.2345 3.22392 6.68752 3.7709C6.14054 4.31788 5.83325 5.05974 5.83325 5.83329V29.1666C5.83325 29.9402 6.14054 30.682 6.68752 31.229C7.2345 31.776 7.97637 32.0833 8.74992 32.0833H26.2499C27.0235 32.0833 27.7653 31.776 28.3123 31.229C28.8593 30.682 29.1666 29.9402 29.1666 29.1666V11.6666L20.4166 2.91663Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M20.4167 2.91663V11.6666H29.1667" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M23.3334 18.9584H11.6667" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M23.3334 24.7916H11.6667" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M14.5834 13.125H13.1251H11.6667" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>

                    <div className={style.titel}>
                        Друзья
                    </div>
                </div>
            </NavLink>

            <NavLink to="#">
                <div className={style.element + " " + style.history}>
                    <div className={style.img}>
                        <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.5001 32.0833C25.5542 32.0833 32.0834 25.5541 32.0834 17.5C32.0834 9.44581 25.5542 2.91663 17.5001 2.91663C9.44593 2.91663 2.91675 9.44581 2.91675 17.5C2.91675 25.5541 9.44593 32.0833 17.5001 32.0833Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M17.5 8.75V17.5L23.3333 20.4167" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>

                    <div className={style.titel}>
                        История
                    </div>
                </div>
            </NavLink>

            <NavLink to="/profile/userProfile">
                <div className={style.element + " " + style.my__profile}>
                    <div className={style.img}>
                        <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M29.1666 30.625V27.7083C29.1666 26.1612 28.552 24.6775 27.458 23.5835C26.3641 22.4896 24.8803 21.875 23.3333 21.875H11.6666C10.1195 21.875 8.63576 22.4896 7.5418 23.5835C6.44783 24.6775 5.83325 26.1612 5.83325 27.7083V30.625" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M17.5001 16.0417C20.7217 16.0417 23.3334 13.43 23.3334 10.2083C23.3334 6.98667 20.7217 4.375 17.5001 4.375C14.2784 4.375 11.6667 6.98667 11.6667 10.2083C11.6667 13.43 14.2784 16.0417 17.5001 16.0417Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>

                    <div className={style.titel}>
                        Профиль
                    </div>
                </div>
            </NavLink>
        </div>
    );
}

export default Footer;