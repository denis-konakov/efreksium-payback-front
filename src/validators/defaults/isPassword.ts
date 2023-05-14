import {syncCheck} from "./syncCheck";
import {ValidatorHookGenerator} from "../types";

export const isPassword: ValidatorHookGenerator<string> = () => syncCheck<string>((e) => (
    !(e.length < 3 || e.length > 12)
));