import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/urls";
import UseRequestData from "../../hooks/useRequestData";
import { ContainerForms, InputStyle, SelectStyle } from "./style";
import {Countries} from '../../constants/Countries';
import UseForm from "../../hooks/useForm";

function AplicationFormPage() {
    const navigate = useNavigate()
    const [listTrips] = UseRequestData(`/trips`, [])
    const {form, onChange, clearFields} = UseForm({name: "", age: "", applicationText: "", profession: "", country: ""})
    const [tripId, setTripId] = useState("")
  
    const goToListTripsPage = () => {
      navigate("/trips/list")
    }

    const formTrips = (event) => {
      event.preventDefault()
      const body = {
        name: form.name,
        age: form.age,
        applicationText: form.applicationText,
        profession: form.profession,
        country: form.country
      }
      axios.post(`${BASE_URL}/trips/${tripId}/apply`, body)
      .then((res)=>{
        alert("Formulário de inscrição enviado!")
        clearFields()
      })
      .catch((err)=>{
        alert(`erro ao enviar`, err.response.data)
      })
    }

    const onChangeTripId = (event) => {
      setTripId(event.target.value)
    }

    const renderedList = listTrips.trips && listTrips.trips.map((trip)=>{
      return<option key={trip.id} value={trip.id}> {trip.name} </option>
    })

  return (
    <ContainerForms onSubmit={formTrips}>
        <h1>Inscreva-se para uma viagem</h1>
        <SelectStyle onChange={onChangeTripId}>
          <option  disabled selected>Escolha uma viagem</option>
          {renderedList}
        </SelectStyle>

        <InputStyle 
        name={"name"}
        placeholder="Nome" 
        value={form.name}
        onChange={onChange}
        required
        />

        <InputStyle
        name={"age"}
        placeholder="Idade"
        value={form.age}
        onChange={onChange}
        type={"number"}
        min={18}
        />
        <InputStyle
        name={"applicationText"}
        placeholder="Texto de candidatura"
        value={form.applicationText}
        onChange={onChange}
        required
        />

        <InputStyle
        name={"profession"} 
        placeholder="Profissão"
        value={form.profession}
        onChange={onChange}
        required
        />

        <SelectStyle
          name={"country"}
          value={form.country}
          onChange={onChange}
        >
        
        <option value={""} disabled selected>País</option>
        {Countries.map((countri)=>{
          return (<option key={countri.label} value={countri.label}>{countri.label}</option>)
        })}
        </SelectStyle>
        <div>
        <button onClick={goToListTripsPage} className="btn item2">Voltar</button>
        <button type={"submit"} className="btn item1">Enviar</button>
        </div>
   
    </ContainerForms>

  
  );
}

export default AplicationFormPage
