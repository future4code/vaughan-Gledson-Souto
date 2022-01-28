import React from "react";
import styled from "styled-components";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";


const ColorOrange = styled.h1`
    color: #fe7e02;
`
export default class CreatePlaylist extends React.Component {
    state = {
        namePlaylist: "",
    }
    onChangePlaylist = (event) => {
        this.setState({ namePlaylist: event.target.value })
    }

    createPlay = () => {
    const axios_Config =  { headers: { Authorization: "gledson-lucas-vaughan" } }
        const body = {
            name: this.state.namePlaylist
        }

        axios.post(`${BASE_URL}`, body, axios_Config)
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
                <ColorOrange>Labefy</ColorOrange>
                
                <input placeholder="Nome da PlayList"
                    value={this.state.namePlaylist}
                    onChange={this.onChangePlaylist}
                />
                <button onClick={this.createPlay}>Criar</button>
                <button onClick={this.props.playlist}>Ir para Playlist</button>
            </div>
        )
    }
}