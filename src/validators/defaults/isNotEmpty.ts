import type {ValidatorHook} from "../types";

export function isNotEmpty(): ValidatorHook<string>{
    return (value: string) => (new Promise<boolean>((resolve) => {
        resolve(value !== "" && value !== undefined);
    }));
}