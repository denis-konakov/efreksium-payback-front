import type {ValidatorHookGenerator, FieldValidators, ValidatorAction, ValidatorHook, DispatchValidator} from "./types";

import {createValidator} from "./createValidator";
import {useValidator} from "./useValidator";

import {isNotEmpty, isRegexMatch, isEmail, syncCheck, isPhone, isPassword} from "./defaults";

export type {
    ValidatorHookGenerator,
    FieldValidators,
    ValidatorAction,
    ValidatorHook,
    DispatchValidator,
}
export {
    createValidator,
    useValidator,
}
export {
    isNotEmpty,
    isRegexMatch,
    isEmail,
    syncCheck,
    isPhone,
    isPassword
}