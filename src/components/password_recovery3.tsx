import React from "react";
import style from './../css/password_recovery.module.css';
import { Link } from "react-router-dom";

const Password_recovery3 = () => {
    return (
        <div className={style.pas_rec_3}>
            <div className={style.pas_rec}>
            
                <div className={style.titel}>
                    <span>Восстановление<br/>пароля</span>
                </div>

                <div className={style.form}>
                    <label>
                        <input type="text" placeholder="Введите новый пароль"/>
                        <input type="text" placeholder="Повторите пароль"/>
                    </label>
                </div>

                <div className={style.button}>
                    <Link to="/sign_in">Далее</Link>
                </div>
            
            </div>
        </div>
    );
}

export default Password_recovery3;