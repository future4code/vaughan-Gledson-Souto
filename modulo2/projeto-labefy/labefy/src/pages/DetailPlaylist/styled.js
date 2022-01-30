import styled from "styled-components";


export const TracksAling = styled.div`
    display: flex;
    width: 500px;
    justify-content: flex-start;
    align-items: center;
    margin: 5px;
    background-color: #000;
`
export const TracksInfos = styled.table`
    color: #fe7e02 ;
    margin: 10px;
`
export const AudioStyle = styled.audio`
&::-webkit-media-controls-panel {
  background-color: #fe7e02;
}
`
export const StyleButoon = styled.button`
    cursor: pointer;
    border-radius: 50%;
    height: 40px;
    width: 40px;
    border: 1px ;
    background-color: #fe7e02;
`

export const ContainerDetail = styled.body`
background-color: #000 ;
height: 100vh;
width: 50vw;
`


export const StyleInput = styled.input`
color: white;
margin: 10px;
border: 0px ;
border-bottom: 1px solid white;
background-color: black;

::placeholder{
    color: white;
}
`

