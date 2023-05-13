import {isRegexMatch} from "./isRegexMatch";
import {ValidatorHookGenerator} from "../types";

export const isPhone: ValidatorHookGenerator<string> = () => isRegexMatch(/^(\+7|8)?[0-9]{10}$/)
