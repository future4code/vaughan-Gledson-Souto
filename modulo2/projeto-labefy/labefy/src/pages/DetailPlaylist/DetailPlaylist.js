import React from "react";
import axios from "axios";
import styled from "styled-components";
import { BASE_URL } from "../../constants/urls";
import { Add } from "../../StyledApp";
import { TracksAling } from "./styled";
import { TracksInfos } from "./styled";
import { StyleButoon } from "./styled";



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
                        <p>Nome: {detalhe.name} </p>
                        <p>Artista: {detalhe.artist}</p>               
                    </TracksInfos>
                    
                    <audio controls>
                            <source src={detalhe.url} />
                        </audio>   
                    <StyleButoon onClick={() => this.deletarTracks(detalhe.id)}>x</StyleButoon>
                </TracksAling>
            )
        })
        console.log(this.props.url)
        return (
            <div>
                <button onClick={this.props.voltar}>Voltar</button>
                <div>
                    <input placeholder="Nome da musica"
                        value={this.state.name}
                        onChange={this.inputName}
                    />
                    <input placeholder="Nome do artista"
                        value={this.state.artist}
                        onChange={this.inputArtist}
                    />
                    <input placeholder="Link da musica"
                        value={this.state.music}
                        onChange={this.inputMusic}
                    />
                    <Add onClick={this.addTracks}>+</Add>
                </div>
                {listaRendereizada}
            </div>
        )
    }
}