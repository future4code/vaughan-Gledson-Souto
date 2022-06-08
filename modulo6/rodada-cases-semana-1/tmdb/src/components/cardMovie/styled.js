import styled from "styled-components";

export const ContainerCardMovie = styled.div`
margin: 20px 0px 0px;
width: 100%;

display: grid;
grid-template-columns: repeat(6,  230px);
justify-content: center;
justify-items: center;

@media screen and (min-width : 320px) and (max-width : 660px){ 
    grid-template-columns: repeat(2,  200px);
}
@media screen and (min-width : 661px) and (max-width : 999px) {
    grid-template-columns: repeat(3,  230px);
}
@media screen and (min-width : 1000px) and (max-width : 1360px){
    grid-template-columns: repeat(4,  220px);
}
`