import styled from "styled-components";


export const ContainerHome = styled.div`
display: flex;
@media screen and (max-device-width: 480px){
   display: flex;
   flex-direction: column;
}
`
export const StyleImg = styled.div`
display: flex;
flex-direction: column;
justify-content: end;
height: 100vh;
right: 0;
img{
    height: 90vh;
}

`
export const DivButton = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
width: 50vw;
button{
    font-size: 16px;
    color: #ffffff;
    margin: 20px;
    padding: 25px;
    width: 12vw;
    border-radius: 20px;
    border: 2px solid #ffffff;
    background-color: transparent;
    cursor: pointer;
    &:hover{
        font-size: 17px;
        -webkit-animation: shadow-drop-center 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	    animation: shadow-drop-center 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
        color: #000;
        background-color: #ffffff;
        transition: all 600ms ease;
    }
}
img{
    width: 17vw;
    object-fit: cover;
}
@-webkit-keyframes shadow-drop-center {
  0% {
    -webkit-box-shadow: 0 0 0 0 #f2f2f2;
            box-shadow: 0 0 0 0 #f2f2f2;
  }
  100% {
    -webkit-box-shadow: 0 0 20px 0px #f2f2f2;
            box-shadow: 0 0 20px 0px #f2f2f2;
  }
}
@keyframes shadow-drop-center {
  0% {
    -webkit-box-shadow: 0 0 0 0 #f2f2f2;
            box-shadow: 0 0 0 0 #f2f2f2;
  }
  100% {
    -webkit-box-shadow: 0 0 20px 0px #f2f2f2;
            box-shadow: 0 0 20px 0px #f2f2f2;
  }
}
`