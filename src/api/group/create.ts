import {ApiFunctionResponse, AuthorizedRequest, BaseResponse} from "../BaseResponse";
import {apiClient, makeAuthConfig} from "../apiClient";

export type GroupCreateResponse = BaseResponse<{
    id: number;
    name: string;
}>
export interface GroupCreateParams extends AuthorizedRequest{
    name: string;
}
export async function create(params: GroupCreateParams): ApiFunctionResponse<GroupCreateParams>{
    return apiClient.post('/group/create', params, makeAuthConfig(params.token))
}