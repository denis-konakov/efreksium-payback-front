import style from "../../../css/admin_inside_group.module.css";
import {Link} from "react-router-dom";
import React, {FormEvent, useEffect, useState} from "react";
import {IGroup} from "../../../models/IGroup";
import UserInsideGroupCard from "./UserInsideGroupCard";
import {useAuthStore} from "../../../store";
import {hasPermissions} from "../../../api/parser/hasPermissions";
import {IChangeBalanceEvent} from "../../../models/IChangeBalanceEvent";
import {API} from "../../../api";

export interface InsideGroupPageProps{
    group: IGroup;
}

export interface SelectedUserMapping{
    [key: number]: boolean;
}

export default function InsideGroupPage({group, ...props}: InsideGroupPageProps){

    const currentId = useAuthStore(s => s.profile.id);
    const currentMember = group.members.find((e) => e.user.id === currentId);
    const canEdit = hasPermissions(currentMember)
    const defaultSelected = {};
    group.members.forEach((e) => {
        defaultSelected[e.id] = false;
    })
    const [selectedMembers, setSelectedMembers] = useState<SelectedUserMapping>(defaultSelected);
    const [addBalance, setAddBalance] = useState(0);
    const eventMembers = () => Object.keys(selectedMembers).filter((m => selectedMembers[m]));
    const modifyValue = () => {
        let value = (addBalance / eventMembers().length) | 0;
        if (isNaN(value))
            value = 0;
        return value;
    }
    const token = useAuthStore(s => s.token);
    const updateProfile = useAuthStore(s => s.updateProfile);
    const onChangeBalance = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let mv = modifyValue();
        if (mv === 0){
            // TODO: Уведомление что нельзя создать пустую запись
            return alert('set modifyValue')
        }
        const events: IChangeBalanceEvent[] = [];
        eventMembers().forEach((memberId) => {
            const member = group.members.find((m) => m.id === parseInt(memberId));
            events.push({
                target_id: member.id,
                value: -modifyValue()
            });
        });
        events.push({
            target_id: group.members.find((m) => m.role === "owner").id,
            value: addBalance,
        });
        try{
            await API.group.change_balance({
                events: events,
                token: token,
                group_id: group.id
            });
            await updateProfile();
        } catch (err){}
    }

    return (
        <div className={style.admin_inside_group}>

            <div className={style.header}>
                <div className={style.content}>
                    <Link to="/profile/user_groups">
                        <div className={style.icon}>
                            <svg width="32" height="29" viewBox="0 0 32 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.7602 22.7409C12.5069 22.7409 12.2535 22.6563 12.0535 22.475L3.96019 15.1404C3.77422 14.9699 3.66992 14.7398 3.66992 14.5C3.66992 14.2602 3.77422 14.0301 3.96019 13.8596L12.0535 6.52502C12.4402 6.1746 13.0802 6.1746 13.4669 6.52502C13.8535 6.87544 13.8535 7.45544 13.4669 7.80585L6.08019 14.5L13.4669 21.1942C13.8535 21.5446 13.8535 22.1246 13.4669 22.475C13.2802 22.6563 13.0135 22.7409 12.7602 22.7409Z" fill="white"/>
                                <path d="M27.3336 15.4062H4.89355C4.34689 15.4062 3.89355 14.9954 3.89355 14.5C3.89355 14.0046 4.34689 13.5938 4.89355 13.5938H27.3336C27.8802 13.5938 28.3336 14.0046 28.3336 14.5C28.3336 14.9954 27.8802 15.4062 27.3336 15.4062Z" fill="white"/>
                            </svg>
                        </div>
                    </Link>
                    <div className={style.titel}>
                        {group.name}
                    </div>
                </div>
            </div>

            <div className={style.main}>
                <div className={style.top}>
                    <div className={style.top_desc}>
                        <div className={style.top_title}>Считаемся</div>
                        <div className={style.top_subtitle}>Я надеюсь, у тебя<br/> нет черт черта?</div>
                    </div>

                    <div className={style.top_items}>
                        <div className={style.top_item_add}>
                            <Link to="/profile/user_groups">
                                <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect y="2" width="34" height="32" rx="10" fill="#E0E0E0" fill-opacity="0.5"/>
                                    <g clip-path="url(#clip0_0_1)">
                                        <path d="M27 14V40M40 27L14 27" stroke="#212121" stroke-linecap="round" stroke-linejoin="round"/>
                                    </g>
                                    <path d="M24 18H18V24H16V18H10V16H16V10H18V16H24V18Z" fill="black" fill-opacity="0.94"/>
                                    <defs>
                                        <clipPath id="clip0_0_1">
                                            <rect width="12" height="12" fill="white" transform="translate(11 11)"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </Link>
                        </div>
                        <div className={style.top_item_quit}>
                            <Link to="/profile/user_groups">
                                <svg width="34" height="32" viewBox="0 0 34 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="34" height="32" rx="10" fill="#E0E0E0" fill-opacity="0.5"/>
                                    <path d="M24 11L22.59 12.41L24.17 14H16V16H24.17L22.59 17.58L24 19L28 15L24 11ZM12 8H19V6H12C10.9 6 10 6.9 10 8V22C10 23.1 10.9 24 12 24H19V22H12V8Z" fill="black"/>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>




                <div className={style.items}>
                    {group.members.map((e, i) => (
                        <UserInsideGroupCard
                            key={i}
                            member={e}
                            canEdit={canEdit}
                            modifyValue={(function(){
                                let nb = e.balance;
                                if (e.role === "owner")
                                    nb += addBalance;
                                if (selectedMembers[e.id])
                                    nb -= modifyValue();
                                if (isNaN(nb)) nb = e.balance;
                                return nb;
                            })()}
                            inputProps={{
                                checked: selectedMembers[e.id],
                                onChange: (event) => {
                                    setSelectedMembers({...selectedMembers, [e.id]: event.target.checked})
                                }
                            }}
                        />
                    ))}
                </div>




                {canEdit && (
                    <form className={style.buttons} onSubmit={onChangeBalance}>
                        <div className={style.input}>
                                <div className={style.input_number}>
                                    <input
                                        type="number"
                                        placeholder="Введите сумму"
                                        id="count"
                                        name="count"
                                        required
                                        onBlur={(e) => setAddBalance(parseInt(e.target.value))}
                                    />
                                </div>
                        </div>

                        <div className={style.count}>
                            <button type="submit">Рассчитать</button>
                        </div>
                    </form>
                )}
            </div>

        </div>
    );
}