import {BaseResponse, ApiFunctionResponse} from "../BaseResponse";
import {apiClient} from "../apiClient";
export interface LoginBody {
    email: string;
    password: string;
}
export type LoginResponse = BaseResponse<{
    access_token: string;
    expire: number;
}>
export function login(body: LoginBody): ApiFunctionResponse<LoginResponse>{
    return apiClient.post('/user/login', body);
}

