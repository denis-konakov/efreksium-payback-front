import {ChangeEventHandler, FocusEventHandler, InputHTMLAttributes, useState} from "react";

interface InputWithValidationProps extends InputHTMLAttributes<HTMLInputElement>{
    error: string;
}

export default function InputWithErrorMessage({error, ...props}: InputWithValidationProps){
    return (
        <label>
            {error !== "" && <div style={{color: 'red'}}>
                {error}
            </div>}
            <input {...props} />
        </label>
    )
}