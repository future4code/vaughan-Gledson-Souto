import React from "react"
import axios from "axios"


export default class CriarUsers extends React.Component {
    state = {
        name: "",
        email: "",
    }

    onChangeName = (event) => {
        this.setState({ name: event.target.value })
    }
    onChangeEmail = (event) => {
        this.setState({ email: event.target.value })
    }


    criarUsuario = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        const body = {
            name: this.state.name,
            email: this.state.email
        }

        axios.post(url, body, {
            headers:
                { Authorization: "gledson-lucas-vaughan" }
        })
            .then((resposta) => {
                alert("usuario criado")
                this.setState({ name: "", email: "" })
            })
            .catch((erro) => {
                alert("Usuario não criado")
            })
    }

    render() {
        return (
            <div>
                <div>
                    <button onClick={this.props.prosseguir}>Próximo</button>
                </div>
                <h2>Cadastro</h2>

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