import styled from "styled-components";

export const ContainerSignup = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

height: 100vh;
width: 100vw;
.divForm{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 25em;
    height: 45vh;

    background-color: #ffffff;
    box-shadow: 1px 1px 3px #878a8c;
    padding-bottom: 20px;

    border-radius: 5px;
    form{
    display: flex;
    flex-direction: column;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 70%;
    gap: 15px;
        h1{
            color: #0079d3;
        }

  input{
        width: 90%;
        padding: 15px;

        border-radius: 5px;
        border: 1px solid #878a8c;

       &:focus{
           outline: none;
            border: 1px solid #0079d3;
            box-shadow: 1px 1px 3px #0b6eb8;
       }
    }
  button{
    color: #ffffff;
        font-size: 15px;

        width: 10em;
        height: 7em;

        background-color: #0079d3;
        border: #0079d3;
        border-radius: 5px;

        cursor: pointer;
        &:hover{
            background-color: #27a0f9;
            border: #27a0f9;

        }
    } 
}

}

`