import React from "react"
import axios from "axios"
import CriarUsers from "./CriarUsuarios"

export default class Usuarios extends React.Component{
  state = {
    users: [],
    name: ""
  }

  getlistaUsuario = () =>{
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
    const auth = {headers:{Authorization:"gledson-lucas-vaughan"}}
    axios.get(url, auth)
    .then ((response)=>{
      this.setState({users: response.data})
      console.log(response.data)
    })
    .catch ((error) =>{
      console.log(error.response)
    })
  }


  render() { 
    console.log(this.listaUsuario) 
    const listaRendereizada = this.state.users.map =((usuarios)=>{
          return(
            <div>
                  {usuarios.name}
            </div>
          )
        })

    return(
      <div>
          <button onClick={this.props.voltar}>Voltar</button>
          {listaRendereizada}
      </div>
    )
  }
}