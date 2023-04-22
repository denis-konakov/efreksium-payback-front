import React from "react";
import style from './../css/password_recovery.module.css';
import { Link } from "react-router-dom";

const Password_recovery2 = () => {
    return (
        <div className={style.pas_rec_2}>
            <div className={style.pas_rec}>
            
                <div className={style.titel}>
                    <span>Восстановление<br/>пароля</span>
                </div>

                <div className={style.form}>
                    <label>
                        <input type="text" placeholder="Введите код из письма"/>
                    </label>
                </div>

                <div className={style.button}>
                    <Link to="/password_recovery3">Далее</Link>
                </div>
            
            </div>
        </div>
    );
}

export default Password_recovery2;