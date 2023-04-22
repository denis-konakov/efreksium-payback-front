import {apiClient, makeAuthConfig} from "../apiClient";
import {ApiFunctionResponse, BaseResponse} from "../BaseResponse";
import {IProfile} from "../../models/IProfile";

export function profile(token: string): ApiFunctionResponse<BaseResponse<IProfile>>{
    return apiClient.get('/user/profile', makeAuthConfig(token));
}