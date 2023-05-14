import React, {ChangeEvent, FormEvent, useState} from "react";
import style from './../../css/new_group.module.css';
import { useNavigate } from "react-router-dom";
import {ISharedUser} from "../../models/ISharedUser";
import {attachment, username} from "../../api/parser";
import {useAuthStore} from "../../store";
import {API} from "../../api";
import {isGroupName} from "../../validators";
import {useErrorState} from "../../hooks/useErrorState";
import {ErrorMessage} from "../ErrorMessage/ErrorMessage";
import {AxiosError} from "axios";
import {GroupCreateResponse} from "../../api/group/create";
import {GroupMemberAddResponse} from "../../api/group/member_add";

interface IUsersToAdd{
    [key: number]: boolean;
}
interface NewGroupUserCardProps{
    user: ISharedUser;
    value: IUsersToAdd;
    setValue: (a: IUsersToAdd) => void;
}

const NewGroupUserCard = (data: NewGroupUserCardProps) => {
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        data.setValue({
            ...data.value,
            [data.user.id]: e.target.checked
        });
    }
    return (<>
        <div className={style.group_invite_friend}>
            <div className={style.group_invite_friend_checkbox}>
                <input
                    className={style.custom_checkbox}
                    type="checkbox"
                    id="color-1"
                    name="color-1"
                    checked={data.value[data.user.id]}
                    onChange={onChange}
                />
                <label htmlFor="color-1">
                    <div className={style.group_invite_friend_info}>
                        <div
                            className={style.group_invite_friend_ava}
                            style={{backgroundImage: `url('${attachment(data.user.avatar)}')`}}/>
                        <div className={style.group_invite_friend_name}>
                            {username(data.user)}
                        </div>
                    </div>
                </label>
            </div>
        </div>
    </>);
}

const FormNewGroup = () => {
    const navigate = useNavigate();

    const friends= useAuthStore(s => s.profile.friends);
    const [friendsToAdd, setFriendsToAdd] = useState<IUsersToAdd>({});

    const [name, setName] = useState('');

    const errorState = useErrorState();
    const token = useAuthStore(s => s.token);

    const updateProfile = useAuthStore(s => s.updateProfile);

    const handleCreateGroup = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!await isGroupName()(name))
            return;

        try{
            const group_id = (await API.group.create({token: token, name: name})).data.detail.response.id;
            const members = Object.keys(friendsToAdd).filter((v) => friendsToAdd[v]);
            for (let m of members){
                try{
                    await API.group.member.add({token: token, group_id: group_id, user_id: parseInt(m)})
                } catch (e){}
            }


            await updateProfile();
            // TODO: Уведомление что успешно создана группа и добавлены пользователи в неё
            navigate("/profile/user_groups", { replace: true });
        } catch (e){
            const data = (e as AxiosError<GroupCreateResponse | GroupMemberAddResponse>).response.data;
            errorState.wrong(data.detail.detail, data.detail.program_code);
        }
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
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>

                    {errorState.error && (
                        <ErrorMessage
                            detail={errorState.detail}
                            program_code={errorState.programCode}
                            title='Ошибка создания группы'
                        />
                    )}

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



                    {friends.map((e, i) => (
                        <NewGroupUserCard
                            user={e}
                            key={i}
                            value={friendsToAdd}
                            setValue={setFriendsToAdd}
                        />
                    ))}

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