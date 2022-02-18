import axios from "axios";
import React from "react";
import { BASE_URL } from "../../constants/urls";
import UseForm from "../../hooks/useForm";
import { planets } from "../../constants/planets";
import ProtectedPage from "../../components/ProtectedPage/ProtectedPage";

function CreateTripPage() {
  const { form, onChange, clearFields } = UseForm({ name: "", planet: "", date: "", description: "", durationInDays: "" })
  ProtectedPage()
  
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
      })
      .catch((err) => {
        alert(`Erro ao criar viagem`, err.response)
      })
  }
  return (
    <div>
      Criar viagem
      <form onSubmit={createTrip}>
        <input placeholder="Nome da viagem"
          name={"name"}
          value={form.name}
          onChange={onChange}
          required
        />
        <select
          name={"planet"}
          value={form.planet}
          onChange={onChange}
          required
        >
          <option value={""} disabled selected>Planetas</option>
          {planets.map((planet)=>{
            return <option key={planet} value={planet}>{planet}</option>
          })}
        </select>

        <input type={"date"}
          name={"date"}
          value={form.date}
          onChange={onChange}
          required
        />
        <input placeholder="Descrição"
          name={"description"}
          value={form.description}
          onChange={onChange}
          required
        />
        <input placeholder="Duração em dias"
          name={"durationInDays"}
          value={form.durationInDays}
          onChange={onChange}
          type={"number"}
          required
        />
        <button type={"submit"}>Criar</button>
      </form>
    </div>
  );
}

export default CreateTripPage