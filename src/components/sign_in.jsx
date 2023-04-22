import React, {useState} from 'react';
import style from './../css/sign_in.module.css';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Sign_in = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }
    
    const handleLogIn = (e) => {
        e.preventDefault();
        navigate("/profile/user_groups", { replace: true });
    }
    return (
        <div className={style.sign_in}>
            <form onSubmit={handleLogIn}>

                <div className={style.titel}>
                    <span>Вход</span>
                </div>

                <div className={style.form}>
                    <input type="text" placeholder="Введите почту" onChange={handleEmailChange} required/>
                    <input type="text" placeholder="Введите пароль" onChange={handlePasswordChange} required/>
                </div>
                <div className={style.forgot}>
                    <Link to="/password_recovery1">Забыли пароль?</Link>
                </div>

                <div className={style.button}>
                    <button type="submit">Войти</button>
                </div>

                <div className={style.footer}>
                    <p><span>Нет учётной записи?</span> <Link to="/sign_up">Зарегистрироваться</Link></p>
                </div>

            </form>
        </div>
    );
}

export default Sign_in;