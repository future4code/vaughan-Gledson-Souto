import React from "react";
import axios from "axios";
import styled from "styled-components";
import { BASE_URL } from "../../constants/urls";
import { Add } from "../../StyledApp";
import { TracksAling,TracksInfos,StyleButoon,ContainerDetail, StyleInput,AudioStyle} from "./styled";
import { ButtoonBack } from "../ListPlaylist/styled";
import { ColorOrange } from "../ListPlaylist/styled";

export default class Detail extends React.Component {
    state = {
        lista: [],
        name: "",
        artist: "",
        music: ""
    }
    componentDidMount() {
        this.detailList()
    }
    detailList = () => {
        const axiosConfig = { headers: { Authorization: "gledson-lucas-vaughan" } }
        axios.get(`${BASE_URL}/${this.props.url}/tracks`, axiosConfig)
            .then((res) => { this.setState({ lista: res.data.result.tracks }); console.log(res.data) })
            .catch((error) => { })
    }

    inputName = (event) => { this.setState({ name: event.target.value }) }

    inputArtist = (event) => { this.setState({ artist: event.target.value }) }

    inputMusic = (event) => { this.setState({ music: event.target.value }) }

    addTracks = () => {
        const config = { headers: { Authorization: "gledson-lucas-vaughan" } }
        const body = { name: this.state.name, artist: this.state.artist, url: this.state.music }

        axios.post(`${BASE_URL}/${this.props.url}/tracks`, body, config)
            .then((res) => { alert("criado"); this.detailList() })
            .catch((error) => { alert("erro"); console.log(this.addTracks) })
    }

    deletarTracks = (id) => {
        const config = { headers: { Authorization: "gledson-lucas-vaughan" } }
        axios.delete(`${BASE_URL}/${this.props.url}/tracks/${id}`, config)

            .then((res) => { alert("deletado"); this.detailList() })
            .catch((error) => { alert("ocorreu um erro") })
    }

    render() {
        const listaRendereizada = this.state.lista.map((detalhe) => {
            return (
                <TracksAling>
                    <TracksInfos key={detalhe.id}>
                        <h3>Nome: {detalhe.name} </h3>
                        <h3>Artista: {detalhe.artist}</h3>               
                    </TracksInfos>
                    
                        <AudioStyle controls>
                            <source src={detalhe.url} />
                        </AudioStyle>   
                    <StyleButoon onClick={() => this.deletarTracks(detalhe.id)}>x</StyleButoon>
                </TracksAling>
            )
        })
        console.log(this.props.url)
        return (
            <ContainerDetail>
                <ColorOrange>Music</ColorOrange>
                <div>
                    <StyleInput placeholder="Nome da musica"
                        value={this.state.name}
                        onChange={this.inputName}
                    />
                    <StyleInput placeholder="Nome do artista"
                        value={this.state.artist}
                        onChange={this.inputArtist}
                    />
                    <StyleInput placeholder="Link da musica"
                        value={this.state.music}
                        onChange={this.inputMusic}
                    />
                    <Add onClick={this.addTracks}>+</Add>
                </div>
                {listaRendereizada}
                <ButtoonBack onClick={this.props.voltar}>Voltar</ButtoonBack>

            </ContainerDetail>
        )
    }
}