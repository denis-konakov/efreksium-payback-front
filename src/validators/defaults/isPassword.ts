import {syncCheck} from "./syncCheck";

export const isPassword = () => syncCheck<string>((e) => (
    !(e.length < 3 || e.length > 12)
));