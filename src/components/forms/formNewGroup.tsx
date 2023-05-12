import React from "react";
import style from './../../css/new_group.module.css';
import { useNavigate } from "react-router-dom";

const FormNewGroup = () => {
    const navigate = useNavigate();
    const handleCreateGroup = () => {
        navigate("/profile/user_groups", { replace: true });
    }

    return (
        <>
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
        </>
    );
}

export default FormNewGroup;