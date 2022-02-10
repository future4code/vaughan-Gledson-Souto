import { useState, useEffect } from "react";
import Home from "../Home/Home";
import { ContainerMatches, ListMatches } from "./Style";
import axios from "axios";
import { BASE_URL } from "../../constants/Urls";

export default function Matches(props) {
    const [matches, setMatches] = useState([])

    useEffect(()=>{
        getMacths()
    },[])

    const getMacths = () => {
        axios.get(`${BASE_URL}/matches`)
        .then((res)=>{
            setMatches(res.data.matches)
        })
        .catch((error)=>{
            alert("erro")
        })
    }
    const listMatches = matches.map((person)=>{
        return(
            <ListMatches key={person.id}>
              <img src={person.photo} alt="foto matches"/>
              <h2> {person.name}</h2> 
            </ListMatches>
        )
    })

    return (
        <>
            <Home goToHome={props.goToHome}/>
            <div>
                
            </div>
            <ContainerMatches>
                
            <div>{listMatches}</div>
            </ContainerMatches>
        </>
    )
}