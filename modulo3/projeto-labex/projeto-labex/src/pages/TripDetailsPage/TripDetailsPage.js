import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProtectedPage from "../../components/ProtectedPage/ProtectedPage";
import { BASE_URL } from "../../constants/urls";
import UseRequestData  from "../../hooks/useRequestData";

function TripDetailPage() {
  const params = useParams()
  const [detailTrip, setDetailTrip] = UseRequestData(`/trip/${params.id}`, [])
  const [aprove, setAprove] = useState(true)
  ProtectedPage()


  const decideCandidates = (candidateId) => {
    const token = localStorage.getItem("token")
    const header = {headers: { auth: token }}
    const body = {
      approve: aprove
    }
    axios.put(`${BASE_URL}/trips/${params.id}/candidates/${candidateId}/decide`, body, header)
    .then((res)=>{
      alert("Decisão registrada com sucesso!")
      setDetailTrip()
    })
    .catch((err)=>{
      console.log("erro")
    })
  }
  const changeDecide = () => {
    setAprove(false)
  }

  const listCandidate = detailTrip.trip && detailTrip.trip.candidates.map((candidate)=>{
    return(<div key={candidate.id}>
        name: {candidate.name}
        profissão: {candidate.profession}
        idade: {candidate.age}
        descrição: {candidate.applicationText}
        <div>
          <button onClick={()=> decideCandidates(candidate.id)}>Aprovar</button>
          <button onClick={()=> decideCandidates(candidate.id)} onChange={changeDecide}>Reprovar</button>
        </div>
      </div>
    )
  })
  const candidatesAproved = detailTrip && detailTrip.trip && detailTrip.trip.approved.map((aprov) => {
    return(
      <div>
        {aprov.name}
      </div>
    )
  })

  return (
    <div>
        {detailTrip && detailTrip.trip && <h1>{detailTrip.trip.name}</h1>}
        {detailTrip && detailTrip.trip && <h4>Nome: {detailTrip.trip.name}</h4>}
        {detailTrip && detailTrip.trip && <h4>Planeta: {detailTrip.trip.planet}</h4>}
        {detailTrip && detailTrip.trip && <h4>Duração em dias: {detailTrip.trip.durationInDays}</h4>}
        {detailTrip && detailTrip.trip && <h4>Data: {detailTrip.trip.date}</h4>}
        {listCandidate}

        {candidatesAproved}
    </div>
  );
}

export default TripDetailPage