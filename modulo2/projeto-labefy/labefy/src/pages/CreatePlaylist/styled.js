import styled from "styled-components";

export const BodyCreate = styled.body`
display: flex;
`
export const ContainerPrinc = styled.div`
width: 400px;
height: 100vh;
background-color: black;
padding-left: 30px;
box-shadow: 1px 1px 2px 5px #000;
`
export const Header = styled.div`
display: flex;
align-items: center;
`
export const StyleInput = styled.input`
color: white;
border: 0px ;
border-bottom: 1px solid white;
background-color: black;
::placeholder{
    color: white;
}

`

export const StyleImg = styled.img`
width: 120px;
height: 120px;
object-fit: cover;
`

export const StyleLogo = styled.h1`
font-size: 45px;
color: white;
`

export const ButtonHome = styled.button`
margin-top: 40px;
width: 100px;
height: 25px;
cursor: pointer;
background-color: #ff7300;
border: 1px #fe7e02;
&:hover{
        cursor: pointer;
        box-shadow: 1px 1px 1px 1px #ff7300;
        background-color: #ff7300;
    }
`
export const ImagemHome = styled.img`
padding-left: 500px;
`