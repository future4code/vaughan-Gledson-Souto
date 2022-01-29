import React from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";
import { CardPlay } from "./styled";
import { ButtonColor } from "./styled";
import { ColorOrange } from "./styled";
import { CardGeral } from "./styled";


export default class ListPlaylist extends React.Component {
    state = {
        lista: [],
        name: "",
        artist: "",
        music: ""
    }
    componentDidMount() {
        this.getlista()
    }

    getlista = () => {
        const config = { headers: { Authorization: "gledson-lucas-vaughan" } }
        axios.get(`${BASE_URL}`, config)
            .then((res) => {
                this.setState({ lista: res.data.result.list })
            })
            .catch((error) => {
                alert("ocorreu um erro, tente novamente")
            })
    }

    deletarPlaylist = (id) => {
        const config = { headers: { Authorization: "gledson-lucas-vaughan" } }
        axios.delete(`${BASE_URL}/${id}`, config)
            .then((res) => {
                alert("deletado"); this.getlista()
            })
            .catch((error) => {
                alert("ocorreu um erro")
            })
    }

    render() {
        const listaRendereizada = this.state.lista.map((playlist) => {
            return (
                <CardGeral>
                    <CardPlay key={playlist.id} onClick={() => this.props.goDetail(playlist.id)}>
                            {playlist.name}
                      
                    </CardPlay>
                    <ButtonColor onClick={() => this.deletarPlaylist(playlist.id)}>x</ButtonColor>
                </CardGeral>
            ) 
        })
        return (
            <div>
                <div>
                    <ColorOrange>Playlist</ColorOrange>
                    <button onClick={this.props.voltar}>Voltar</button>
                    {listaRendereizada}
                </div>
            </div>
        )
    }
}