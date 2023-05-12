import React from "react";
import style from './../../../css/sign_up.module.css';


const InputSubmit = ({formValid, action}) => {

    return (
        <>
            <div className={style.button}>
                <button disabled={!formValid} type="submit">{action}</button>
            </div>
        </>
    );
}

export default InputSubmit;