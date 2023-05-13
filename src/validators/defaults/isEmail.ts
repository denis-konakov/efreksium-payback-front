import {isRegexMatch} from "./isRegexMatch";
import {ValidatorHookGenerator} from "../types";

export const isEmail: ValidatorHookGenerator<string> = () => isRegexMatch(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);