import axios from "axios";
import React from "react";
import { useNavigate } from "react-router";
import { BASE_URL } from "../../constants/urls";
import UseForm from "../../hooks/useForm";
import { signUp } from "../../services/requests";
import { ContainerSignup } from "./style";

const SignUpPage = () => {
  const navigate = useNavigate()
  const {form, onChange, clearFields} = UseForm({username: "", email:"", password: ""})

  const register = (event) => {
    event.preventDefault()
    signUp(form, clearFields, navigate)
  }
    return (
      <ContainerSignup>

        <div className="divForm">

        <form onSubmit={register}>
        <h1>Cadastrar</h1>
          <input placeholder="nome"
          name={"username"}
          value={form.username}
          onChange={onChange}
          required
          />
          <input placeholder="E-mail"
          name={"email"}
          value={form.email}
          type={"email"}
          onChange={onChange}
          required
          />
          <input placeholder="senha"
          name={"password"}
          type={"password"}
          value={form.password}
          onChange={onChange}
          pattern={"^.{8,30}"}
          title={"A precisa precisa contem no mínimo 8 caracteres e no máximo 30"}
          required
          />

        <button type="submit">Cadastrar</button>
        </form>

        </div>
        
      </ContainerSignup>
    );
  }
  
  export default SignUpPage;
  