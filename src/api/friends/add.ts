import {ApiFunctionResponse, AuthorizedRequest, BaseResponse} from "../BaseResponse";
import {apiClient, makeAuthConfig} from "../apiClient";

export interface FriendsAddBody extends AuthorizedRequest{
    recipient_id: number;
}
export type FriendsAddResponse = BaseResponse<null>;

export function add(body: FriendsAddBody): ApiFunctionResponse<FriendsAddResponse>{
    return apiClient.post(
        '/friends/add',
        {},
        {
            ...makeAuthConfig(body.token),
            params: {recipient_id: body.recipient_id}
        });
}