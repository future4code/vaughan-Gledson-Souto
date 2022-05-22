import styled from "styled-components";

export const ContainerCarousel = styled.div`
max-width: 85vw;

`
export const CarouselActors = styled.div`
display: flex;
align-items: flex-start;

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
export const CardCast = styled.div`
display: flex;
flex-direction: column;
align-items: center;

margin: 0px 0px 20px 20px;
min-width: 191px;
height: 300px;
background-color: #fff;
box-shadow: 0px 5px 5px #bbbbbb;
border-radius: 5px;


`

export const CardMedia = styled.div`
img{
    width: 180px;
    height: 200px;
    box-shadow: 0px 1px 5px #bbbbbb;
    margin: 5px 0px 0px;
    border-radius: 5PX;
}
`

