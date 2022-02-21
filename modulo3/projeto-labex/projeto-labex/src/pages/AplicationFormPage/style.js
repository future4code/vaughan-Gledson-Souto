import styled from "styled-components";

export const ContainerForms = styled.form`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 80vh;
h1{
    color: #f2f2f2;
    padding-bottom: 30px;
}
div{
    display: flex;
    justify-content: space-between;
    padding-top: 10px;
    width: 20.5vw;
    .btn{
    font-size: 16px;
    color: #ffffff;
    margin: 10px;
    padding: 13px;
    width: 100px;
    border-radius: 15px;
    border: 2px solid #ffffff;
    background-color: #3f3d56;
    cursor: pointer;
    &:hover{
        color: #000;
        background-color: #ffffff;
        transition: all 600ms ease;
    }
} 
}

`
export const SelectStyle = styled.select`
width: 20.5vw;
height: 6vh;
margin: 10px;
border-radius: 10px;
`

export const InputStyle = styled.input`
width: 20.5vw;
height: 6vh;
margin: 10px;
border-radius: 10px;
border: 1px solid #f2f2f2;
padding-left: 10px;
`
