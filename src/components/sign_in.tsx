import React, {ChangeEvent, useState} from 'react';
import style from './../css/sign_in.module.css';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {useAuthStore} from "../store";
import ButtonSignIn from './buttons/buttonSignIn';
import InputWithErrorMessage from "./InputWithErrorMessage";
import {createValidator, isNotEmpty, syncCheck, isEmail, useValidatorError} from "../validators";
const Sign_in = () => {

    const navigate = useNavigate();
    const login = useAuthStore(state => state.login);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");



    // Валидация пароля



    const handleLogIn = async (e) => {
        e.preventDefault();
        login({
            email: email,
            password: password,
        }).then(() => {
            navigate("/profile/user_groups", { replace: true });
        })

    }

    const [validateEmailError, validateEmail] = useValidatorError(createValidator({
        'Почта не может быть пустой': [isNotEmpty()],
        'Введена некорректная почта': [isEmail()],
    }))
    const [validatePasswordError, validatePassword] = useValidatorError(createValidator({
        'Пароль должен быть длиннее 3 и меньше 12': [
            isNotEmpty(),
            syncCheck<string>((e) => (
                e.length < 3 || e.length > 12
            )),
        ]
    }))
    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
        validatePassword(e.target.value);
    }
    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
        validateEmail(e.target.value);
    }
    return (
        <div className={style.sign_in}>
            <form onSubmit={handleLogIn}>

                <div className={style.titel}>
                    <span>Вход</span>
                </div>

                <div className={style.form}>
                    <InputWithErrorMessage
                        name='email'
                        value={email}
                        type="text"
                        placeholder="Введите почту"
                        onChange={handleEmailChange}
                        error={validateEmailError}
                        required
                    />
                    
                    <InputWithErrorMessage
                        name='password'
                        value={password}
                        type="text"
                        placeholder="Введите пароль"
                        onChange={handlePasswordChange}
                        error={validatePasswordError}
                        required
                    />
                </div>
                <div className={style.forgot}>
                    <Link to="/password_recovery1">Забыли пароль?</Link>
                </div>

                <div className={style.button}>
                    <ButtonSignIn />
                </div>

                <div className={style.footer}>
                    <p><span>Нет учётной записи?</span> <Link to="/sign_up">Зарегистрироваться</Link></p>
                </div>

            </form>
        </div>
    );
}

export default Sign_in;