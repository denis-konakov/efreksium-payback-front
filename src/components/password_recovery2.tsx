import React, {useEffect, useState} from "react";
import style from './../css/password_recovery.module.css';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import FormPR2 from "./forms/formPR2";

const Password_recovery2 = () => {
    const navigate = useNavigate();

    const [code, setCode] = useState("");
    const [codeDirty, setCodeDirty] = useState(false);
    const [codeError, setCodeError] = useState('Код из письма не может быть пустым!');
    const [formCodeValid, setFormCodeValid] = useState(false);

    // Валидация кода из письма
    const handleCodeChange = (e) => {
        setCode(e.target.value)
        if (!e.target.value) {
            setCodeError('Пароль не может быть пустым!');
        } else {
            setCodeError('');
        }
    }
    // /.Валидация кода из письма

    const handleLogIn = async (e) => {
        e.preventDefault();
        navigate("/password_recovery3", { replace: true });
    }

    // Отслеживание активности нажатия на поля ввода
    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'code':
                setCodeDirty(true);
                break;
        }
    }
    // /.Отслеживание активности нажатия на поля ввода


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
        <div className={style.pas_rec_2}>
            <div className={style.pas_rec}>
            
                <div className={style.titel}>
                    <span>Восстановление<br/>пароля</span>
                </div>

                <FormPR2 />
            
            </div>
        </div>
    );
}

export default Password_recovery2;