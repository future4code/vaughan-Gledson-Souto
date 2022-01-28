import React from "react";
import axios from "axios";
import styled from "styled-components";
import { BASE_URL } from "../../constants/urls";

const CardPlay = styled.div`
    border: 1px solid #fe7e02;
    width: 200px;
    margin: 5px;
    padding: 5px;
    display: flex;
    justify-content: space-between;
`

const CorList = styled.li`
    color: #fe7e02 ;
    &:hover{
        cursor: pointer;
    }
`
const ButtonColor = styled.button`
    color: black;
    border: 1px #fe7e02;
    background-color: #fe7e02;
    border-radius: 10%;
    &:hover{
        cursor: pointer;
    }
`


export default class ListPlaylist extends React.Component {
    state = {
        lista: [],
        name: "",
        artist: "",
        music: ""
    }
    componentDidMount() {this.getlista()}
    
    getlista = () => {
        const config = { headers: { Authorization: "gledson-lucas-vaughan" } }
        axios.get(`${BASE_URL}`, config)
            .then((res) => { this.setState({ lista: res.data.result.list }) })
            .catch((error) => { alert("ocorreu um erro, tente novamente") })
    }

    deletarPlaylist = (id) => {
        const config = { headers: { Authorization: "gledson-lucas-vaughan" } }
        axios.delete(`${BASE_URL}/${id}`, config)
            .then((res) => { alert("deletado"); this.getlista() })
            .catch((error) => { alert("ocorreu um erro") })
    }

    render() {
        console.log()
        const listaRendereizada = this.state.lista.map((playlist) => {
            return (
                <CardPlay key={playlist.id}>
                    <CorList onClick={() => this.props.goDetail(playlist.id)}>
                        {playlist.name}
                    </CorList>
                    <ButtonColor onClick={() => this.deletarPlaylist(playlist.id)}>x</ButtonColor>
                </CardPlay>)
        })
        return (
            <div>
                <div>
                    <button onClick={this.props.voltar}>Voltar</button>
                    {listaRendereizada}
                </div>
            </div>
        )
    }
}