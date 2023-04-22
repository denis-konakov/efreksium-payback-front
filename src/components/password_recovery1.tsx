import React from "react";
import style from './../css/password_recovery.module.css';
import { Link } from "react-router-dom";

const Password_recovery1 = () => {
    return (
        <div className={style.pas_rec_1}>
            <div className={style.pas_rec}>
            
                <div className={style.titel}>
                    <span>Восстановление<br/>пароля</span>
                </div>

                <div className={style.form}>
                    <label>
                        <input type="text" placeholder="Введите почту"/>
                    </label>
                </div>

                <div className={style.button}>
                    <Link to="/password_recovery2">Далее</Link>
                </div>
            
            </div>
        </div>
    );
}

export default Password_recovery1;