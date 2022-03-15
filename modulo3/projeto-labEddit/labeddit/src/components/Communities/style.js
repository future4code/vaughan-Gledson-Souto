import styled from "styled-components";

export const ContainerUsers = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;

height: 60vh;
width: 20vw;

background-color: #fff;
border: 1px solid #cccccc;
border-radius: 5px;

margin: 5.3vh 0px 0px 10px;
.btn{
    width: 250px;
    height: 4vh;

    margin-top: 10px;

    border-radius: 20px;
    border: 0px;
    
    background-color: #0079d3;
   
    color: #fff;
    cursor: pointer;
    &:hover{
        background-color: #27a0f9;
    }
}
`

export const CardCommunities = styled.div`
display: flex;
flex-direction: column;
width: 100%;
padding: 2px 2rem;
div{
    display: flex;
    width: 100%;
    justify-content: space-between;
    
    img{
    width: 35px;
    height: 35px;
    border-radius: 50%;
    object-fit: cover;
}
.infos{
    display: flex;
    flex-direction: column;
    padding-left: 3px;
    p{
        font-size: 13.5px;
    }
    a{
        text-decoration: transparent;
        color: #000;
        &:hover{
            text-decoration: underline;
        }
    }
}
.button{
    font-size: 14px;
    text-align: center;
    text-decoration: none;
    padding-top: 8px;

    width: 150px;

    border-radius: 20px;
    border: 0px;
    
    background-color: #0079d3;
   
    color: #fff;
    cursor: pointer;
    &:hover{
                background-color: #27a0f9;
            }
}
}


`