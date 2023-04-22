import React from "react";
import style from './../css/sign_up.module.css';
import { Link } from "react-router-dom";

const Sign_up = () => {
    return (
        <div className={style.sign_up}>
        
            <div className={style.titel}>
                <span>Регистрация</span>
            </div>

            <div className={style.form}>
                <label>
                    <input type="text" placeholder="Имя"/>
                    <input type="text" placeholder="Пoчта"/>
                    <input type="text" placeholder="Номер телефона"/>
                    <input type="text" placeholder="Введите пароль"/>
                    <input type="text" placeholder="Повторите пароль"/>
                </label>
            </div>

            <div className={style.agree}>
                <div className={style.checkbox}>
                    <input type="checkbox" id="agree"/>
                </div>
                <div className={style.text}>
                    <p>Я согласен с <Link to="/terms_of_use">условиями пользования</Link> и <Link to="/privacy_policy">политикой конфиденциальности</Link></p>
                </div>
            </div>

            <div className={style.button}>
                <Link to="/sign_in">Зарегистрироваться</Link>
            </div>

        </div>
    );
}

export default Sign_up;