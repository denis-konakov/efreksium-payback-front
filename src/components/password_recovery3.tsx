import React, {useEffect, useState} from "react";
import style from './../css/password_recovery.module.css';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Password_recovery3 = () => {
    const navigate = useNavigate();

    const [password, setPassword] = useState('');
    const [repPassword, setRepPassword] = useState('');

    const [passwordDirty, setPasswordDirty] = useState(false);
    const [repPasswordDirty, setRepPasswordDirty] = useState(false);

    const [passwordError, setPasswordError] = useState('Пароль не может быть пустым!');
    const [repPasswordError, setRepPasswordError] = useState('Повторите пароль!');

    const [formPassRec3Valid, setFormPassRec3SignupValid] = useState(false);



    // Валидация пароля
    const passwordHandler = (e) => {
        setPassword(e.target.value)
        if (e.target.value.length < 3 || e.target.value.length > 12) {
            setPasswordError('Пароль должен быть длиннее 3 и меньше 12');
            if (!e.target.value) {
                setPasswordError('Пароль не может быть пустым!');
            }
        } else {
            setPasswordError('');
        }
    }
    // /.Валидация пароля


    // Валидация повторённого пароля
    const repPasswordHandler = (e) => {
        setRepPassword(e.target.value)
        //if (valPassword != valRepPassword) {
        //    setRepPasswordError('Пароли должны совпадать!');
        if (!e.target.value) {
            setRepPasswordError('Повторите пароль!');
        //    }
        } else {
            setRepPasswordError('');
        }
    }
    // /.Валидация повторённого пароля

    const handleLogIn = async (e) => {
        e.preventDefault();

        if (password != repPassword) {
            setRepPasswordError('Пароли не совпадают!');
        } else {
            navigate("/sign_in", { replace: true });
        }
    }

    // Отслеживание активности нажатия на поля ввода
    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'password':
                setPasswordDirty(true);
                break;
            case 'repeat_password':
                setRepPasswordDirty(true);
                break;
        }
    }
    // /.Отслеживание активности нажатия на поля ввода


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
        <div className={style.pas_rec_3}>
            <div className={style.pas_rec}>
            
                <div className={style.titel}>
                    <span>Восстановление<br/>пароля</span>
                </div>

                <div className={style.form}>
                    <form onSubmit={handleLogIn}>
                        <label>
                            {(passwordDirty && passwordError) && <div style={{color: 'red'}}>{passwordError}</div>}
                            <input onChange={e => passwordHandler(e)} value={password} onBlur={e => blurHandler(e)} name='password' type="text" placeholder="Введите новый пароль"/>

                            {(repPasswordDirty && repPasswordError) && <div style={{color: 'red'}}>{repPasswordError}</div>}
                            <input onChange={e => repPasswordHandler(e)} value={repPassword} onBlur={e => blurHandler(e)} name='repeat_password' type="text" placeholder="Повторите пароль"/>

                            <div className={style.button}>
                                <button disabled={!formPassRec3Valid} type="submit">Далее</button>
                            </div>
                        </label>
                    </form>
                </div>
            
            </div>
        </div>
    );
}

export default Password_recovery3;