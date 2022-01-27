import React from "react"
import axios from "axios"
import styled from "styled-components"

const CardUsu = styled.div`
    border: 1px solid black;
    width: 200PX;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    margin: 10px;
`


export default class Usuarios extends React.Component {
    state = {
        usuarios: [],
        pesquisa: ""
    }

    componentDidMount() {
        this.getlistaUsuario()
    }
    getlistaUsuario = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

        axios.get(url,{
                headers: {
                    Authorization: "gledson-lucas-vaughan"
                }
            })
            .then((res) => {
                this.setState({ usuarios: res.data })
            })
            .catch((error) => {
                alert("ocorreu um erro, tente novamente")
            })
    }


    deletarUsuario = (id) => {
        if (window.confirm(`Tem certeza de que deseja deletar?`) === true) {
            return axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, {
                headers: {
                    Authorization: "gledson-lucas-vaughan"
                }
            })
                .then((res) => {
                    alert("Usuario(a) deltado(a) com sucesso")
                    this.getlistaUsuario()
                })
                .catch((error) => {
                    alert("ocorreu um erro, tente novamente")
                })
        } else {
            alert(`Usúario não deletado`)
        }
    }

    filtrarNome = (event) =>{
        this.setState({pesquisa: event.target.value})
    }

    render() {
        const listaRendereizada = this.state.usuarios
        .filter(user => {
            return user.name.toLowerCase().includes(this.state.pesquisa.toLowerCase())
          })
        .map((user) => {
            return <CardUsu key={user.id}>
                <li>
                {user.name}
                </li>
                <button onClick={() => this.deletarUsuario(user.id)}>X</button>
            </CardUsu>
            })

        return (
            <div>
                <button onClick={this.props.proximo}>Próximo</button>
                <button onClick={this.props.voltar}>Voltar</button>

                <div>
                    <h2>Lista de usuarios</h2>
                    {listaRendereizada}
                </div>
                <div>
                    <input placeholder="Pesquisar usuario"
                    value={this.state.pesquisa}
                    onChange={this.filtrarNome}
                    />
                </div>
            </div>
        )
    }
}

