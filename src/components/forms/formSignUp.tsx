import React, {ChangeEvent, useEffect, useState} from "react";
import style from './../../css/sign_up.module.css';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import InputWithErrorMessage from "../InputWithErrorMessage";
import {
    createValidator,
    isNotEmpty,
    useValidator,
    DispatchValidator,
    isEmail,
    isPhone,
    isPassword, syncCheck
} from "../../validators";

const FormSignUp = () => {
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('');
    const [terms, setTerms] = useState(false);

    const [nameError, nameValidator] = useValidator<string>(createValidator({
        'Имя не может быть пустым': [isNotEmpty()]
    }))

    const [emailError, emailValidator] = useValidator<string>(createValidator({
        'Введите корректную почту': [isNotEmpty(), isEmail()]
    }));
    const [phoneError, phoneValidator] = useValidator<string>(createValidator({
        'Введите корректный номер телефона': [isNotEmpty(), isPhone()]
    }));
    const [passwordError, passwordValidator] = useValidator<string>(createValidator({
        'Пароль должен быть длиннее 3 и меньше 12': [
            isNotEmpty(),
            isPassword(),
        ]
    }))
    const [repeatPasswordError, repeatPasswordValidator] = useValidator<string>(createValidator({
        'Пароли не совпадают': [
            syncCheck<string>(() => password === repeatPassword)
        ]
    }))

    const onChange = (setState: (a: string) => void, validate: DispatchValidator<string>) => {
        return (e: ChangeEvent<HTMLInputElement>) => {
            validate(e.target.value);
            setState(e.target.value);
            validateForm();
        };
    };
    const [formValid, setFormValid] = useState(false);
    const validateForm = () => {
        setFormValid(terms && [
            nameValidator,
            emailValidator,
            phoneValidator,
            passwordValidator,
            repeatPasswordValidator,
        ].every(e => e()));
    }
    const onSubmit = () => {
        validateForm();
        if (!formValid)
            return;
        // TODO: Регистрация
    }
    return (
            <div className={style.form}>
                <form onSubmit={onSubmit}>
                    <InputWithErrorMessage
                        type="text"
                        error={nameError}
                        onChange={onChange(setName, nameValidator)}
                        value={name}
                        placeholder="Имя"
                    />
                    <InputWithErrorMessage
                        type="text"
                        error={emailError}
                        onChange={onChange(setEmail, emailValidator)}
                        value={email}
                        placeholder="Почта"
                    />
                    <InputWithErrorMessage
                        type="text"
                        error={phoneError}
                        onChange={onChange(setPhone, phoneValidator)}
                        value={phone}
                        placeholder="Номер телефона"
                    />
                    <InputWithErrorMessage
                        type="password"
                        error={passwordError}
                        onChange={onChange(setPassword, passwordValidator)}
                        value={password}
                        placeholder="Пароль"
                    />
                    <InputWithErrorMessage
                        type="password"
                        error={repeatPasswordError}
                        onChange={onChange(setRepeatPassword, repeatPasswordValidator)}
                        value={repeatPassword}
                        placeholder="Повторите пароль"
                    />
                    <div className={style.agree}>
                        <div className={style.checkbox}>
                            <input onChange={(e) => setTerms(e.target.checked)} checked={terms} type="checkbox" id="agree"/>
                        </div>
                        <div className={style.text}>
                            <p>Я согласен с <Link to="/terms_of_use">условиями пользования</Link> и <Link to="/privacy_policy">политикой конфиденциальности</Link></p>
                        </div>
                    </div>
                    <div className={style.button}>
                        <button disabled={!formValid} type="submit">
                            Зарегистрироваться
                        </button>
                    </div>
                </form>
            </div>
    );
}

export default FormSignUp;