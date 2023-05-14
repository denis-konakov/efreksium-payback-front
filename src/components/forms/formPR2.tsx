import React, {useEffect, useState} from "react";
import style from './../../css/password_recovery.module.css';
import { useNavigate } from "react-router-dom";
import SubmitButton from "./input/submitButton";

const FormPR2 = () => {
    const navigate = useNavigate();

    const [code, setCode] = useState("");
    const [codeError, setCodeError] = useState('Код из письма не может быть пустым!');
    const [formCodeValid, setFormCodeValid] = useState(false);


    const handleLogIn = async (e) => {
        e.preventDefault();
        navigate("/password_recovery3", { replace: true });
    }


    // Можно на кнопку "зарегистрироваться" жмякать, или нет? - проверка
    useEffect(() => {
        if (codeError) {
            setFormCodeValid(false);
        } else {
            setFormCodeValid(true);
        }
    }, [codeError]);
    // /.Можно на кнопку "зарегистрироваться" жмякать, или нет? - проверка


    return (
                <div className={style.form}>
                    <form onSubmit={handleLogIn}>
                        <label>

                            <SubmitButton formValid={formCodeValid} action={"Далее"}/>
                        </label>
                    </form>
                </div>
    );
}

export default FormPR2;