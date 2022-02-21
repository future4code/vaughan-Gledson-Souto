import styled from "styled-components";

export const ContainerLogin = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
width: 100vw;
height: 100vh;
h1{
    color: #f2f2f2;
}
div{
    display: flex;
    justify-content: space-evenly;
    padding-top: 20px;
    button{
    font-size: 16px;
    color: #000;
    padding: 10px;
    width: 5vw;
    border-radius: 20px;
    border: 2px solid #ffffff;
    background-color: #f2f2f2;
    cursor: pointer;
    &:hover{
        background-color: #ffffff;
    }
    }
}
`

export const FormStyle = styled.form`
display: flex;
flex-direction: column;
`
