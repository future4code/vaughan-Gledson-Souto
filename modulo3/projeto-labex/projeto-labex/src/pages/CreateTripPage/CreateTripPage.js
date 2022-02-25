import axios from "axios";
import React from "react";
import { BASE_URL } from "../../constants/urls";
import UseForm from "../../hooks/useForm";
import { planets } from "../../constants/planets";
import ProtectedPage from "../../components/ProtectedPage/ProtectedPage";
import { ContainerForms, InputStyle, SelectStyle } from "../AplicationFormPage/style";
import { useNavigate } from "react-router-dom";

function CreateTripPage() {
  const { form, onChange, clearFields } = UseForm({ name: "", planet: "", date: "", description: "", durationInDays: "" })
  const navigate = useNavigate()
  ProtectedPage()
  
  const goToAdminPage = () => {
    navigate("/admin/trips/list")
  }
  const createTrip = (event) => {
    event.preventDefault()
    const token = localStorage.getItem(`token`)
    const headers = { headers: { auth: token } }
    const body = {
      name: form.name,
      planet: form.planet,
      date: form.date,
      description: form.description,
      durationInDays: form.durationInDays
    }
    axios.post(`${BASE_URL}/trips`, body, headers)
      .then((res) => {
        alert(`Viagem criada`)
        clearFields()
      })
      .catch((err) => {
        alert(`Erro ao criar viagem`, err.response)
      })
  }
  return (
    <div>
  
      <ContainerForms onSubmit={createTrip}>
        <h1>Criar viagens</h1>
        <InputStyle placeholder="Nome da viagem"
          name={"name"}
          value={form.name}
          onChange={onChange}
          required
        />
        <SelectStyle
          name={"planet"}
          value={form.planet}
          onChange={onChange}
          required
        >
          <option value={""} disabled selected>Planetas</option>
          {planets.map((planet)=>{
            return <option key={planet} value={planet}>{planet}</option>
          })}
        </SelectStyle>

        <InputStyle type={"date"}
          name={"date"}
          value={form.date}
          onChange={onChange}
          required
        />
        <InputStyle placeholder="Descrição"
          name={"description"}
          value={form.description}
          onChange={onChange}
          required
        />
        <InputStyle placeholder="Duração em dias"
          name={"durationInDays"}
          value={form.durationInDays}
          onChange={onChange}
          type={"number"}
          required
          min={50}
        />
        <div>
        <button onClick={goToAdminPage} className="btn">Voltar</button>
        <button type={"submit"} className="btn">Criar</button>
        </div>
      </ContainerForms>
    </div>
  );
}

export default CreateTripPage