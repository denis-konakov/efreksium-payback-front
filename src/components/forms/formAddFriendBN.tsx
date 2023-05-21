import React, {FormEvent, useEffect, useState} from "react";
import style from './../../css/add_friend.module.css';
import SubmitButton from "./input/submitButton";
import InputWithErrorMessage from "../InputWithErrorMessage";
import {createValidator, isName, syncCheck, useValidator} from "../../validators";
import {API} from "../../api";
import {useAuthStore} from "../../store";
import {useErrorState} from "../../hooks/useErrorState";
import {ErrorMessage} from "../ErrorMessage/ErrorMessage";
import {useNavigate} from "react-router-dom";
import {AxiosError} from "axios";
import {FriendsAddResponse} from "../../api/friends/add";
export interface FormAddFriendBNParams{
    pathName: string;
}

const FormAddFriendBN = ({pathName}: FormAddFriendBNParams) => {
    const navigate = useNavigate();
    const [formValid, setFormValid] = useState(false);
    const [name, setName] = useState('');
    useEffect(() => {
        setName(pathName);
    }, [pathName])
    const parseTag = async (e: string) => {
        try{
            const [name, user_tag] = e.split('#');
            if (!await isName()(name))
                return undefined;
            const user_id = parseInt(user_tag);
            if (user_id <= 0 || isNaN(user_id))
                return undefined;
            return user_id;
        }catch (e){}
        return undefined;
    }
    const [tag, setTag] = useState<number | undefined>(undefined)
    const [nameError, nameValidator] = useValidator<string>(createValidator({
        'Имя должно соответствовать шаблону username#id': [
            async (e) => {
                const t = await parseTag(e);
                if (t === undefined)
                    return false;
                setTag(t);
                return true;
            }
        ]
    }))

    const errorState = useErrorState();
    useEffect(() => {
        setTimeout(async () => {
            setTag(await parseTag(name));
        }, 0)
    }, [name])
    const token = useAuthStore(store => store.token);
    const updateProfile = useAuthStore(store => store.updateProfile);
    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (tag === undefined || tag <= 0 || isNaN(tag))
            return;
        try{
            await API.friends.add({token: token, recipient_id: tag});
            // TODO: Сообщение что успешно
            await updateProfile();
            navigate("/profile/friends");
        }catch (e){
            const data = (e as AxiosError<FriendsAddResponse>).response.data;
            errorState.wrong(data.detail.detail, data.detail.program_code);
        }
    }
    useEffect(() => {
        setFormValid(nameError === undefined)
    }, [nameError])
    return (
            <>
                <form onSubmit={onSubmit}>
                    <div className={style.input_number}>
                        <InputWithErrorMessage
                            error={nameError}
                            onChange={(e) => {
                                nameValidator(e.target.value);
                                setName(e.target.value);
                            }}
                            placeholder="Иван#123"
                            value={name}
                        />
                    </div>
                    {errorState.error &&
                    <ErrorMessage
                        detail={errorState.detail}
                        program_code={errorState.programCode}
                        title='Ошибка добавления в друзья'
                    />}
                    <SubmitButton disabled={!formValid}>
                        Добавить в друзья
                    </SubmitButton>
                </form>
            </>
    );
}

export default FormAddFriendBN;