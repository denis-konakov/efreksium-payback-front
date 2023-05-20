import {
    IHistoryEntry,
    CreateGroupHistoryEntry,
    ChangeBalanceHistoryEntry,
    AddMemberHistoryEntry
} from "../../../models/IHistoryEntry";
import {IGroupMember } from "../../../models/IGroupMember";
import {username} from "../../../api/parser";
import {IGroup} from "../../../models/IGroup";
import style from "../../../css/history.module.css";
import React from "react";
import {ISharedUser} from "../../../models/ISharedUser";
import {UserSolve} from "../../../hooks/useUserSolver";

export interface GroupHistoryActionCardProps{
    group: IGroup;
    action: IHistoryEntry<string, {}>;
    solve: UserSolve;
}
export default function GroupHistoryActionCard({action, solve, group, ...props}: GroupHistoryActionCardProps){
    let content;
    if (action.action === 'create'){
        const args = (action as CreateGroupHistoryEntry);
        content = `
            ${username(args.user)} создал группу ${group.name}
        `;
    } else if (action.action === 'change_balance'){
        const args = (action as ChangeBalanceHistoryEntry);
        const df = parseInt(args.action_description.new_balance) - parseInt(args.action_description.old_balance);
        content = `
        ${username(args.user)} изменил баланс пользователя 
        ${username(solve(args.action_description.target_id))} (${df >= 0 ? '+' + df : df})
        в группе ${group.name}
        `
    } else if (action.action === 'add_member'){
        const args = (action as AddMemberHistoryEntry);
        content = `
            ${username(args.user)} добавил 
            ${username(solve(args.action_description.target))}
            в группу ${group.name}
        `
    }
    content = content.replace('\n', '');
    const time = new Date(action.time);
    return (<>
        <div className={style.history_item}>
            <div className={style.item}>
                <div className={style.item_main}>
                    <div className={style.item_ava}></div>

                    <div className={style.item_desc}>
                        <div className={style.item_title}>
                            {content}
                        </div>
                    </div>
                </div>

                <div className={style.item_time}>
                    {("00" + time.getHours()).slice(-2)}
                    :
                    {("00" + time.getMinutes()).slice(-2)}
                </div>
            </div>
        </div>
    </>);
}