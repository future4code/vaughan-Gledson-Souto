import styled from "styled-components";
import { FaHeart } from "react-icons/fa"
import { MdClose } from "react-icons/md"

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
    gap: 20px;
    width: 23rem;
    height: 8vh;
    background: #e90000;
    background: linear-gradient(53deg, #e90000 5%, #ff2975 100%);
    div{
        display: flex;
        align-items: center;
        color: #f2f2f2;
        margin-left: 20px;
        width: 7rem;
        height: 2vh;
        padding-left: 5px;
        gap: 10px;
        border-radius: 50px;
        font-size: 15px;
        &:hover{
            background-color: #9e2f2f;
            transition: all 500ms ease;
            height: 4vh;
        }
    img{
        height: 25px;
        width: 25px;
        border-radius: 50%;
        box-shadow: 1px 1px 5px #000;
    }
    h3{
        cursor: pointer;
        &:hover{
            font-size: 17px;
        }
    }
    }
`
export const MenuDetails = styled.div`
padding-left: 20px;
padding-top: 10px;
color: #e90000;
h3{
    width: 100px;
    height: 4vh;
    text-align: center;
    padding: 5px;
    border-radius: 20px;
    cursor: pointer;
    background: linear-gradient(53deg, #e90000 5%, #ff2975 100%);
    color: #f2f2f2;
    &:hover{
    border: 1px solid #e90000;
    color: #e90000;
    background: #ffffff;
    transition: all 400ms ease;
}
}
`
export const CardProfile = styled.div`
height: 71vh;
width: 380px;
position: absolute;
left: 50vw;
top: 10vh;
border-radius: 10px;
background-color: #000;
box-shadow: 0px 0px 10px 0px;
img{
    width: 380px;
    height: 61vh;
    border-radius: 10px;
    filter: brightness(70%);
}
`
export const LoadingStyle = styled.div`
height: 576px;
div{
    position: absolute;
    top: 27vh;
    left: 163px;
    border: 6px solid #f2f2f2;
    border-top-color: #e90000;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    animation: is-rotating 1s infinite;
    @keyframes is-rotating {
    to {
    transform: rotate(1turn);
    }
   }
}
`
export const CardInfos = styled.div`
color: #f2f2f2;
width: 380px;
height: 80px;
position: absolute;
top: 500px;
padding-left: 10px;
background: rgb(0,0,0);
background: linear-gradient(0deg, rgba(0,0,0,0.8939950980392157) 26%, rgba(0,0,0,0) 100%);
p{
   padding-top: 10px;
   width: 19vw;
}
h3 {
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
export const ButtonNegative = styled.button`
color: #e90000;
height: 7vh;
width: 3.5vw;
border-radius: 40px;
cursor: pointer;
border: 2px solid;
background-color: #000;
&:hover{
    background-color: #e90000;
    color: #f2f2f2;
    transition: all 300ms ease;
    border: 1px solid #e90000;
}
`
export const Reject = styled(MdClose)`
font-size: 35px;
&:hover{
    font-size: 40px;
    transition: all 200ms ease;
}
`

export const ButtonPositive = styled.button`
color: #008000;
height: 7vh;
width: 3.5vw;
border-radius: 40px;
cursor: pointer;
border: 2px solid;
background-color: #000;
&:hover{
    background-color: #008000;
    color: #f2f2f2;
    transition: all 400ms ease;
    border: 1px solid #008000;
}

`
export const Heart = styled(FaHeart)`
font-size: 30px;
&:hover{
    font-size: 35px;
    color: #f2f2f2;
    transition: all 200ms ease;
}
`
