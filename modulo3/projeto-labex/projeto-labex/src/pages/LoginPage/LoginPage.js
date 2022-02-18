import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/urls";
import UseForm from "../../hooks/useForm";

function LoginPage() {
    const navigate = useNavigate()
    const {form, onChange, clearFields} = UseForm({email: "", password: ""})
     
    const goToHomePage = () => {
        navigate("/")
      }
    const goToAdminHomePage = () => {
        navigate("/admin/trips/list")
      }

    const onSubmitLogin = (event) => {
      event.preventDefault()
      const body = {
        email: form.email,
        password: form.password
      }
      axios.post(`${BASE_URL}/login`, body)
      .then((response)=>{
        window.localStorage.setItem(`token`, response.data.token)
        goToAdminHomePage()
        clearFields()
      })
      .catch((error)=>{
        alert(`Deu erro`, error.response)
      })
    }
  return (
    <div>
        <h1>login</h1>
        <form onSubmit={onSubmitLogin}>
          <input placeholder="E-mail"
          name={"email"}
          value={form.email}
          onChange={onChange}
          required
          />
          <input placeholder="Senha"
          name={"password"}
          type={"password"}
          value={form.password}
          onChange={onChange}
          required
          />
        <button type={"submit"}>Entrar</button>
        </form>
        <button onClick={goToHomePage}>Voltar</button>
    </div>
  );
}

export default LoginPage