import {ApiFunctionResponse, AuthorizedRequest, BaseResponse} from "../BaseResponse";
import {apiClient, makeAuthConfig} from "../apiClient";

export type GroupCreateResponse = BaseResponse<{
    id: number;
    name: string;
}>
export interface GroupCreateParams extends AuthorizedRequest{
    name: string;
}
export function create(params: GroupCreateParams): ApiFunctionResponse<GroupCreateResponse>{
    return apiClient.post(
        '/group/create',
        {},
        {
            ...makeAuthConfig(params.token),
            params: {
                name: params.name
            }
        }
    )
}