import {AxiosResponse} from "axios";

export interface BaseResponse<T>{
    detail: {
        response?: T;
        detail: string;
        status: boolean;
        program_code: string;
    }
}

export interface AuthorizedRequest{
    token: string;
}

export type ApiFunctionResponse<T> = Promise<AxiosResponse<T>>

