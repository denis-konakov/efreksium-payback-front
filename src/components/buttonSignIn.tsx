import React from "react";
import { useNavigate } from "react-router-dom";

const ButtonSignIn = () => {
  const history = useNavigate();
  const viewProfile = function() {
    history.push("/profile");
  };
  return (
    <>
    <button onClick="submit">
      Войти
    </button>
    </>
  );
}

export default ButtonSignIn;