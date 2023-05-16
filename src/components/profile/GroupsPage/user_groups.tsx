import React, {useState, useEffect} from "react";
import style from '../../../css/user_groups.module.css';
import { Link } from "react-router-dom";
import {useAuthStore} from "../../../store";
import DontHaveGroups from "./DontHaveGroups"
import GroupCard from "./GroupCard";
import PreLoading from "../../preLoad/preLoading";

const User_groups = () => {
    const userName = useAuthStore(state => state.name)();
    const groups = useAuthStore(state => state.profile.groups);

    return (
            <div className={style.user_groups}>
                <div className={style.header}>
                    <div className={style.titel}>
                        Ваши группы
                    </div>

                    <div className={style.nav}>
                        <Link to="/profile/groups/new">
                            <div className={style.add_group}></div>
                        </Link>
                        <Link to="/profile/notifications">
                            <div className={style.notifications}></div>
                        </Link>
                    </div>
                </div>

                <div className={style.content}>
                    <div className={style.hello}>
                        Здравствуй, {userName}!
                    </div>

                    {groups.length === 0 ? <DontHaveGroups/> : (
                        <div>
                            {groups.map((e, i) => (
                                <Link to={`/profile/groups/${e.id}`}>
                                    <GroupCard
                                        id={e.id}
                                        name={e.name}
                                        history={e.history}
                                        members={e.members}
                                        key={i}
                                    />
                                </Link>
                            ))}
                        </div>
                    )}
                    <Link to="/profile/groups/new">
                        <div className={style.group__button}>
                            <div className={style.button__icon}></div>
                            <div className={style.button__title}>Создать группу</div>
                        </div>
                    </Link>
                </div>
            </div>
    );
}

export default User_groups;