import type {ValidatorHook, FieldValidators, ValidatorAction} from "./types";

import {createValidator} from "./createValidator";
import {useValidatorError} from "./useValidatorError";

import {isNotEmpty, isRegexMatch, isEmail, syncCheck} from "./defaults";

export type {
    ValidatorHook,
    FieldValidators,
    ValidatorAction,
}
export {
    createValidator,
    useValidatorError,
}
export {
    isNotEmpty,
    isRegexMatch,
    isEmail,
    syncCheck
}