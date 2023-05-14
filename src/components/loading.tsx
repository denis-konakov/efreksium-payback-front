import React, {ReactNode} from "react";
import style from './../css/loading.module.css';

export interface LoadingProps{
    children?: ReactNode
}

const Loading = ({children}: LoadingProps) => {
    return (
    <div className={style.load}>
            
        <div className={style.titel}>
            <h1 className="efreksium">EFREKSIUM</h1>
        </div>
        {children}
        <div className={style.footer}>
            <span>Совместная оплата счетов</span>
        </div>

    </div>
    );
}

export default Loading;