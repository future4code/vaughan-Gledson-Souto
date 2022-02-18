import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProtectedPage from "../../components/ProtectedPage/ProtectedPage";
import { BASE_URL } from "../../constants/urls";
import UseRequestData  from "../../hooks/useRequestData";

function AdminHomePage() {
 const [listTrips] = UseRequestData(`/trips`, {});
  const navigate = useNavigate();
  ProtectedPage()
 
  const goToHome = () => {
    navigate(`/`)
  }

  const logout = () => {
    navigate(`/login`)
    localStorage.setItem("token", "")
  }

  const goToTripDetail = (id) => {
    navigate(`/admin/trips/${id}`)
  }
  const goToCreateTrip = (id) => {
    navigate(`/admin/trips/create`)
  }

  const deleteTrip = (id, name) => {
    const token = localStorage.getItem(`token`)
    const axiosConfig = {headers: {auth: token}}
    const confirmDel = window.confirm(`Tem certeza que deletar a viagem para ${name}`)
    if(confirmDel){
      axios.delete(`${BASE_URL}/trips/${id}`, axiosConfig)
      .then((res)=>{
        alert(`tudo certo`)
      })
      .catch((err)=>{
        alert(`Erro na Admin Page`)
      })
    }
  }

  return (
    <div>
      <h1>Admin page</h1>
      <button onClick={logout}>Logout</button>
      <button onClick={goToCreateTrip}>Criar viagem</button>
      <button onClick={goToHome}>Voltar</button>

      {listTrips.trips && listTrips.trips.map((trip)=>{
        return (
          <div key={trip.id}>
        <div onClick={()=> goToTripDetail(trip.id)}>
          <h3>{trip.name}</h3>
        </div>
          <buttoon onClick={()=> deleteTrip(trip.id, trip.name)}>Deletar</buttoon>
        </div>
      )
      })}

    </div>
  );
}

export default AdminHomePage