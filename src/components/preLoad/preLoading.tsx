import React, {useState, useEffect} from "react";
import style from './../../css/preLoading.module.css';

const PreLoading = () => {

    // Заставка загрузки
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
        setLoading(false);
        }, 1500)
    }, [])
    // /.Заставка загрузки

    return (
        !loading && (
        <div className={style.preLoad}>
            <div className={style.load_block}>
                <div className={style.loadingio_spinner_pulse_a93e71bqxvt}>
                    <div className={style.ldio_a8zyvod4bll}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>)
    );
}

export default PreLoading;