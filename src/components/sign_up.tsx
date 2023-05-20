import React, {useEffect, useState} from "react";
import style from './../css/sign_up.module.css';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import FormSignUp from "./forms/formSignUp";
import {useAuthStore} from "../store";

const Sign_up = () => {
    const navigate = useNavigate();
    const isLoggedIn = useAuthStore(s => s.isLoggedIn)
    useEffect(() => {
        if (isLoggedIn)
            navigate('/profile');
    }, [])
    return (
        <div className={style.sign_up}>
        
            <div className={style.titel}>
                <span>Регистрация</span>
            </div>

            <FormSignUp />


        </div>
    );
}

export default Sign_up;