import Func = jest.Func;

export type ValidatorHook<T> = (value: T) => Promise<boolean>;
export type ValidatorHookGenerator<T> = Func<ValidatorHook<T>>
export type DispatchValidator<T> = (value: T) => boolean;
export interface FieldValidators<T>{
    [key: string]: ValidatorHookGenerator<T>[];
}

export type ValidatorAction<T> = (value: T) => Promise<void>;
