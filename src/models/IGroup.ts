import {IHistoryEntry} from "./IHistoryEntry";
import {IGroupMember} from "./IGroupMember";

export interface IGroup{
    id: number;
    name: string;
    history: IHistoryEntry[];
    members: IGroupMember[];
}
