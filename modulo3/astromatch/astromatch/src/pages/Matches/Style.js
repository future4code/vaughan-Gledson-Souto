import styled from "styled-components";


export const ListMatches = styled.div`
display: flex;
align-items: center;
gap: 20px;
color: #e90000;
width: 18vw;
margin-top: 25px;
border-radius: 50px;
img{
    height: 60px;
    width: 60px;
    object-fit: cover;
    border-radius: 50%;
    box-shadow: 2px 2px 4px #000;
}
&:hover{
    background-color: #ece6e6;
}
`
export const StyleH3 = styled.h3`
        position: absolute;
        top: 19px;
        left: 230px;
        height: 2vh;
        width: 5vw;
        padding-top: 8px;
        padding-left: 24px;
        color: #f2f2f2;
        border-radius: 20px;
        cursor: pointer;
        &:hover{
            background-color: #9e2f2f;
            font-size: 18px;
            height: 4vh;
            transition: all 500ms ease;
        }   
`
export const ClearButton = styled.div`
position: absolute;
top: 85px;
left: 230px;
h3{
    color: #e90000;
    width: 100px;
    height: 4vh;
    border: 1px solid #e90000;
    text-align: center;
    padding: 5px;
    border-radius: 20px;
    cursor: pointer;
    &:hover{
    background: linear-gradient(53deg, #e90000 5%, #ff2975 100%);
    color: #f2f2f2;
    font-size: 19px;
}
}
`
export const ContainerMatches = styled.div`
    position: absolute;
    top: 150px;
    padding-left: 20px;
`

export const ListVoid = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 20px;
padding-top: 200px;
font-weight: bolder;
font-size: 25px;
width: 23rem;
img{
    height: 30px;
    cursor: pointer;
}
`

