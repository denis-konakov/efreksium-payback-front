import {attachment, username} from "../../../api/parser";
import React from "react";
import {IGroup} from "../../../models/IGroup";
import styles from "./GroupCard.module.css";
const GroupCard = (group: IGroup) => {

    const hasPayments = !group.members.every((e) => (e.balance === 0));


    return (<>
        <div className={styles.card}>
            <div className={styles.avatar}>
                <img
                    src={attachment('GROUP')}
                />
            </div>
            <div className={styles.name__wrapper}>
                <div className={styles.name}>
                     {group.name}
                </div>
                <div className={styles.payments + (hasPayments ? styles.exists : "")}>
                    {hasPayments ? "Есть неоплаченые счета" : "Все счета оплачены"}
                </div>
            </div>

        </div>
    </>);
}
export default GroupCard;