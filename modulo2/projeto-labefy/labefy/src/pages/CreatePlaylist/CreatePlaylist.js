import React from "react";
import styled from "styled-components";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";
import { Add } from "../../StyledApp";
import { ColorWhite } from "./styled";
import { Border } from "./styled";


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
            <Border>
                <ColorWhite>Labefy</ColorWhite>
                <input placeholder="Nome da PlayList"
                    value={this.state.namePlaylist}
                    onChange={this.onChangePlaylist}
                />
                <Add onClick={this.createPlay}>+</Add>
                <button onClick={this.props.playlist}>Playlist</button>
            </Border>
        )
    }
}