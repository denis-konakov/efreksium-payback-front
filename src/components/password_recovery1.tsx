import React, {useEffect, useState} from "react";
import style from './../css/password_recovery.module.css';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Password_recovery1 = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [emailDirty, setEmailDirty] = useState(false);
    const [emailError, setEmailError] = useState('E-mail не может быть пустым!');
    const [formPassRecValid, setFormPassRecValid] = useState(false);

    // Валидация E-mail
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError('Некорректный E-mail!');
        } else {
            setEmailError('');
        }
    }
    // /.Валидация E-mail

    const handleLogIn = async (e) => {
        e.preventDefault();
        navigate("/password_recovery2", { replace: true });
    }

    // Отслеживание активности нажатия на поля ввода
    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'email':
                setEmailDirty(true);
                break;
        }
    }
    // /.Отслеживание активности нажатия на поля ввода


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
        <div className={style.pas_rec_1}>
            <div className={style.pas_rec}>
            
                <div className={style.titel}>
                    <span>Восстановление<br/>пароля</span>
                </div>

                <div className={style.form}>
                    <form onSubmit={handleLogIn}>

                        <div className={style.button}>
                            <button disabled={!formPassRecValid} type="submit">Далее</button>
                        </div>
                    </form>
                </div>
            
            </div>
        </div>
    );
}

export default Password_recovery1;