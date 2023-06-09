import {DispatchValidator, ValidatorAction, ValidatorHook, ValidatorHookGenerator} from "./types";
import {useState} from "react";

export function useValidator<T>(validator: ValidatorAction<T>): [string, DispatchValidator<T>]{
    const [error, setError] = useState<string | undefined>(undefined);
    const validate = (value: T) => {
        setError(undefined);
        validator(value).catch((e)=>{
            setError(e);
        })
        return error === undefined;
    }
    return [error, validate];
}