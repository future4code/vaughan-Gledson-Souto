import React from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
    const navigate = useNavigate()

    const goToListTripPage = () =>{
        navigate("/trips/list")
    }
    const goToLoginPage = () =>{
        navigate("/login")
    }

  return (
    <div>
        <h2>Labex</h2>
        <button onClick={goToListTripPage}>Ver viagens</button>
        <button onClick={goToLoginPage}>Área de Admin</button>
    </div>
  );
}

export default HomePage