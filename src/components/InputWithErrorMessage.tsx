import {ChangeEventHandler, FocusEventHandler, useState} from "react";

interface InputWithValidationProps{
    name?: string;
    value?: string;
    type?: string;
    required?: boolean;
    onBlur?: FocusEventHandler;
    onChange?: ChangeEventHandler;
    placeholder?: string;
    error?: string;
}

export default function InputWithErrorMessage({validate, error, ...props}: InputWithValidationProps){
    return (
        <label>
            {error !== "" && <div style={{color: 'red'}}>
                {error}
            </div>}
            <input {...props} />
        </label>
    )
}