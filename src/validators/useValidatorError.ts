import {ValidatorAction} from "./types";
import {useState} from "react";

export function useValidatorError<T>(validator: ValidatorAction<T>){
    const [error, setError] = useState<string | undefined>(undefined);
    const validate = (value: T) => {
        validator(value).then((e) => {
            setError(undefined);
        }).catch((e)=>{
            setError(e);
        })
        return error === undefined;
    }
    return [error, validate];
}