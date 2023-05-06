export type ValidatorHook<T> = (value: T) => Promise<boolean>;

export interface FieldValidators<T>{
    [key: string]: ValidatorHook<T>[];
}

export type ValidatorAction<T> = (value: T) => Promise<void>;
