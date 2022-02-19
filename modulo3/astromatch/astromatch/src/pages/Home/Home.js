import { Reject, Heart,ButtonNegative, ButtonPositive, CardInfos, CardProfile, ContainerButtons, ContainerHome, ContainerMenu, MenuDetails, UserStyle, LoadingStyle } from "./Style";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/Urls";

export default function Home(props) {
    const [profiles, setProfiles] = useState({})
    const [loading, setLoading] = useState(false)
    useEffect (() => {
        catchProfile()
        choosePeople()
    },[])

    const catchProfile = () => {
        setLoading(true)
        axios
            .get(`${BASE_URL}/person`)
            .then((res) => {
                setProfiles(res.data.profile)
                setLoading(false)
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

    return (
        <ContainerHome>
            <ContainerMenu>
                <UserStyle>
                    <div>
                    <img src="https://picsum.photos/200/300" alt="foto lorem Picsum" />
                    <h3>Usuario</h3>
                    </div>
                </UserStyle>
                <MenuDetails>
                <h3 onClick={props.goToMatches}>Matches</h3>
                </MenuDetails>
            </ContainerMenu>

            <CardProfile key={profiles.id}> 
                {loading? <LoadingStyle><div></div></LoadingStyle> :
                <>
               <img src={profiles.photo}/>
                <CardInfos>
                      <h3>{profiles.name} {profiles.age}</h3>
                      <p>{profiles.bio}</p>
                </CardInfos>
                </>}
                <ContainerButtons>
                <ButtonNegative onClick={catchProfile}>
                    <Reject/>
                </ButtonNegative>

                <ButtonPositive onClick={() => choosePeople(profiles.id)}>
                    <Heart />
                </ButtonPositive>
                </ContainerButtons>

            </CardProfile>

        </ContainerHome>
    )
}