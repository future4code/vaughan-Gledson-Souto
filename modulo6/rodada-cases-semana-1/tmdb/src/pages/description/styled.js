import styled from "styled-components";
import { secudaryColor } from "../../constants/colors";
import Box from '@mui/material/Box';

export const ContainerDescription = styled.div`
background-color: #f3f3f3;
width: 100%;
height: 100%;
`
export const ContainerPoster = styled.div`
width: 100%;
height: 34.5rem;
background-color: ${secudaryColor};


display: grid;
grid-template-columns: 34rem 1fr;
justify-items: stretch;
@media screen and (min-width : 320px) and (max-width : 999px){
    height: auto;
}
@media screen and (min-width : 320px) and (max-width : 550px){
    grid-template-columns: 1fr;
    justify-items: center;
}
@media screen and (min-width : 550px) and (max-width : 683px){
    grid-template-columns: 17rem 1fr;
}
@media screen and (min-width :  683px) and (max-width : 800px){
    grid-template-columns: 20rem 1fr;
}
@media screen and (min-width : 800px) and (max-width : 999px){
    grid-template-columns: 20rem 1fr;
}
@media screen and (min-width : 1000px) and (max-width : 1063px){
    grid-template-columns: 22rem 1fr;
}
@media screen and (min-width : 1063px) and (max-width : 1178px){
    grid-template-columns: 25rem 1fr;
}

div{ 
    .cardImg{
        @media screen and (min-width : 320px) and (max-width : 530px){
            width: 200px;
            margin: 50px 0px 20px;
        }
        @media screen and (min-width : 530px) and (max-width : 683px){
            width: 200px;
            margin: 100px 0px 0px 10px;
        }
        @media screen and (min-width : 683px) and (max-width : 800px){
            width: 250px;
            margin: 70px 0px 0px 40px;
        }
        @media screen and (min-width : 800px) and (max-width : 999px){
            width: 300px;
            margin: 70px 0px 0px 10px;
        }
        @media screen and (min-width : 1000px) and (max-width : 1063px){
            width: 300px;
            margin: 70px 0px 0px 40px;
        }
        @media screen and (min-width : 1063px) and (max-width : 1178px){
            width: 320px;
            margin: 70px 0px 0px 40px;
        }
    }
}
`

export const BoxInfos = styled(Box)`
margin-top: 70px;
width: 60%;
gap: 0.5em;

@media screen and (min-width : 320px) and (max-width : 397px){
    width: 97%;
    margin-left: 20px;
}
@media screen and (min-width : 390px) and (max-width : 680px){
    width: 97%;
    font-size: 15px;
    margin-left: 10px;
}
@media screen and (min-width : 681px) and (max-width : 1149px){
    width: 97%;
}
@media screen and (min-width : 1150px) and (max-width : 1194px){
    width: 97%;
    font-size: 15px;
}
@media screen and (min-width : 1195px) and (max-width : 1585px){
    width: 97%;
}

`

export const ContainerCarousel = styled.div`
margin-top: 12rem;
width: 100%;
display: flex;
justify-content: center;
`
export const ContainerDetail = styled.div`
margin-top: 50px;
width: 100%;
display: flex;
justify-content: center;

`