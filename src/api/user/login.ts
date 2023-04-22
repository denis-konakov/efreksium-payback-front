import {BaseResponse, ApiFunctionResponse} from "../BaseResponse";
import {apiClient} from "../apiClient";
export interface LoginParams{
    email: string;
    password: string;
}
export type LoginResponse = BaseResponse<{
    access_token: string;
    expire: number;
}>
export function login(params: LoginParams): ApiFunctionResponse<LoginResponse>{
    return apiClient.post('/user/login', params);
}

