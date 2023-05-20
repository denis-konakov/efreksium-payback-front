import {IHistoryEntry} from "../../models/IHistoryEntry";
import {groupby} from "./groupby";
import {dateof} from "./dateof";

export function history_groupby_day(history: IHistoryEntry<any, any>[]){
    const dates = new Map<string, IHistoryEntry<string, {}>[]>();
    const dates_order: string[] = [];
    for (let e: IHistoryEntry<string, {}> in history){
        const key = new Date(e.time).toISOString().split('T')[0];
        if (!dates.has(key)){
            dates.set(key, []);
            dates_order.push(key)
        }
        dates.get(key).push(e);
    }
    const t = groupby(history, (e) => dateof(e))
    return {
        dates: t.groups,
        dates_order: t.group_ordering
    };
}