import type {BaseResponse} from "./BaseResponse";
import {login as user_login} from './user/login'
import type {LoginBody, LoginResponse} from "./user/login";
import {profile as user_profile} from "./user/profile";
import {create as group_create} from "./group/create"
import {register as user_register} from "./user/register";
export const API = {
    user: {
        login: user_login,
        profile: user_profile,
        register: user_register,
    },
    group: {
        create: group_create
    },
}
export {
    BaseResponse,
    LoginBody, LoginResponse,
}