import React from "react";
import axios from "axios";
import styled from "styled-components";
import { BASE_URL } from "../../constants/urls";

const ButtonColor = styled.button`
    color: black;
    border: 1px #fe7e02;
    background-color: #fe7e02;
    border-radius: 10%;
    &:hover{
        cursor: pointer;
    }
`

export default class Detail extends React.Component{
    state = {
        lista: [],
        name: "",
        artist: "",
        music: ""
    }
    componentDidMount (){
        this.detailList()
    }
    detailList = () => {
        const axiosConfig = { headers: { Authorization: "gledson-lucas-vaughan" } }
        axios.get(`${BASE_URL}/${this.props.url}/tracks`, axiosConfig)
        .then((res)=>{this.setState({lista: res.data.result.tracks}); console.log(res.data)})
        .catch((error)=>{})
    }
    
    inputName = (event) =>{this.setState({name: event.target.value})}
       
    inputArtist = (event) =>{this.setState({artist: event.target.value})}
       
    inputMusic = (event) =>{this.setState({music: event.target.value})}

    addTracks = () => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.url}/tracks`
        const config = { headers: { Authorization: "gledson-lucas-vaughan" } }
        const body = {
            name: this.state.name,
            artist: this.state.artist,
            url: this.state.music
        }
        axios.post(url, config, body)
            .then((res) => {
                alert("criado")
             })
            .catch((error) => {alert("erro")})
    }

    render(){
        const listaRendereizada = this.state.lista.map((detalhe)=> {
            return(
                <div>
                   <p>Nome da musica: {detalhe.name}</p>
                   <p>Artista: {detalhe.artist}</p>
                   <a>link {detalhe.url}</a>
                </div>
            )
        })
        console.log(this.props.url)
        return(
            <div>
                <button onClick={this.props.voltar}>Voltar</button>
                {listaRendereizada}
                <div>
                    <input  placeholder="Nome da musica"
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
                    <ButtonColor onClick={this.addTracks}>+</ButtonColor>
                </div>
            </div>
        )
    }
}