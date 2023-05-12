import React from "react";
import style from './../css/password_recovery.module.css';
import FormPR1 from "./forms/formPR1";


const Password_recovery1 = () => {

    return (
        <div className={style.pas_rec_1}>
            <div className={style.pas_rec}>
            
                <div className={style.titel}>
                    <span>Восстановление<br/>пароля</span>
                </div>

                <FormPR1 />
            
            </div>
        </div>
    );
}

export default Password_recovery1;