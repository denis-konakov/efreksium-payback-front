import {IUserPublic} from "./IUserPublic";

export interface IHistoryEntry{
    id: number;
    user: IUserPublic;
    action: string;
    action_description: any;
    time: string;
}