import React, {useState} from "react";


const InputName = ({nameError, setNameError}) => {

    const [valName, setValName] = useState('');

    const [nameDirty, setNameDirty] = useState(false);



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



    // Отслеживание активности нажатия на поля ввода
    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'name':
                setNameDirty(true);
                break;
        }
    }
    // /.Отслеживание активности нажатия на поля ввода



    return (
        <>
        {(nameDirty && nameError) && <div style={{color: 'red'}}>{nameError}</div>}
        <input onChange={e => nameHandler(e)} value={valName} onBlur={e => blurHandler(e)} name='name' type="text" placeholder="Имя"/>
        </>
    );
}

export default InputName;