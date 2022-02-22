import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/urls";
import UseForm from "../../hooks/useForm";
import { goToFeed, goToSignUp } from "../../routes/Coordinator";


const LoginPage = () => {
    const {form , onChange, clearFields} = UseForm({email: "", password: ""})
    const navigate = useNavigate()

    const onSubmitLogin = (event) => {
        event.preventDefault()
        const body = {
            email: form.email,
            password: form.password,
        }
        axios.post(`${BASE_URL}/users/login`, body)
        .then((res)=>{
            alert(`Logado!`)
            window.localStorage.setItem(`token`, res.data.token)
            goToFeed(navigate)
            clearFields()
        })  
        .catch((err)=>{
            alert(`Erro ao logar!`, err.response)

        })

    }

    return (
      <div>
          <h1>Login</h1>
          <form onSubmit={onSubmitLogin}>
             <input placeholder="E-mail"
             name={"email"}
             value={form.email}
             onChange={onChange}
             required
             />
             <input placeholder="Senha"
             name={"password"}
             value={form.password}
             onChange={onChange}
             required
             />

             <button type={"submit"}>Login</button>
          </form>
            <div>
            <h2>Não possui uma conta? faça seu cadastro!!</h2>
            <button onClick={()=> goToSignUp(navigate)}>Cadastrar</button>
            </div>

      </div>
    );
  }
  
  export default LoginPage;
  