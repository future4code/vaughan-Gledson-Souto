import styled from "styled-components";

export const ContainerHome = styled.div`
display: flex;
align-items: center;
gap: 30vw;
`
export const ContainerMenu = styled.div`
width: 23rem;
height: 100vh;
background-color: #ffffff;
`
export const UserStyle = styled.div`
display: flex;
align-items: center;
padding-left: 20px;
gap: 20px;
width: 23rem;
height: 8vh;
background: #c92929;
background: linear-gradient(53deg, #c92929 5%, #db575c 100%);
img{
    height: 35px;
    width: 35px;
    border-radius: 50%;
    box-shadow: 1px 1px 5px ;
}
h3{
    color: #f2f2f2;
}
h4{
    color: #f2f2f2;
    padding-left: 100px;
    cursor: pointer;
}
`
export const MenuDetails = styled.div`
display: flex;
justify-content: space-around;
gap: 20px;
padding-top: 10px;
color: #c92929;
h3{
    width: 100px;
    height: 4vh;
    border: 1px solid #c92929;
    text-align: center;
    padding: 5px;
    border-radius: 20px;
    cursor: pointer;
    &:hover{
    background: linear-gradient(53deg, #c92929 5%, #db575c 100%);
    color: #f2f2f2;
    font-size: 19px;
}
}

`

export const CardProfile = styled.div`
height: 70vh;
width: 390px;
position: absolute;
left: 50vw;
top: 10vh;
border-radius: 5px;
background-color: black;
box-shadow: 0px 0px 10px 0px;
img{
    width: 390px;
    height: 60vh;
    border-radius: 5px;
    filter: brightness(80%);
}
`
export const CardInfos = styled.div`
color: #f2f2f2;
display: flex;
flex-direction: column;
width: 23vw;
position: absolute;
top: 480px;
p{
    width: 20vw;
}
h3 {
    width: 23vw;
    font-size: 20px;
}
`
export const InfosHigh = styled.div`
display: flex;
flex-direction: row;
width: 23vw;
`
export const ContainerButtons = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
height: 9vh;
`
export const ButtonStyled = styled.button`
color: #f2f2f2;
height: 7vh;
width: 3.5vw;
border-radius: 40px;
background: linear-gradient(53deg, #c92929 5%, #db575c 100%);
cursor: pointer;
&:hover{
    font-size: 20px;
    font-weight: bolder;
}
`