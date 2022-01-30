import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        background-color:  #fe7e02;
    }
`

export const Add = styled.button`
    background-color:  #fe7e02;
    border: 1px solid #ff7300;
    width: 20px;
    margin: 5px;
    cursor: pointer;
    &:hover{
        cursor: pointer;
        box-shadow: 1px 1px 1px 1px #ff7300;
        background-color: #ff7300;
    }
`