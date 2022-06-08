import styled from "styled-components";



export const ContainerDetail = styled.div`
width: 82vw;
`
export const ContainerRecommendation = styled.div`
display: flex;
justify-content: flex-start;
align-items: flex-start;
width: 100%;
margin: 0px 50px 70px 0px;
gap: 2em;
overflow-x: auto;
scroll-behavior: smooth;

::-webkit-scrollbar {
   height: 10px;
}
::-webkit-scrollbar {
    width: 10px;
}
::-webkit-scrollbar-track {
    background: #afafaf;
    border-radius: 20px;
}

::-webkit-scrollbar-thumb {
    background-color: #8b8b8b;    
    border-radius: 20px;      
}   

`
export const IframeVideo = styled.iframe`
width: 907px; 
height: 510px;
@media screen and (min-width : 320px) and (max-width: 339px){
    width: 287px; 
    height: 180px;
}
@media screen and (min-width : 340px) and (max-width: 480px){
    width: 307px; 
    height: 200px;
}
@media screen and (min-width : 481px) and (max-width : 561px){
    width: 407px; 
    height: 250px;
}
@media screen and (min-width : 562px) and (max-width : 800px){
    width: 507px; 
    height: 310px;
}
@media screen and (min-width : 801px) and (max-width : 1200px){
    width: 730px; 
    height: 450px;
}
`