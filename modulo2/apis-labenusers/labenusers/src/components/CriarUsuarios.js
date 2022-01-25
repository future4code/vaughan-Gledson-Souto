import React from "react"
import axios from "axios"


export default class CriarUsers extends React.Component{
  state = {
    name: "",
    email: "",
  }

  onChangeName = (event) =>{
    this.setState({name: event.target.value})
  }
  onChangeEmail = (event) =>{
    this.setState({email: event.target.value})
  }
 

  criarUsuario=()=>{
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
    const body = {
      name: this.state.name,
      email: this.state.email}
    const auth =  {headers: {Authorization: "gledson-lucas-vaughan"} }

    axios.post(url, body, auth)
    .then ((resposta)=>{
        alert("usuario criado")
      console.log(resposta.data)
    })
    .catch ((erro) =>{
        alert("Usuario não criado")
      console.log(erro.data)
    })
  }

  render() {
      console.log(this.state)
        console.log(this.criarUsuario)
    return(
      <div>
          <div>
            <button onClick={this.props.prosseguir}>Prosseguir</button>
          </div>
          <input placeholder="Usuario"
            value={this.state.name}
            onChange={this.onChangeName}
          />
          <input placeholder="E-mail"
            value={this.state.email}
            onChange={this.onChangeEmail}
          />
          <button onClick={this.criarUsuario}>Criar usuario</button>
      </div>
    )
  }
}