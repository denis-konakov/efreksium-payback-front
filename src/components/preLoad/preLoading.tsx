import React from "react";
import style from './../../css/preLoading.module.css';

const PreLoading = () => {

    window.addEventListener("load", () => {
        const loader = document.querySelector(".loader");
      
        loader.classList.add("loader--hidden");
      
        loader.addEventListener("transitionend", () => {
          document.body.removeChild(loader);
        });
    });
      

    return (
        <div className={style.preLoading}>
            <div class="loader"></div>
        </div>
    );
}

export default PreLoading;