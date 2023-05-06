import React, {useEffect, useState} from "react";
import style from './../css/sign_up.module.css';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Sign_up = () => {
    const navigate = useNavigate();

    const [valName, setValName] = useState('');
    const [valEmail, setValEmail] = useState('');
    const [valPassword, setValPassword] = useState('');
    const [valRepPassword, setValRepPassword] = useState('');
    const [valPhone, setValPhone] = useState('');

    const [nameDirty, setNameDirty] = useState(false);
    const [emailDirty, setEmailDirty] = useState(false);
    const [passwordDirty, setPasswordDirty] = useState(false);
    const [repPasswordDirty, setRepPasswordDirty] = useState(false);
    const [phoneDirty, setPhoneDirty] = useState(false);

    const [nameError, setNameError] = useState('Имя не может быть пустым!');
    const [emailError, setEmailError] = useState('E-mail не может быть пустым!');
    const [passwordError, setPasswordError] = useState('Пароль не может быть пустым!');
    const [repPasswordError, setRepPasswordError] = useState('Повторите пароль!');
    const [phoneError, setPhoneError] = useState('Номер телефона не может быть пустым!');
    const [checkboxError, setCheckboxError] = useState('');

    const [formSignupValid, setFormSignupValid] = useState(false);


    // Редирект при клике на страницу входа
    const handleLogIn = async (e) => {
        e.preventDefault();

        if (!checked) {
            setCheckboxError('Вы должны принять соглашения!');
        } else if (valPassword != valRepPassword) {
            setRepPasswordError('Пароли не совпадают!');
        } else {
            navigate("/sign_in", { replace: true });
        }
    }
    // /.Редирект при клике на страницу входа


    // Можно на кнопку "зарегистрироваться" жмякать, или нет? - проверка
    useEffect(() => {
        if (emailError || passwordError || phoneError || nameError || repPasswordError) {
            setFormSignupValid(false);
        } else {
            setFormSignupValid(true);
        }
    }, [emailError, passwordError, phoneError, nameError, repPasswordError]);
    // /.Можно на кнопку "зарегистрироваться" жмякать, или нет? - проверка


    // Валидация имени
    const nameHandler = (e) => {
        setValName(e.target.value)
        if (!e.target.value) {
            setNameError('Имя не может быть пустым!');
        } else {
            setNameError('');
        }
    }
    // /.Валидация имени


    // Валидация E-mail
    const emailHandler = (e) => {
        setValEmail(e.target.value)
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError('Некорректный E-mail!');
        } else {
            setEmailError('');
        }
    }
    // /.Валидация E-mail
    

    // Валидация пароля
    const passwordHandler = (e) => {
        setValPassword(e.target.value)
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
        setValRepPassword(e.target.value)
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


    // Валидация номера телефона
    const phoneHandler = (e) => {
        setValPhone(e.target.value)
        if (e.target.value.length != 11) {
            setPhoneError('Номер телефона должен состоять из 11 цифр!');
            if (!e.target.value) {
                setPhoneError('Номер телефона не может быть пустым!');
            }
        } else {
            setPhoneError('');
        }
    }
    // /.Валидация номера телефона
    

    // Отслеживание активности нажатия на поля ввода
    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'email':
                setEmailDirty(true);
                break;
            case 'password':
                setPasswordDirty(true);
                break;
            case 'phone':
                setPhoneDirty(true);
                break;
            case 'name':
                setNameDirty(true);
                break;
            case 'repeat_password':
                setRepPasswordDirty(true);
                break;
        }
    }
    // /.Отслеживание активности нажатия на поля ввода


    const [checked, setChecked] = useState(false)
    const handleClick = () => setChecked(!checked)


    return (
        <div className={style.sign_up}>
        
            <div className={style.titel}>
                <span>Регистрация</span>
            </div>

            <div className={style.form}>
                <form onSubmit={handleLogIn}>
                    <label>
                        {(nameDirty && nameError) && <div style={{color: 'red'}}>{nameError}</div>}
                        <input onChange={e => nameHandler(e)} value={valName} onBlur={e => blurHandler(e)} name='name' type="text" placeholder="Имя"/>

                        {(emailDirty && emailError) && <div style={{color: 'red'}}>{emailError}</div>}
                        <input onChange={e => emailHandler(e)} value={valEmail} onBlur={e => blurHandler(e)} name='email' type="text" placeholder="Пoчта"/>

                        {(phoneDirty && phoneError) && <div style={{color: 'red'}}>{phoneError}</div>}
                        <input onChange={e => phoneHandler(e)} value={valPhone} onBlur={e => blurHandler(e)} name='phone' type="number" pattern="/^-?\d+\.?\d*$/" placeholder="Номер телефона"/>

                        {(passwordDirty && passwordError) && <div style={{color: 'red'}}>{passwordError}</div>}
                        <input onChange={e => passwordHandler(e)} value={valPassword} onBlur={e => blurHandler(e)} name='password' type="text" placeholder="Введите пароль"/>

                        {(repPasswordDirty && repPasswordError) && <div style={{color: 'red'}}>{repPasswordError}</div>}
                        <input onChange={e => repPasswordHandler(e)} value={valRepPassword} onBlur={e => blurHandler(e)} name='repeat_password' type="text" placeholder="Повторите пароль"/>


                        <div>{checkboxError}</div>
                        <div className={style.agree}>
                            
                            <div className={style.checkbox}>
                                <input onClick={handleClick} checked={checked} type="checkbox" id="agree"/>
                            </div>
                            <div className={style.text}>
                                <p>Я согласен с <Link to="/terms_of_use">условиями пользования</Link> и <Link to="/privacy_policy">политикой конфиденциальности</Link></p>
                            </div>
                        </div>

                        <div className={style.button}>
                            <button disabled={!formSignupValid} type="submit">Зарегистрироваться</button>
                        </div>
                    </label>
                </form>
            </div>


        </div>
    );
}

export default Sign_up;