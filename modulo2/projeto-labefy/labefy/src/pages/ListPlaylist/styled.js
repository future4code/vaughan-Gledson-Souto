import styled from "styled-components";

export const CardGeral = styled.div`
     display: flex;
    justify-content: flex-start;
    align-items: center;
`
export const CardPlay = styled.div`
    width: 200px;
    height: 50px;
    margin: 5px;
    padding: 5px;
    background-color:  #fe7e02;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    &:hover{
        cursor: pointer;
        box-shadow: 1px 2px 2px 2px #ff7300;
        background-color: #ff7300;
    }
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
export const ColorOrange = styled.h1`
    color:  #fe7e02;
    width: 100px;
    cursor: pointer;
`
