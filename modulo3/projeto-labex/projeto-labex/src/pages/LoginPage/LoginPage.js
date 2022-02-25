import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/urls";
import UseForm from "../../hooks/useForm";
import { InputStyle } from "../AplicationFormPage/style";
import { ContainerLogin, FormStyle } from "./style";

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
        localStorage.setItem(`token`, response.data.token)
        goToAdminHomePage()
        clearFields()
      })
      .catch((error)=>{
        alert(`Deu erro`, error.response)
      })
    }
  return (
    <ContainerLogin>
        <h1>Login</h1>
        <FormStyle onSubmit={onSubmitLogin}>
          <InputStyle placeholder="E-mail"
          name={"email"}
          value={form.email}
          onChange={onChange}
          required
          />
          <InputStyle placeholder="Senha"
          name={"password"}
          type={"password"}
          value={form.password}
          onChange={onChange}
          required
          />
          <div>
          <button onClick={goToHomePage}>Voltar</button>
          <button type={"submit"}>Entrar</button>
          </div>
        </FormStyle>
    </ContainerLogin>
  );
}

export default LoginPage