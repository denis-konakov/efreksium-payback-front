import React, {useEffect, useState} from "react";
import style from './../../css/password_recovery.module.css';
import { useNavigate } from "react-router-dom";
import SubmitButton from "./input/submitButton";

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
                <SubmitButton formValid={formPassRecValid} action={"Далее"}/>
            </form>
        </div>

    );
}

export default FormPR1;