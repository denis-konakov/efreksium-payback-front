import React, {useState} from "react";


const InputCode = ({codeError, code, setCode, setCodeError}) => {


    const [codeDirty, setCodeDirty] = useState(false);


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

    // Отслеживание активности нажатия на поля ввода
    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'code':
                setCodeDirty(true);
                break;
        }
    }
    // /.Отслеживание активности нажатия на поля ввода


    return (
        <>
            {(codeDirty && codeError) && <div style={{color: 'red'}}>{codeError}</div>}
            <input onBlur={e => blurHandler(e)} value={code} onChange={handleCodeChange} name='code' type="text" placeholder="Введите код из письма" required/>
        </>
    );
}

export default InputCode;