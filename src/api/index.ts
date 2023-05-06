import type {BaseResponse} from "./BaseResponse";
import {login} from './user/login'
import type {LoginParams, LoginResponse} from "./user/login";
import {profile} from "./user/profile";

export const API = {
    user: {
        login: login,
        profile: profile,
    },
}
export {
    BaseResponse,
    LoginParams, LoginResponse,
}