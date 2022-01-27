import React from "react";
import axios from "axios";
import styled from "styled-components";

const CardUsu = styled.div`
    border: 1px solid black;
    width: 200PX;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    margin: 10px;
`

export default class DetalheUsuario extends React.Component {
    state = {
        usuarios: [],
    }

    componentDidMount() {
        this.listaUsuario()
    }

    listaUsuario = () => {
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

    detalheUsuario = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
        axios.get(url,{
                headers: {
                    Authorization: "gledson-lucas-vaughan"
                }
            })
            .then((res) => {
                console.log(res.data)
            })
            .catch((error) => {
                alert("ocorreu um erro, tente novamente")
            })
    }


    render() {
        const listaDetalhada = this.state.usuarios.map((user) => {
            return <CardUsu key={user.id}>
                {user.name}
                {user.email}
                <button onClick={() => this.detalheUsuario(user.id)}>Detalhes</button>
            </CardUsu>
        })
        return (
            <div>
                <button onClick={this.props.voltar}>Voltar</button>
                <h2>Detalhes usuarios</h2>
                {listaDetalhada}
            </div>
        )
    }
}