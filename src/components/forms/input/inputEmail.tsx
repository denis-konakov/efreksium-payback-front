import React, {useState} from "react";


const InputEmail = ({emailError, setEmailError}) => {

    const [valEmail, setValEmail] = useState('');

    const [emailDirty, setEmailDirty] = useState(false);



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



    // Отслеживание активности нажатия на поля ввода
    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'email':
                setEmailDirty(true);
                break;
        }
    }
    // /.Отслеживание активности нажатия на поля ввода



    return (
        <>
        {(emailDirty && emailError) && <div style={{color: 'red'}}>{emailError}</div>}
        <input onChange={e => emailHandler(e)} value={valEmail} onBlur={e => blurHandler(e)} name='email' type="text" placeholder="Пoчта"/>
        </>
    );
}

export default InputEmail;