import {IUserPublic} from "./IUserPublic";

export type GroupRole = 'owner' | 'moder' | 'member';

export interface IGroupMember{
    id: number;
    user_id: number;
    user: IUserPublic;
    role: GroupRole;
    balance: number;
}