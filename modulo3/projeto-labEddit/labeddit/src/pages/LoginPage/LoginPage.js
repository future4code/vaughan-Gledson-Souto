import React from "react";
import { useNavigate } from "react-router-dom";
import Share from "../../components/Share/Share";
import UseForm from "../../hooks/useForm";
import { goToSignUp } from "../../routes/Coordinator";
import { onSubmitLogin } from "../../services/requests";
import { ContainerLogin, StyleForm } from "./style";


const LoginPage = () => {
    const {form , onChange, clearFields} = UseForm({email: "", password: ""})
    const navigate = useNavigate()

    const submitLogin = (event) => {
        event.preventDefault()
        onSubmitLogin(form, clearFields, navigate)
    }

    return (
      <ContainerLogin>
        <div className="divLogo">
        <h1>Labeddit</h1>
        <h2>O LabEddit ajuda você a se conectar e compartilhar com as pessoas que fazem parte da sua vida.</h2>
        </div>

        <div className="divForm">
        <StyleForm onSubmit={submitLogin}>
              
             <input placeholder="E-mail"
             name={"email"}
             value={form.email}
             type={"email"}
             onChange={onChange}
             required
             />

             <input placeholder="Senha"
             name={"password"}
             value={form.password}
             onChange={onChange}
             type={"password"}
             pattern={"^.{8,30}"}
             title={"A precisa precisa contem no mínimo 8 caracteres e no máximo 30"}
             required
             />

            <button type={"submit"} className="login">Login</button>
            <div>
            <button onClick={()=> goToSignUp(navigate)} className="signup">Criar nova conta</button>
            </div>
         
        </StyleForm>
        </div>
      </ContainerLogin>
    );
  }
  
  export default LoginPage;
  