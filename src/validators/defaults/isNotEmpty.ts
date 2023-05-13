import type {ValidatorHookGenerator} from "../types";

export function isNotEmpty(): ValidatorHookGenerator<string>{
    return (value: string) => (new Promise<boolean>((resolve) => {
        resolve(value !== "" && value !== undefined);
    }));
}