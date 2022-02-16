import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/urls";
import { UseRequestData } from "../../hooks/useRequestData";
import { ContainerForms, InputStyle, SelectStyle } from "./style";
import { StyledEngineProvider } from '@mui/material/styles';
import Countries from '../../components/Countries/Countries';


function AplicationFormPage() {
    const navigate = useNavigate()
    const listTrips = UseRequestData(`${BASE_URL}/trips`)
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [aplicationText, setAplicationText] = useState("")
    const [profession, setProfession] = useState("")
    const [country, setContry] = useState("")

    const goToListTripsPage = () => {
      navigate("/trips/list")
    }

    const formTrips = () => {
      const body = {
        name:  name,
        age: age,
        applicationText: aplicationText,
        profession: profession,
        country: country,
      }
      axios.post(`${BASE_URL}/trips/:id/apply`, body)
      .then((res)=>{

      })
      .catch((err)=>{
        alert(err.response.data)
      })
    }

    const onChangeName = (e) => {
      setName(e.target.value)
    }
    const onChangeAge = (e) => {
      setAge(e.target.value)
    }
    const onChangeAplication = (e) => {
      setAplicationText(e.target.value)
    }
    const onChangeProfession = (e) => {
      setProfession(e.target.value)
    }
    const onChangeCountry = (e) => {
      setContry(e.target.value)
    }

    const renderedList = listTrips && listTrips.map((trip)=>{
      return(
      <option key={trip.id}>
        {trip.name}
        </option>
       
      )
    })
  return (
    <ContainerForms>
        Form page
        <SelectStyle>
          <option value="" disabled selected> Escolha uma viagem</option>
          {renderedList}
          </SelectStyle>

        <InputStyle 
        placeholder="Nome" 
        value={name}
        onChange={onChangeName}
        />

        <InputStyle 
        placeholder="Idade"
        value={age}
        onChange={onChangeAge}
        />
        <InputStyle 
        placeholder="Texto de candidatura"
        value={aplicationText}
        onChange={onChangeAplication}
        />
        <InputStyle 
        placeholder="Profissão"
        value={profession}
        onChange={onChangeProfession}
        />

      <StyledEngineProvider injectFirst>
      <Countries value={country} onChange={onChangeCountry}/>
      </StyledEngineProvider>,
   

        <div>
        <button onClick={goToListTripsPage}>Voltar</button>
        <button> Enviar</button>
        </div>
    </ContainerForms>
  );
}

export default AplicationFormPage