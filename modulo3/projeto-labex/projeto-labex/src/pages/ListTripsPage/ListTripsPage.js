import React from "react";
import { useNavigate } from "react-router-dom";
import UseRequestData from "../../hooks/useRequestData";
import { CardListTrip,ContainerTrips, NavButton } from "./style";
import Loading from "../../assets/animation.gif"

function ListTripsPage() {
  const navigate = useNavigate()
  const [listTrips, setListTrips, isLoading] = UseRequestData(`/trips`, {})

  const goToHomePage = () => {
    navigate("/")
  }
  const goToAplicationForm = () => {
    navigate("/trips/aplication")
  }

  const renderedList = listTrips.trips && listTrips.trips.map((trip)=>{
    return(
      <CardListTrip key={trip.id}>
        <p><strong>Nome:</strong> {trip.name}</p>
        <p><strong>Descrição:</strong> {trip.description}</p>
        <p><strong>Planeta:</strong> {trip.planet}</p>
        <p><strong>Duração</strong> {trip.durationInDays}</p>
       <p><strong>Data:</strong> {trip.date}</p>
      </CardListTrip>
    )
  })
  return (
    <ContainerTrips>
      <NavButton>
        <a onClick={goToHomePage} className="btn item1">Voltar</a>
        <a onClick={goToAplicationForm} className="btn item2">Inscrever-se</a>
      </NavButton>
      <h1>Lista de viagens</h1>
        {isLoading? <img src={Loading} className="animation"/> : renderedList}
    </ContainerTrips>
  );
}

export default ListTripsPage