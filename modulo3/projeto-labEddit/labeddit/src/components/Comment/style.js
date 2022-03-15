import styled from "styled-components";


export const ContainerComment = styled.div`
display: flex;
align-items: center;
justify-content: flex-start;
flex-direction: column;

width: 70vw;
min-height: 100vh;
max-height: 100%;
margin: 0;
padding: 0;

background-color: #dae0e6;

.divComment{
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    width: 50vw;
    min-height: 100vh;
    max-height: 100%;
    background-color: #ffffff;

}
`
export const Comments = styled.div`
display: flex;
flex-direction: column;
width: 45vw;
margin: 20px;
.user{
        color: #787c7e;
        font-size: 13.5px;
        padding-bottom: 5px;
    }
   
    .body{
        font-size: 18px;
        font-weight: 600;
        padding: 5px 0px 5px 15px;
        word-break: break-all;

        color: #1a1a1b;
    }

.feedback{
display: flex;
align-items: center;
width: 5vw;
height: 3vh;
gap: 5px;
.negative{
    color: #7193ff;
}
.positive{
    color: #ff4500;
}
}
`

export const StyleComment = styled.form`
display: flex;
flex-direction: column;
align-items: flex-end;

background-color: #f6f7f8;
border: 1px solid #cccccc;

margin-bottom: 50px;
button{
    color: #ffffff;

    margin: 5px;
    width: 75px;
    height: 25px;

    background-color: #0079d3;
    border: 1px solid #0079d3;
    border-radius: 5px;

    cursor: pointer;
    &:hover{
        background-color: #0b6eb8;
    }
}

input{
  
        resize: none;

        width: 30vw;
        height: 14vh;

        padding: 10px;

       border: transparent;
       &:focus{
           outline: none;
       }
    
}
`