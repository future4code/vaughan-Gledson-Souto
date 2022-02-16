import React from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
    const navigate = useNavigate()

    const goToHomePage = () => {
        navigate("/")
      }
  return (
    <div>
        login
        <button onClick={goToHomePage}>Voltar</button>
        
    </div>
  );
}

export default LoginPage