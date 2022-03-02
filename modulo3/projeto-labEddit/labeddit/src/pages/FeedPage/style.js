import styled from "styled-components";

export const ContainerFeed = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
height: 100%;
width: 100%;
`
export const ContainerPost = styled.div`
background-color: #dae0e6;
display: flex;
flex-direction: column;
align-items: center;
grid-column: 2/3;
margin-top: 50px;
.btn-pagination{
    display: flex;
    justify-content: space-evenly;

    width: 15vw;
    height: 7vh;
    padding: 1em 0em 1.5em;


  button{
    cursor: pointer;
    width: 3vw;
    background-color: #0079d3;
    border: 1px solid #0079d3;
    color: #dae0e6;
    &:hover{
        text-decoration: underline;
        background-color: #dae0e6;
        color: #0079d3;
    }
  }
}
`

export const StyleCardFeed = styled.div`
display: grid;
grid-template-columns: 2vw 1fr;


width: 34vw;
min-height: 16vh;
max-height:36vh;
margin: 10px;

font-size: 18px;
font-weight: 500;

border-radius: 4px;
border: 1px solid #cccccc ;
background-color: #ffffff;
color: #000;

&:hover{
    border: 1px solid #878a8c ;
    cursor: pointer;
}
`
export const ContainerVotes = styled.div`
display: flex;
flex-direction: column;
align-items: center;

background-color: #f8f9fa;
a{
    img{
        width: 40px;
    }
}
.negative{
    color: #7193ff;
}
.positive{
    color: #ff4500;
}
`

export const InfosPost = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
div{
    padding: 10px 0px 0px 10px;
    .user{
        color: #787c7e;
        font-size: 13.5px;
        padding-bottom: 5px;
    }
    .title{
        font-size: 18px;
        font-weight: 600;
        padding-bottom: 5px;
        word-break: break-all;
    }
    .body{
        color: #1a1a1b;
        margin-right: 5px;
        word-break: break-all;
    }
 
}
.buttons{
    display: flex;
    align-items: baseline;
}
.comments{
    color: #787c7e;
    display: flex;
    align-items: center;

    width: 6vw;
    height: 4vh;

    margin: 0px 0px 5px 10px;

    font-size: 13px;
    font-weight: 600;
    gap: 3px;
    &:hover{
        background-color: #e8e8e8;
    }
}

`
export const StylePublish = styled.form`
display: flex;
flex-direction: column;
align-items: center;

background-color: #ffffff;
border: 1px solid #cccccc;

width: 34vw;
border-radius: 5px;

button{
    color: #ffffff;
    	
    align-self: flex-end;
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

.inputTitle{
        width: 32vw;
        height: 4vh;
        padding: 10px;
        margin: 10px 0px 5px;

        background-color: #ffffff;
        border-radius: 5px;
        border: 1px solid #cccccc;

       &:focus{
            outline: none;
           
       }
}
.inputBody{ 
        width: 32vw;
        height: 10vh;
        padding: 10px;
        margin-bottom: 5px;

        background-color: #ffffff;
        border-radius: 5px;
        border: 1px solid #cccccc;


       &:focus{
            outline: none;
        
       }
}

`
export const LoadingStyle = styled.div`
position: absolute;
top: 35vh;
left: 47.5vw;
border: 6px solid #000;
border-top-color: #0079d3;
width: 50px;
height: 50px;
border-radius: 50%;
animation: is-rotating 1s infinite;
@keyframes is-rotating {
to {
transform: rotate(1turn);
}
   
}
`

export const StyleInput = styled.div`
position: absolute;
top: 10px;
left: 32.7vw;
display: flex;
align-items: center;
input{
    width: 40vw;
    height: 3.5vh;
    padding: 10px 0px 10px 33px;
    background-color: #fff;
    border: 1px solid #cccccc;
    border-radius: 5px;
    &:focus{
        outline: none;
        border: 1px solid #ff4500;
        box-shadow: 2px 3px #f9662f;
    }
    &:hover{
        border: 1px solid #ff4500;
    }
}
`