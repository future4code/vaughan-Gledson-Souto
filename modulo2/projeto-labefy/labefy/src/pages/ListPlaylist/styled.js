import styled from "styled-components";



export const ContainerGeral = styled.body`
background-color: #000;
display: flex;
flex-direction: column;
height: 100vh;
padding: 10px 50px;
width: 30vw;
`
export const CardGeral = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
`
export const CardPlay = styled.div`
color: #000;
width: 200px;
height: 50px;
margin: 5px;
padding: 5px;
background-color: #fe7e02;
display: flex;
justify-content: space-evenly;
align-items: center;
&:hover{
    cursor: pointer;
    box-shadow: 1px 2px 2px 2px #ff7300;
    background-color: #ff7300;
}
`
export const ColorOrange = styled.h1`
color:  white;
padding-left: 10px;
width: 100px;
cursor: pointer;
`

export const ButtonColor = styled.button`
color: black;
height: 50px;
width: 15px;
border: 1px #fe7e02;
background-color: #fe7e02;
border-radius: 10%;
&:hover{
 cursor: pointer;
 box-shadow: 1px 2px 2px  #fe7e02;
}
`
export const ButtoonBack = styled.button`
cursor: pointer;
width: 100px;
margin: 10px;
background-color: #fe7e02;
border: 0px;
`