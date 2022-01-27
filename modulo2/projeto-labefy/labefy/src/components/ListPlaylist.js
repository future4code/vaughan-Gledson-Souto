import React from "react";
import axios from "axios";
import styled from "styled-components";

const CardPlay = styled.div`
    border: 1px solid black;
`
export default class ListPlaylist extends React.Component {
    state = {
        lista: [],
    }

    
    getlista = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"

        axios.get(url,{
                headers: {
                    Authorization: "gledson-lucas-vaughan"
                }
            })
            .then((res) => {
                this.setState({ lista: res.data })
            })
            .catch((error) => {
                alert("ocorreu um erro, tente novamente")
            })
    }

    componentDidMount () {
        this.getlista()
    }

 


    render() {
        const listaRendereizada = this.state.lista.map((playlist) => {
            return <CardPlay key={playlist.id}>
                <li>
                {playlist.name}
                </li>
            </CardPlay>
            })

        return (
            <div>
                <div>
                    {listaRendereizada}
                </div>
           
            </div>
        )
    }
}