import styled from "styled-components";

export const CardPostComment = styled.div`
display: grid;
grid-template-columns: 2vw 1fr;

width: 50vw;
min-height: 20vh;
max-height:36vh;
margin: 10px;

font-size: 18px;
font-weight: 500;

border-radius: 3px;
background-color: #ffffff;
color: #000;
`
export const InfosPostComment = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;

border-bottom: 1px solid #787c7e;
width: 45vw;

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
        word-break: break-all;
    }
 
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
  
}
`

export const VotesComments = styled.div`
display: flex;
flex-direction: column;
align-items: center;

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