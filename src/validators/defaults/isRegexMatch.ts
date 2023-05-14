import {ValidatorHook} from "../types";

export function isRegexMatch(pattern: RegExp | string): ValidatorHook<string>{
    return (value: string) => (new Promise<boolean>((resolve) => {
        resolve(Boolean(value.match(pattern)));
    }));
}