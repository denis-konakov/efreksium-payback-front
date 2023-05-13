import {ValidatorHookGenerator} from "../types";

export function syncCheck<T>(action: (a: T) => boolean): ValidatorHookGenerator<T>{
    return (value: T) => (new Promise((resolve) => {
        resolve(action(value));
    }))
}