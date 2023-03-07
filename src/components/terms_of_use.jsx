import React from "react";
import style from './../css/terms_of_use.module.css';
import { Link } from "react-router-dom";

const Terms_of_use = () => {
    return (
        <div className={style.terms_of_use}>
        
            <div className={style.titel}>
                <span>Политика в отношении обработки персональных<br/> данных</span>
            </div>

            <div className={style.desc}>
                <p>
                    <span>1. Общие положения</span> <br/> Настоящая политика обработки<br/> персональных данных составлена в соответствии 
                    с требованиями Федерального закона от 27.07.2006. №152-ФЗ «О персональных данных» 
                    (далее - Закон о персональных данных) и определяет порядок обработки персональных данных и меры 
                    по обеспечению безопасности персональных данных, предпринимаемые Михайловым Иваном Сергеевичем 
                    (далее – Оператор).<br/>
                    1.1. Оператор ставит своей важнейшей целью и условием осуществления своей деятельности 
                    соблюдение прав и свобод человека и гражданина при обработке его персональных данных, 
                    в том числе защиты прав на неприкосновенность частной жизни, личную и семейную тайну.<br/>
                    1.2. Настоящая политика Оператора в отношении обработки персональных данных (далее – Политика) 
                    применяется ко всей информации, которую Оператор может получить о посетителях веб-сайта 
                    httpsː//thismywebsite·com.<br/>
                    <span>2. Основные понятия, используемые в Политике</span> <br/>
                    2.1. Автоматизированная обработка персональных данных – обработка персональных данных 
                    с помощью средств вычислительной техники. <br/>
                    ............
                </p>
            </div>

            <div className={style.button}>
                <Link to="/sign_up">Я ознакомлен</Link>
            </div>

        </div>
    );
}

export default Terms_of_use;