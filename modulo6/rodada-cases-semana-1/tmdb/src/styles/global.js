import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  body {
::-webkit-scrollbar {
    display: none;
}

::-webkit-scrollbar-track {
    background: #fff;
    border-radius: 20px;
}

::-webkit-scrollbar-thumb {
    background-color: #8b8b8b;    
    border-radius: 20px;       
}
}
`