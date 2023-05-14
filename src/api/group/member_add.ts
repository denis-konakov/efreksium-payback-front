import {ApiFunctionResponse, AuthorizedRequest, BaseResponse} from "../BaseResponse";
import {apiClient, makeAuthConfig} from "../apiClient";

export interface GroupMemberAddBody extends AuthorizedRequest{
    group_id: number;
    user_id: number;
}

export type GroupMemberAddResponse = BaseResponse<null>;

export function member_add(body: GroupMemberAddBody): ApiFunctionResponse<GroupMemberAddResponse>{
    return apiClient.post(
        '/group/member/add',
        {},
        {
            ...makeAuthConfig(body.token),
            params: {
                group_id: body.group_id,
                user_id: body.user_id
            }
        }
    );
}