import {ChangeEvent, useState} from 'react';
import style from './../css/sign_in.module.css';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {useAuthStore} from "../store";
import InputWithErrorMessage from "./InputWithErrorMessage";
import {createValidator, isNotEmpty, syncCheck, isEmail, useValidator, isPassword} from "../validators";
import {ErrorMessage} from "./ErrorMessage/ErrorMessage";
const Sign_in = () => {

    const navigate = useNavigate();
    const login = useAuthStore(state => state.login);
    const isLoading = useAuthStore(state => state.isLoading);
    const detail = useAuthStore(state => state.detail);
    const program_code = useAuthStore(state => state.program_code);
    const error = useAuthStore(state => state.error);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");




    const [validateEmailError, validateEmail] = useValidator(createValidator({
        'Почта не может быть пустой': [isNotEmpty()],
        'Введена некорректная почта': [isEmail()],
    }))
    const [validatePasswordError, validatePassword] = useValidator(createValidator({
        'Пароль должен быть длиннее 3 и меньше 12': [
            isNotEmpty(),
            isPassword(),
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

    const handleLogIn = async (e) => {
        e.preventDefault();
        if (!validateEmail(email) || !validatePassword(password))
            return;
        login({
            email: email,
            password: password,
        }).then(() => {
            navigate("/profile/user_groups", { replace: true });
        }).catch(null)

    }



    return (
        <div className={style.sign_in}>
            <div >

                <div className={style.titel}>
                    <span>Вход</span>
                </div>

                <form className={style.form} onSubmit={handleLogIn}>
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
                    <div className={style.button}>
                        <button type="submit">Войти</button>
                    </div>
                    {error && <ErrorMessage
                        detail={detail}
                        program_code={program_code}
                        title='Ошибка авторизации'
                    />}
                </form>
                <div className={style.forgot}>
                    <Link to="/password_recovery1">Забыли пароль?</Link>
                </div>


                <div className={style.footer}>
                    <p><span>Нет учётной записи?</span> <Link to="/sign_up">Зарегистрироваться</Link></p>
                </div>
            </div>
        </div>
    );
}

export default Sign_in;