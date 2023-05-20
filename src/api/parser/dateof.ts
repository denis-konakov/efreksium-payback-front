import {IHistoryEntry} from "../../models/IHistoryEntry";

export function dateof(entry: IHistoryEntry<any, any>){
    return new Date(entry.time).toISOString().split('T')[0]
}