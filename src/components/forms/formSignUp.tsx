import React, {ChangeEvent, FormEvent, useEffect, useState} from "react";
import style from './../../css/sign_up.module.css';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import InputWithErrorMessage from "../InputWithErrorMessage";
import {
    createValidator,
    isNotEmpty,
    useValidator,
    DispatchValidator,
    isEmail,
    isPhone,
    isPassword, syncCheck
} from "../../validators";
import {API} from "../../api"
import {APP_URL} from "../../constants/api";
import {AxiosError, isAxiosError} from "axios";
import {useErrorState} from "../../hooks/useErrorState";
import {ErrorMessage} from "../ErrorMessage/ErrorMessage";

const FormSignUp = () => {
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('');
    const [terms, setTerms] = useState(false);

    const [nameError, nameValidator] = useValidator<string>(createValidator({
        'Имя не может быть пустым': [isNotEmpty()]
    }))

    const [emailError, emailValidator] = useValidator<string>(createValidator({
        'Введите корректную почту': [isNotEmpty(), isEmail()]
    }));
    const [phoneError, phoneValidator] = useValidator<string>(createValidator({
        'Введите корректный номер телефона': [isNotEmpty(), isPhone()]
    }));
    const [passwordError, passwordValidator] = useValidator<string>(createValidator({
        'Пароль должен быть длиннее 3 и меньше 12': [
            isNotEmpty(),
            isPassword(),
        ]
    }))
    const [repeatPasswordError, repeatPasswordValidator] = useValidator<string>(createValidator({
        'Пароли не совпадают': [
            syncCheck<string>(() =>{
                return password === repeatPassword;
            })
        ]
    }))

    const onChange = (setState: (a: string) => void) => {
        return (e: ChangeEvent<HTMLInputElement>) => {
            setState(e.target.value);
        };
    };
    const [formValid, setFormValid] = useState(false);
    const errorState = useErrorState();

    useEffect(() => {
        setFormValid([
            () => nameValidator(name),
            () => emailValidator(email),
            () => phoneValidator(phone),
            () => passwordValidator(password),
            () => repeatPasswordValidator(repeatPassword),
            () => terms,
        ].every(e => e()))
    }, [terms, name, email, phone, password, repeatPassword])

    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!formValid)
            return;
        try{
            let r = await API.user.register(
                {
                    email: email,
                    username: name,
                    number: phone,
                    password: password
                },
                {
                    redirect: `${APP_URL}/confirm-email`
                }
            )

            errorState.setError(false);
        } catch (e) {
            if (isAxiosError(e)) {
                const data = (e as AxiosError)?.response?.data;
                if (data?.detail?.status === false)
                    return errorState.wrong(data.detail.detail, data.detail.program_code);
                return errorState.wrong('Ошибка подключения', (e as AxiosError).code)
            }
        }
    }
    return (
            <div className={style.form}>
                <form onSubmit={onSubmit}>
                    <InputWithErrorMessage
                        type="text"
                        error={nameError}
                        onChange={onChange(setName)}
                        value={name}
                        placeholder="Имя"
                    />
                    <InputWithErrorMessage
                        type="text"
                        error={emailError}
                        onChange={onChange(setEmail)}
                        value={email}
                        placeholder="Почта"
                    />
                    <InputWithErrorMessage
                        type="text"
                        error={phoneError}
                        onChange={onChange(setPhone)}
                        value={phone}
                        placeholder="Номер телефона"
                    />
                    <InputWithErrorMessage
                        type="password"
                        error={passwordError}
                        onChange={onChange(setPassword)}
                        value={password}
                        placeholder="Пароль"
                    />
                    <InputWithErrorMessage
                        type="password"
                        error={repeatPasswordError}
                        onChange={onChange(setRepeatPassword)}
                        value={repeatPassword}
                        placeholder="Повторите пароль"
                    />
                    <div className={style.agree}>
                        <div className={style.checkbox}>
                            <input onChange={(e) => setTerms(e.target.checked)} checked={terms} type="checkbox" id="agree"/>
                        </div>
                        <div className={style.text}>
                            <p>Я согласен с <Link to="/terms_of_use">условиями пользования</Link> и <Link to="/privacy_policy">политикой конфиденциальности</Link></p>
                        </div>
                    </div>
                    <div className={style.button}>
                        <button disabled={!formValid} type="submit">
                            Зарегистрироваться
                        </button>
                    </div>
                    {errorState.error && <ErrorMessage
                        detail={errorState.detail}
                        program_code={errorState.programCode}
                        title={'Ошибка'}
                    />}
                </form>
            </div>
    );
}

export default FormSignUp;