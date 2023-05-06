import {apiClient, makeAuthConfig} from "../apiClient";
import {ApiFunctionResponse, AuthorizedRequest, BaseResponse} from "../BaseResponse";
import {IProfile} from "../../models/IProfile";

export function profile({token}: AuthorizedRequest): ApiFunctionResponse<BaseResponse<IProfile>>{
    return apiClient.get('/user/profile', makeAuthConfig(token));
}