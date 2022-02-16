import React from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/urls";
import { UseRequestData } from "../../hooks/useRequestData";

function ListTripsPage() {
  const navigate = useNavigate()
  const listTrips = UseRequestData(`${BASE_URL}/trips`)

  const goToHomePage = () => {
    navigate("/")
  }
  const goToAplicationForm = () => {
    navigate("/trips/aplication")
  }

  const renderedList = listTrips && listTrips.map((trip)=>{
    return(
      <div key={trip.id}>
        {trip.name}
        {trip.description}
        {trip.planet}
        {trip.durationInDays}
        {trip.date}
      </div>
    )
  })
  return (
    <div>
        Lista de viagens
        <button onClick={goToHomePage}>Voltar</button>
        <button onClick={goToAplicationForm}>Inscrever-se</button>
        {renderedList}
    </div>
  );
}

export default ListTripsPage