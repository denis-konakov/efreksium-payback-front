import {ISharedUser} from "../../../models/ISharedUser";
import React from "react";
import styles from "./FriendCard.module.css"
import {attachment, username} from "../../../api/parser";
const FriendCard = (user: ISharedUser) => {
    return (<>
        <div className={styles.card}>
            <div className={styles.avatar}>
                <img
                    src={attachment(user.avatar)}
                />
            </div>
            <div className={styles.username__wrapper}>
                <div className={styles.username}>
                    {username(user)}
                </div>
            </div>
            <div className={styles.actions}>

            </div>
        </div>
    </>);
}

export default FriendCard;