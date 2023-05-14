import React, {useEffect, useState} from "react";
import style from './../../css/password_recovery.module.css';
import { useNavigate } from "react-router-dom";
import SubmitButton from "./input/submitButton";

const FormPR3 = () => {
    const navigate = useNavigate();

    const [password, setPassword] = useState('');
    const [repPassword, setRepPassword] = useState('');

    const [passwordError, setPasswordError] = useState('Пароль не может быть пустым!');
    const [repPasswordError, setRepPasswordError] = useState('Повторите пароль!');

    const [formPassRec3Valid, setFormPassRec3SignupValid] = useState(false);

    const handleLogIn = async (e) => {
        e.preventDefault();

        if (password != repPassword) {
            setRepPasswordError('Пароли не совпадают!');
        } else {
            navigate("/sign_in", { replace: true });
        }
    }

    // Можно на кнопку "зарегистрироваться" жмякать, или нет? - проверка
    useEffect(() => {
        if (passwordError || repPasswordError) {
            setFormPassRec3SignupValid(false);
        } else {
            setFormPassRec3SignupValid(true);
        }
    }, [passwordError, repPasswordError]);
    // /.Можно на кнопку "зарегистрироваться" жмякать, или нет? - проверка


    return (
                <div className={style.form}>
                    <form onSubmit={handleLogIn}>
                        <label>
                            <SubmitButton formValid={formPassRec3Valid} action={"Далее"}/>
                        </label>
                    </form>
                </div>
    );
}

export default FormPR3;