import {ValidatorHookGenerator} from "../types";
import {isRegexMatch} from "./isRegexMatch";

export const isName: ValidatorHookGenerator<string> = () => isRegexMatch(/^[a-zA-ZА-я0-9 _-]{3,32}$/)