import React from "react";
import style from './../css/loading.module.css';

const Loading = () => {
    return (
    <div className={style.load}>
            
        <div className={style.titel}>
            <h1 className="efreksium">EFREKSIUM</h1>
        </div>

        <div className={style.footer}>
            <span>Совместная оплата счетов</span>
        </div>

    </div>
    );
}

export default Loading;