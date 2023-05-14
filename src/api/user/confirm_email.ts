import {ApiFunctionResponse, BaseResponse} from "../BaseResponse";
import {apiClient} from "../apiClient";


export interface ConfirmEmailPath{
    code: string;
}
export type ConfirmEmailResponse = BaseResponse<{}>

export function confirm_email(path: ConfirmEmailPath): ApiFunctionResponse<ConfirmEmailResponse>{
    return apiClient.get(`/user/confirm_email/${path.code}`);
}