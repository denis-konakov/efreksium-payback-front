import {IUserPublic} from "./IUserPublic";

export interface IHistoryEntry<ACTION_NAME, ACTION_DESCRIPTION>{
    id: number;
    user: IUserPublic;
    action: ACTION_NAME;
    action_description: ACTION_DESCRIPTION;
    time: string;
}

export type CreateGroupHistoryEntry = IHistoryEntry<'create', {}>;
export type ChangeBalanceHistoryEntry = IHistoryEntry<'change_balance', {
    target_id: string;
    old_balance: string;
    new_balance: string;
}>;
export type AddMemberHistoryEntry = IHistoryEntry<'add_member', {
    target: string;
}>


