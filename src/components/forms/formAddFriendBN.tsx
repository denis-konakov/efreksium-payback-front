import React, {useEffect, useState} from "react";
import style from './../../css/add_friend.module.css';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import InputPhone from "./input/inputPhone";
import InputSubmit from "./input/inputSubmit";

const FormAddFriendBN = () => {
    const [phoneError, setPhoneError] = useState('Номер телефона не может быть пустым!');

    const [formSignupValid, setFormSignupValid] = useState(false);

    const handleLogIn = async (e) => {
        e.preventDefault();
        navigate("/sign_in", { replace: true });
    }

    // Можно на кнопку "Кинуть приглашение" жмякать, или нет? - проверка
    useEffect(() => {
        if (phoneError) {
            setFormSignupValid(false);
        } else {
            setFormSignupValid(true);
        }
    }, [phoneError]);
    // /.Можно на кнопку "Кинуть приглашение" жмякать, или нет? - проверка

    return (
            <>
                <form onSubmit={handleLogIn}>
                    <div className={style.input_number}>
                        <InputPhone phoneError={phoneError} setPhoneError={setPhoneError}/>
                    </div>
                    <Link to="/profile/friends">
                        <InputSubmit formValid={formSignupValid} action={"Кинуть приглашение"}/>
                    </Link>
                </form>
            </>
    );
}

export default FormAddFriendBN;