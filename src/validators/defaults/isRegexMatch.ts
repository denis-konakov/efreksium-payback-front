import {ValidatorHookGenerator} from "../types";

export function isRegexMatch(pattern: RegExp | string): ValidatorHookGenerator<string>{
    return (value: string) => (new Promise<boolean>((resolve) => {
        resolve(Boolean(value.match(pattern)));
    }));
}