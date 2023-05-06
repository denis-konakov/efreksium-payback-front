import React from "react";
import style from './../../css/new_group.module.css';
import { useNavigate, Link } from "react-router-dom";

const New_group = () => {
    const navigate = useNavigate();
    const handleCreateGroup = () => {
        navigate("/profile/user_groups", { replace: true });
    }

    return (
        <div className={style.new_group}>

            <div className={style.header}>
                <div className={style.content}>
                    <Link to="/profile/user_groups">
                        <div className={style.icon}>
                            <svg width="32" height="29" viewBox="0 0 32 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.7602 22.7409C12.5069 22.7409 12.2535 22.6563 12.0535 22.475L3.96019 15.1404C3.77422 14.9699 3.66992 14.7398 3.66992 14.5C3.66992 14.2602 3.77422 14.0301 3.96019 13.8596L12.0535 6.52502C12.4402 6.1746 13.0802 6.1746 13.4669 6.52502C13.8535 6.87544 13.8535 7.45544 13.4669 7.80585L6.08019 14.5L13.4669 21.1942C13.8535 21.5446 13.8535 22.1246 13.4669 22.475C13.2802 22.6563 13.0135 22.7409 12.7602 22.7409Z" fill="white"/>
                                <path d="M27.3336 15.4062H4.89355C4.34689 15.4062 3.89355 14.9954 3.89355 14.5C3.89355 14.0046 4.34689 13.5938 4.89355 13.5938H27.3336C27.8802 13.5938 28.3336 14.0046 28.3336 14.5C28.3336 14.9954 27.8802 15.4062 27.3336 15.4062Z" fill="white"/>
                            </svg>
                        </div>
                    </Link>
                    <div className={style.titel}>
                        Создание группы
                    </div>
                </div>
            </div>

            <form onSubmit={handleCreateGroup}>
            <div className={style.main}>

                <div className={style.group_options}>
                    <div className={style.group_avatar}></div>
                    
                    <div className={style.group_titel}>
                        <div className={style.titel}>Название группы</div>
                        <div className={style.titel_input}>
                            <input type="text" />
                        </div>
                    </div>
                </div>



                <div className={style.group_meeting}>
                    <div className={style.meeting_title}>Вид встречи</div>
                    <div className={style.meeting_button}>
                        <button>Выберите вид встречи</button>
                    </div>
                </div>



                <div className={style.group_check_debt}>
                    <div className={style.group_check_desc}>
                        <div className={style.group_check_title}>
                            Упростить групповые долги
                        </div>
                        <div className={style.group_check_subtitle}>
                            Автоматически объединяйте долги, чтобы <br/> уменьшить общее количество выплат между<br/> членами группы
                        </div>
                    </div>

                    <div className={style.group_checkbox}>
                        <label className={style.checkbox_google}>
                            <input type="checkbox"></input>
                            <span className={style.checkbox_google_switch}></span>
                        </label>
                    </div>
                </div>



                <div className={style.group_invite}>
                    <div className={style.group_invite_friend}>
                        <div className={style.group_invite_friend_checkbox}>
                            <input className={style.custom_checkbox} type="checkbox" id="color-1" name="color-1" value="indigo"></input>
                            <label for="color-1">
                                <div className={style.group_invite_friend_info}>
                                    <div className={style.group_invite_friend_ava}></div>
                                    <div className={style.group_invite_friend_name}>Анатолий</div>
                                </div>
                            </label>
                        </div> 
                    </div>


                    <div className={style.group_invite_friend}>
                        <div className={style.group_invite_friend_checkbox}>
                            <input className={style.custom_checkbox} type="checkbox" id="color-2" name="color-2" value="indigo"></input>
                            <label for="color-2">
                                <div className={style.group_invite_friend_info}>
                                    <div className={style.group_invite_friend_ava}></div>
                                    <div className={style.group_invite_friend_name}>Саня</div>
                                </div>
                            </label>
                        </div> 
                    </div>


                    <div className={style.group_invite_friend}>
                        <div className={style.group_invite_friend_checkbox}>
                            <input className={style.custom_checkbox} type="checkbox" id="color-3" name="color-3" value="indigo"></input>
                            <label for="color-3">
                                <div className={style.group_invite_friend_info}>
                                    <div className={style.group_invite_friend_ava}></div>
                                    <div className={style.group_invite_friend_name}>Гарик</div>
                                </div>
                            </label>
                        </div> 
                    </div>
                </div>



                <div className={style.group_create}>
                    <div className={style.create_button}>
                        <button type="submit">Создать</button>
                    </div>
                </div>

            </div>
            </form>

        </div>
    );
}

export default New_group;