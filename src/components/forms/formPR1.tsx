import React, {useEffect, useState} from "react";
import style from './../../css/password_recovery.module.css';
import { useNavigate } from "react-router-dom";
import InputEmail from "./input/inputEmail";
import InputSubmit from "./input/inputSubmit";

const FormPR1 = () => {
    const navigate = useNavigate();

    const [emailError, setEmailError] = useState('E-mail не может быть пустым!');
    const [formPassRecValid, setFormPassRecValid] = useState(false);

    const handleLogIn = async (e) => {
        e.preventDefault();
        navigate("/password_recovery2", { replace: true });
    }


    // Можно на кнопку "Далее" жмякать, или нет? - проверка
    useEffect(() => {
        if (emailError) {
            setFormPassRecValid(false);
        } else {
            setFormPassRecValid(true);
        }
    }, [emailError]);
    // /.Можно на кнопку "Далее" жмякать, или нет? - проверка
    

    return (
                <div className={style.form}>
                    <form onSubmit={handleLogIn}>
                        
                        <InputEmail emailError={emailError} setEmailError={setEmailError}/>
                        
                        <InputSubmit formValid={formPassRecValid} action={"Далее"}/>
                        
                    </form>
                </div>

    );
}

export default FormPR1;