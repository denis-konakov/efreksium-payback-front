import React, {useEffect, useState} from "react";
import style from './../css/password_recovery.module.css';
import { useNavigate } from "react-router-dom";
import FormPR3 from "./forms/formPR3";

const Password_recovery3 = () => {
    return (
        <div className={style.pas_rec_3}>
            <div className={style.pas_rec}>
            
                <div className={style.titel}>
                    <span>Восстановление<br/>пароля</span>
                </div>

                <FormPR3 />
            
            </div>
        </div>
    );
}

export default Password_recovery3;