import {ApiFunctionResponse, BaseResponse} from "../BaseResponse";
import {apiClient} from "../apiClient";

export interface RegisterBody{
    username: string;
    email: string;
    number: string;
    password: string;
}
export interface RegisterQuery{
    redirect: string;
}
export type RegisterResponse = BaseResponse<null>;


export async function register(body: RegisterBody, query: RegisterQuery): ApiFunctionResponse<RegisterResponse>{
    return apiClient.post('/user/register', body, {
        params: query
    });
}