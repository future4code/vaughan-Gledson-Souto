import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background-color: #EEEEEE;
    }

`

export const Add = styled.button`
    background-color:  #fe7e02;
    border: 1px solid black;
    width: 20px;
    margin: 5px;
    cursor: pointer;
`