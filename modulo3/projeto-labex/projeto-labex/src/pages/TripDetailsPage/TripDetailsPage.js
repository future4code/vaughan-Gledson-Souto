import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ProtectedPage from "../../components/ProtectedPage/ProtectedPage";
import { BASE_URL } from "../../constants/urls";
import UseRequestData  from "../../hooks/useRequestData";
import { CardsCandidates, CotainerDetail, DetailTrip, StyleButton, Animation } from "./style";
import { useNavigate } from "react-router-dom";
import Loading from "../../assets/animation.gif"

function TripDetailPage() {
  const params = useParams()
  const [detailTrip, setDetailTrip, isLoading] = UseRequestData(`/trip/${params.id}`, [])
  const [aprove, setAprove] = useState(true)
  const navigate = useNavigate()
  ProtectedPage()


  const goToAdminPage = () => {
    navigate("/admin/trips/list")
  }

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
    return(<CardsCandidates key={candidate.id}>
    
        <p><strong>Nome:</strong> {candidate.name}</p>
        <p><strong>Profissão:</strong> {candidate.profession}</p>
        <p><strong>Idade:</strong> {candidate.age}</p>
        <p><strong>Texto de candidatura:</strong> {candidate.applicationText}</p>
        <StyleButton>
          <a onClick={()=> decideCandidates(candidate.id)} className="btn item1">Aprovar</a>
          <a onClick={()=> decideCandidates(candidate.id)} onChange={changeDecide}  className="btn item2">Reprovar</a>
        </StyleButton>
      </CardsCandidates>
    )
  })
  const candidatesAproved = detailTrip && detailTrip.trip && detailTrip.trip.approved.map((aprov) => {
    return(
      <li>
        {aprov.name}
      </li>
    )
  })

  return (
    <>
    {isLoading ? <Animation src={Loading}/> :
    <CotainerDetail>
      <DetailTrip>
        {detailTrip && detailTrip.trip && <h1>{detailTrip.trip.name}</h1>}
        {detailTrip && detailTrip.trip && <p><strong>Nome: </strong>{detailTrip.trip.name}</p>}
        {detailTrip && detailTrip.trip && <p><strong>Planeta: </strong>{detailTrip.trip.planet}</p>}
        {detailTrip && detailTrip.trip && <p><strong>Duração em dias: </strong>{detailTrip.trip.durationInDays}</p>}
        {detailTrip && detailTrip.trip && <p><strong>Data: </strong> {detailTrip.trip.date}</p>}
        <button onClick={goToAdminPage} className="button">Voltar</button>

      </DetailTrip>
 
        <div>
          <h1>Lista de candidatos:</h1>
        {listCandidate && listCandidate.length === 0? <h3>Não há candidatos para esta viagem</h3> : listCandidate}

        </div>


        <div>
          <h1>Candidatos aprovados:</h1>
          {candidatesAproved && candidatesAproved.length === 0? <h3>Nenhum candidato aprovado</h3> : candidatesAproved}
        </div>
    </CotainerDetail>}
    </>
  );
}

export default TripDetailPage