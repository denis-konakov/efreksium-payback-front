import React, {useEffect, useState} from "react";
import style from './../../css/sign_up.module.css';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import InputName from "./input/inputName";
import InputEmail from "./input/inputEmail";
import InputPhone from "./input/inputPhone";
import InputPassword from "./input/inputPassword";
import InputRepeatPass from "./input/inputRepeatPass";
import InputSubmit from "./input/inputSubmit";

const FormSignUp = () => {
    const navigate = useNavigate();

    const [valPassword, setValPassword] = useState('');
    const [valRepPassword, setValRepPassword] = useState('');

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



    // Checkbox
    const [checked, setChecked] = useState(false)
    const handleClick = () => setChecked(!checked)
    // ./Checkbox

    return (
            <div className={style.form}>
                <form onSubmit={handleLogIn}>
                    <label>
                        <InputName nameError={nameError} setNameError={setNameError}/>

                        <InputEmail emailError={emailError} setEmailError={setEmailError}/>

                        <InputPhone phoneError={phoneError} setPhoneError={setPhoneError}/>

                        <InputPassword passwordError={passwordError} setPasswordError={setPasswordError} password={valPassword} setPassword={setValPassword}/>

                        <InputRepeatPass repPasswordError={repPasswordError} setRepPasswordError={setRepPasswordError} repPassword={valRepPassword} setRepPassword={setValRepPassword}/>

                        <div>{checkboxError}</div>
                        <div className={style.agree}>
                            
                            <div className={style.checkbox}>
                                <input onClick={handleClick} checked={checked} type="checkbox" id="agree"/>
                            </div>
                            <div className={style.text}>
                                <p>Я согласен с <Link to="/terms_of_use">условиями пользования</Link> и <Link to="/privacy_policy">политикой конфиденциальности</Link></p>
                            </div>
                        </div>

                        <InputSubmit formValid={formSignupValid} action={"Зарегистрироваться"}/>
                    </label>
                </form>
            </div>
    );
}

export default FormSignUp;