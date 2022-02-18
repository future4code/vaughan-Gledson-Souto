import React from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/urls";
import { UseRequestData } from "../../hooks/useRequestData";

function TripDetailPage() {
  const params = useParams()
  const [detailTrip, setDetailTrip] = UseRequestData(`${BASE_URL}/trip/${params.id}`, [])


 
  return (
    <div>
        detalhes da viagem
        {detailTrip && detailTrip.trip && <h1>{detailTrip.trip.name}</h1>}
        
    </div>
  );
}

export default TripDetailPage