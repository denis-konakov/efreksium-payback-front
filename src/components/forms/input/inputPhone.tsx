import React, {useState} from "react";



const InputPhone = ({phoneError, setPhoneError}) => {
    const [valPhone, setValPhone] = useState('');

    const [phoneDirty, setPhoneDirty] = useState(false);



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
            case 'phone':
                setPhoneDirty(true);
                break;
        }
    }
    // /.Отслеживание активности нажатия на поля ввода


    return (
        <>
            {(phoneDirty && phoneError) && <div style={{color: 'red'}}>{phoneError}</div>}
            <input onChange={e => phoneHandler(e)} value={valPhone} onBlur={e => blurHandler(e)} name='phone' type="number" pattern="/^-?\d+\.?\d*$/" placeholder="Номер телефона"/>             
        </>
    );
}

export default InputPhone;