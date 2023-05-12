import React, {useState} from "react";


const InputRepeatPass = ({repPasswordError, setRepPasswordError, repPassword, setRepPassword}) => {

    const [repPasswordDirty, setRepPasswordDirty] = useState(false);


    // Валидация повторённого пароля
    const repPasswordHandler = (e) => {
        setRepPassword(e.target.value)
        //if (valPassword != repPassword) {
        //    setRepPasswordError('Пароли должны совпадать!');
        if (!e.target.value) {
            setRepPasswordError('Повторите пароль!');
        //    }
        } else {
            setRepPasswordError('');
        }
    }
    // /.Валидация повторённого пароля
    

    // Отслеживание активности нажатия на поля ввода
    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'repeat_password':
                setRepPasswordDirty(true);
                break;
        }
    }
    // /.Отслеживание активности нажатия на поля ввода


    return (
        <>
            {(repPasswordDirty && repPasswordError) && <div style={{color: 'red'}}>{repPasswordError}</div>}
            <input onChange={e => repPasswordHandler(e)} value={repPassword} onBlur={e => blurHandler(e)} name='repeat_password' type="text" placeholder="Повторите пароль"/>

        </>
    );
}

export default InputRepeatPass;