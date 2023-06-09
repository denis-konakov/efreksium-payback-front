import {FieldValidators, ValidatorAction} from "./types";


export function createValidator<T>(fields: FieldValidators<T>): ValidatorAction<T>{
    async function validate(value: T){
        for (let field of Object.keys(fields))
            for (let checker of fields[field])
                if (!(await checker(value)))
                    throw field;
    }
    return validate;
}