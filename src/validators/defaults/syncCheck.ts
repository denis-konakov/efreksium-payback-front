import {ValidatorHook} from "../types";

export function syncCheck<T>(action: (a: T) => boolean): ValidatorHook<T>{
    return (value: T) => (new Promise((resolve) => {
        resolve(action(value));
    }))
}