import { ButtonStyled, CardInfos, CardProfile, ContainerButtons, ContainerHome, ContainerMenu, MenuDetails, UserStyle } from "./Style";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/Urls";


export default function Home(props) {
    const [profiles, setProfiles] = useState({})

    useEffect (() => {
        catchProfile()
        choosePeople()
    },[])

    const catchProfile = () => {
        axios
            .get(`${BASE_URL}/person`)
            .then((res) => {
                setProfiles(res.data.profile)
            })
            .catch((error) => {
                alert("Ocorreu um erro, tente novamente")
            })
    }
    const choosePeople = (id) => {
        const body = { 
            id: id, 
            choice: true
        }
        axios
        .post(`${BASE_URL}/choose-person`, body)
        .then((res)=>{
            catchProfile()
        })
        .catch((error)=>{

        })
    }
    const clearMatches = () => {
        const clearPeople = window.confirm("Limpar todos os matches")
        if (clearPeople) {
            axios.put(`${BASE_URL}/clear`)
                .then((res) => {
                    alert("deu certo, brow")
                })
                .catch((error) => {
                    alert("Deu errado, man")
                })
        }
    }


    return (
        <ContainerHome>
            <ContainerMenu>
                <UserStyle>
                    <img src="https://picsum.photos/200/300" alt="foto lorem Picsum" />
                    <h3>Usuario</h3>
                    <h4 onClick={props.goToHome}>Home</h4>
                </UserStyle>
                <MenuDetails>
                <h3 onClick={props.goToMatches}>Matches</h3>
                <h3 onClick={clearMatches}>Limpar</h3>
                </MenuDetails>
            </ContainerMenu>

            <CardProfile key={profiles.id}>
            <img src={profiles.photo}/>
                <CardInfos>
                      <h3>{profiles.name}, {profiles.age}</h3>
                      <p>{profiles.bio}</p>
                </CardInfos>
                <ContainerButtons>
                <ButtonStyled onClick={catchProfile}>X</ButtonStyled>
                <ButtonStyled onClick={() => choosePeople(profiles.id)}>S2</ButtonStyled>
                </ContainerButtons>
            </CardProfile>

        </ContainerHome>
    )
}