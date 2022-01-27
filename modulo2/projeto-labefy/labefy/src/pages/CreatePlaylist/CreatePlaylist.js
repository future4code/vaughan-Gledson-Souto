import React from "react";
import styled from "styled-components";
import axios from "axios";



export default class CreatePlaylist extends React.Component {
    state = {
        namePlaylist: "",
    }
    onChangePlaylist = (event) => {
        this.setState({ namePlaylist: event.target.value })
    }

    createPlay = () => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists`
        const config = { headers: { Authorization: "gledson-lucas-vaughan" } }
        const body = {
            name: this.state.namePlaylist
        }
        axios.post(url, body, config)
            .then((res) => {
                console.log(res.data)
                alert("criado com sucesso")
            })
            .catch((error) => {
                alert("não foi possivel criar, tente novamente")
            })
    }
    render() {
        return (
            <div>
                <input placeholder="Nome da PlayList"
                    value={this.state.namePlaylist}
                    onChange={this.onChangePlaylist}
                />
                <button onClick={this.createPlay}>Criar</button>

            </div>
        )
    }
}