import style from "../../../css/user_groups.module.css";
import React from "react";

const DontHaveGroups = () => {
    return (<>
        <div className={style.logo}></div>

        <div className={style.desc}>
            Создайте новую группу и добавьте в неё друзей, с которыми необходимо разделить счет
        </div>
    </>)
}
export default DontHaveGroups;