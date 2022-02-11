import { useState, useEffect } from "react";
import Home from "../Home/Home";
import { ClearButton, ContainerMatches, ListMatches, ListVoid, StyleH3, LoadingStyle } from "./Style";
import axios from "axios";
import { BASE_URL } from "../../constants/Urls";
import reloading from "../../assets/reloading.png"
export default function Matches(props) {
    const [matches, setMatches] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        getMacths()
    },[matches])

    const getMacths = () => {
        setLoading(true)
        axios.get(`${BASE_URL}/matches`)
        .then((res)=>{
            setMatches(res.data.matches)
            setLoading(false)
        })
        .catch((error)=>{
            alert("erro")
        })
    }
    const clearMatches = () => {
        const clearPeople = window.confirm("Limpar todos os matches?")
        if (clearPeople) {
            axios.put(`${BASE_URL}/clear`)
                .then((res) => {
                    alert("Tudo limpo!")
                })
                .catch((error) => {
                    alert("Deu errado")
                })
        }
    }

    const listMatches = matches.map((person)=>{
        return(
            <ListMatches key={person.id}>
              <img src={person.photo} alt="foto matches"/>
              <h3> {person.name}</h3> 
            </ListMatches>
        )
    })

    return (
        <>
            <Home/>
            <StyleH3 onClick={props.goToHome}>Home</StyleH3>
       
            <ClearButton>
                <h3 onClick={clearMatches}>Limpar</h3>
            </ClearButton>
            <ContainerMatches>
            {listMatches.length === 0? 
            <ListVoid>Sua lista está vazia!<img src={reloading}/></ListVoid>  :
            <div>
            {listMatches} 
            </div>}
            </ContainerMatches>
        </>
    )
}