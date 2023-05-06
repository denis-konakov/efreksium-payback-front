import {create} from 'zustand';
import {immer} from 'zustand/middleware/immer';
import {createJSONStorage, devtools, persist} from "zustand/middleware";
import {API, LoginParams, LoginResponse} from "../api";
import axios from "axios";
import {IProfile} from "../models/IProfile";

interface authStore {
    profile?: IProfile;
    token: string;
    expire: number;
    isLoggedIn: boolean;
    isLoading: boolean;
    error: boolean;
    program_code: string;
    detail: string;
    login: (p: LoginParams) => Promise<null>;
    logout: () => Promise<null>;
}

export const useAuthStore = create<authStore>()(devtools(persist(immer((set, get) => ({
    profile: undefined,
    token: '',
    expire: 0,
    isLoggedIn: false,
    isLoading: false,
    error: false,
    program_code: '',
    detail: '',
    // actions
    logout: async () => {
        set((state) => {
            state.isLoggedIn = false;
            state.token = '';
        })
    },
    login: async (p: LoginParams) => {
        set(state => {
            state.isLoading = true;
        });
        try{
            const r = (await API.user.login(p)).data;
            set(state => {
                state.isLoggedIn = true;
                state.expire = r.detail.response.expire
                state.token = r.detail.response.access_token;
                state.error = false;
            })
            const profile = (await API.user.profile(r.detail.response.access_token)).data;
            if (!profile.detail.status)
                throw Error('Ошибка получения профиля');
            set(state => {
                state.profile = profile.detail.response;
            });

        }catch (e){
            set(state => {
                state.error = true;
                state.isLoggedIn = false;
                state.program_code = 'connection_error';
                state.detail = e.message;
            })
            if (!axios.isAxiosError(e))
                throw e;
            const r: LoginResponse = e.response.data;
            set(state => {
                state.program_code = r.detail.program_code;
                state.detail = r.detail.detail;
            })
            throw Error('Ошибка при авторизации');
        } finally {
            set(state => {
                state.isLoading = false;
            })
        }
    }
})), {
    name: 'auth-store',
    storage: createJSONStorage(() => localStorage),
    partialize: (state) => ({
        token: state.token,
        isLoggedIn: state.isLoggedIn,
        profile: state.profile,
    })
})))