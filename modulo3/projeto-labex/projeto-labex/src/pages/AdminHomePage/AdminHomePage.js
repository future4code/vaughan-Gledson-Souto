import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/urls";
import { UseRequestData } from "../../hooks/useRequestData";

function AdminHomePage(props) {
 const [listTrips] = UseRequestData(`${BASE_URL}/trips`, {});
  const navigate = useNavigate();

  const goToHome = () => {
    navigate(`/`)
  }

  const logout = () => {
    navigate(`/login`)
  }

  const goToTripDetail = (id) => {
    navigate(`/admin/trips/${id}`)
  }


  return (
    <div>
      <h1>Admin page</h1>
      <button onClick={logout}>Logout</button>

      {listTrips.trips && listTrips.trips.map((trip)=>{
        return <div key={trip.id} onClick={()=> goToTripDetail(trip.id)}>{trip.name}</div>
      })}

      <button onClick={goToHome}>Voltar</button>
    </div>
  );
}

export default AdminHomePage