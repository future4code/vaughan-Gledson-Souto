import axios from "axios";
import React from "react";
import { BASE_URL } from "../../constants/urls";
import UseForm from "../../hooks/useForm";

const SignUpPage = () => {
  const {form, onChange, clearFields} = UseForm({username: "", email:"", password: ""})

  const signUp = (event) => {
    event.preventDefault()
    const body = {
      username: form.username,
      email: form.email,
      password: form.password
    }
    axios.post(`${BASE_URL}/users/signup`, body)
    .then((res)=>{
      alert("usuário cadastrado")
    })
    .catch((err)=>{
      alert("Erro ao cadastrar, tente novamente!")
    })
  }
    return (
      <div>
        <h1>Cadastrar</h1>
        <form onSubmit={signUp}>
          <input placeholder="nome"
          name={"username"}
          value={form.username}
          onChange={onChange}
          required
          />
          <input placeholder="E-mail"
          name={"email"}
          value={form.email}
          onChange={onChange}
          required
          />
          <input placeholder="senha"
          name={"password"}
          value={form.password}
          onChange={onChange}
          required
          />
          <button type="submit">Cadastrar</button>
        </form>
      </div>
    );
  }
  
  export default SignUpPage;
  