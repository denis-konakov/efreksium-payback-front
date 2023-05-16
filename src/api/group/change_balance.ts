import {IChangeBalanceEvent} from "../../models/IChangeBalanceEvent";
import {ApiFunctionResponse, AuthorizedRequest, BaseResponse} from "../BaseResponse";
import {apiClient, makeAuthConfig} from "../apiClient";

export interface ChangeBalanceBody extends  AuthorizedRequest{
    events: IChangeBalanceEvent[];
    group_id: number;
}

export type ChangeBalanceResponse = BaseResponse<null>;

export function change_balance(body: ChangeBalanceBody): ApiFunctionResponse<ChangeBalanceResponse>{
    return apiClient.post(
        '/group/change_balance',
        body.events,
        {
            ...makeAuthConfig(body.token),
            params: {
                group_id: body.group_id
            }
        }
    );
}