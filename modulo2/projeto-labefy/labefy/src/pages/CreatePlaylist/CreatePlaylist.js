import React from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";
import { Add } from "../../StyledApp";
import { ImagemHome,StyleLogo,ContainerPrinc,Header,StyleImg,ButtonHome,StyleInput,BodyCreate } from "./styled";
import Logo from "./logo/Logo.png"
import MusicLogo from "./logo/music.svg"


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
            <BodyCreate>
            <ContainerPrinc>
                <Header>
                <StyleImg src={Logo}/>
                <StyleLogo>Labefy</StyleLogo>
                </Header>
                <StyleInput placeholder="Criar PlayList"
                    value={this.state.namePlaylist}
                    onChange={this.onChangePlaylist}
                />
                <Add onClick={this.createPlay}>+</Add>
                <div>
                <ButtonHome onClick={this.props.playlist}>Playlist</ButtonHome>
                </div>
            </ContainerPrinc>
            <ImagemHome src={MusicLogo}/>
            </BodyCreate>
        )
    }
}