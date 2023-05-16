import style from "../../../css/admin_inside_group.module.css";
import React, {InputHTMLAttributes} from "react";
import {IGroupMember} from "../../../models/IGroupMember";
import {username, attachment} from "../../../api/parser";
import {hasPermissions} from "../../../api/parser/hasPermissions";

export interface UserInsideGroupCardProps{
    member: IGroupMember;
    canEdit: boolean;
    modifyValue: number;
    inputProps: InputHTMLAttributes<HTMLInputElement>;

}

export default function UserInsideGroupCard({member, canEdit, ...props}: UserInsideGroupCardProps){
    const id = `edit-cb-${member.id}`;
    return (<>
        <div className={style.area}>
            {canEdit && (<input
                className={style.custom_checkbox}
                type="checkbox"
                id={id}
                {...props.inputProps}
            />)}
            <label htmlFor={id}>
                <div className={style.item +(hasPermissions(member) ? " " + style.item_main : "")}>
                    <div
                        className={style.item_ava}
                        style={{
                            backgroundImage: `url('${attachment(member.user.avatar)}')`
                        }}
                    />
                    <div className={style.item_desc}>
                        <div className={style.item_title}>{username(member.user)}</div>
                        <div className={style.item_count}>{member.balance} монет</div>
                    </div>
                    <div className={style.item_value}>{props.modifyValue}</div>
                </div>
            </label>
        </div>
    </>);
}