import React, {useState} from "react";


const InputPassword = ({passwordError, setPasswordError, password, setPassword}) => {

    const [passwordDirty, setPasswordDirty] = useState(false);


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


    // Отслеживание активности нажатия на поля ввода
    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'password':
                setPasswordDirty(true);
                break;
        }
    }
    // /.Отслеживание активности нажатия на поля ввода

    return (
        <>
            {(passwordDirty && passwordError) && <div style={{color: 'red'}}>{passwordError}</div>}
            <input onChange={e => passwordHandler(e)} value={password} onBlur={e => blurHandler(e)} name='password' type="text" placeholder="Введите пароль"/>
        </>
    );
}

export default InputPassword;