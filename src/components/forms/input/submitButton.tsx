import {ButtonHTMLAttributes} from "react";
import style from './../../../css/sign_up.module.css';




const SubmitButton = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {

    return (<>
        <div className={style.button}>
            <button {...{...props, type: 'submit'}}/>
        </div>
    </>);
}

export default SubmitButton;