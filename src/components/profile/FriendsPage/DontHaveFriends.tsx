import style from "../../../css/friends.module.css";
import {Link} from "react-router-dom";
import React from "react";

const DontHaveFriends = () => {
    return (<>
        <div className={style.logo}></div>

        <div className={style.desc}>
            У Вас нет ни одного друга {":("} Нажмите на кнопку “Добавить друга” и отсканируйте QR-код
        </div>


    </>);
};
export default DontHaveFriends;