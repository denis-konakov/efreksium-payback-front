import type {BaseResponse} from "./BaseResponse";
import {login as user_login} from './user/login'
import type {LoginParams, LoginResponse} from "./user/login";
import {profile as user_profile} from "./user/profile";
import {create as group_create} from "./group/create"
export const API = {
    user: {
        login: user_login,
        profile: user_profile,
    },
    group: {
        create: group_create
    },
}
export {
    BaseResponse,
    LoginParams, LoginResponse,
}