import type {BaseResponse} from "./BaseResponse";
import {login as user_login} from './user/login'
import type {LoginBody, LoginResponse} from "./user/login";
import {profile as user_profile} from "./user/profile";
import {create as group_create} from "./group/create"
import {register as user_register} from "./user/register";
import {confirm_email as user_confirm_email} from "./user/confirm_email";
import {add as friends_add} from "./friends/add";
import {member_add as group_member_add} from "./group/member_add";

export const API = {
    user: {
        login: user_login,
        profile: user_profile,
        register: user_register,
        confirm_email: user_confirm_email,
    },
    group: {
        create: group_create,
        member: {
            add: group_member_add
        }
    },
    friends: {
        add: friends_add,
    }
}
export {
    BaseResponse,
    LoginBody, LoginResponse,
}