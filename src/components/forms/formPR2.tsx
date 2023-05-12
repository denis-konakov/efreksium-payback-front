import React, {useEffect, useState} from "react";
import style from './../../css/password_recovery.module.css';
import { useNavigate } from "react-router-dom";
import InputCode from "./input/inputCode";
import InputSubmit from "./input/inputSubmit";

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
                            <InputCode code={code} setCode={setCode} codeError={codeError} setCodeError={setCodeError}/>

                            <InputSubmit formValid={formCodeValid} action={"Далее"}/>
                        </label>
                    </form>
                </div>
    );
}

export default FormPR2;