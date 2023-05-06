import React, {useEffect, useState} from "react";
import style from './../css/password_recovery.module.css';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

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

                <div className={style.form}>
                    <form onSubmit={handleLogIn}>
                        <label>
                            {(codeDirty && codeError) && <div style={{color: 'red'}}>{codeError}</div>}
                            <input onBlur={e => blurHandler(e)} value={code} onChange={handleCodeChange} name='code' type="text" placeholder="Введите код из письма" required/>

                            <div className={style.button}>
                                <button disabled={!formCodeValid} type="submit">Далее</button>
                            </div>
                        </label>
                    </form>
                </div>
            
            </div>
        </div>
    );
}

export default Password_recovery2;