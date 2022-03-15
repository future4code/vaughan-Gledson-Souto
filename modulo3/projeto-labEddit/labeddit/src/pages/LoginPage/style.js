import styled from "styled-components";

export const ContainerLogin = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
align-items: center;
align-content: stretch;
justify-items: center;

height: 100vh;
border: 1px solid #000;

.divLogo{
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 20vw;
    height: 100%;
    
    h1{
        font-weight: 800;
        font-size: 50px;
        color: #ff4a06;
    }
    h2{
        padding-bottom: 130px;
        word-spacing: 5px;
    }
}

.divForm{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    min-width: 23rem;
    max-width: 26vw;
    height: 40vh;

    background-color: #ffffff;
    box-shadow: 1px 1px 3px #878a8c;
    padding-bottom: 20px;

    border-radius: 5px;
}
@media screen and (min-device-width : 481px) and (max-device-width : 800px) {
display: grid;
grid-template-rows: 30em 1fr;
grid-template-columns: 1fr;
align-items: stretch;
}
.divForm{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    max-width: 45rem;
    height: 40vh;

    background-color: #ffffff;
    box-shadow: 1px 1px 3px #878a8c;
    padding-bottom: 20px;

    border-radius: 5px;
}
`
export const StyleForm = styled.form`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

width: 100%;
height: 70%;
gap: 15px;
  input{
        width: 20rem;
        padding: 15px;

        border-radius: 5px;
        border: 1px solid #878a8c;

       &:focus{
            outline: none;
            border: 1px solid #40adff;
            box-shadow: 1px 1px 3px #1b679e;
       }
   }
   .login{
            font-weight: 800;
            font-size: 17px;
            color: #ffffff;

            width: 20rem;
            padding: 10px;

            background-color: #0079d3;
            border: 3px solid #0079d3;
            border-radius: 5px;

            cursor: pointer;

            &:hover{
                background-color: #27a0f9;
                border: 3px solid #27a0f9;

            }
        }
    div{
        display: flex;
        align-items: center;
        justify-content: center;

        border-top: 1px solid #878a8c;
        width: 90%;

        padding-top: 50px;

        .signup{
        color: #ffffff;
        font-size: 15px;
        font-weight: 600;

        width: 10rem;
        height: 5.5vh;

        background-color: #ff4500;
        border: 1px solid #ff4500;
        border-radius: 5px;

        cursor: pointer;

        &:hover{
            background-color: #ff5719;
            border: 1px solid #ff5719;

        }
    } 
    }
    
@media screen and (min-device-width : 481px) and (max-device-width : 800px) {
   width: 70vw;
    input{
        width: 60vw;
        padding: 15px;

        border-radius: 5px;
        border: 1px solid #878a8c;
        font-size: 20px;
       &:focus{
            outline: none;
            border: 1px solid #40adff;
            box-shadow: 1px 1px 3px #1b679e;
       }
   }
   .login{
            font-weight: 800;
            font-size: 20px;
            color: #ffffff;

            width: 60vw;
            padding: 10px;

            background-color: #0079d3;
            border: 3px solid #0079d3;
            border-radius: 5px;

            cursor: pointer;

            &:hover{
                background-color: #27a0f9;
                border: 3px solid #27a0f9;

            }
        }
    div{
        display: flex;
        align-items: center;
        justify-content: center;

        border-top: 1px solid #878a8c;
        width: 90%;

        padding-top: 50px;

        .signup{
        color: #ffffff;
        font-size: 20px;
        font-weight: 600;

        width: 14rem;
        height: 5.5vh;

        background-color: #ff4500;
        border: 1px solid #ff4500;
        border-radius: 5px;

        cursor: pointer;

        &:hover{
            background-color: #ff5719;
            border: 1px solid #ff5719;

        }
    } 
    }
}    
`

