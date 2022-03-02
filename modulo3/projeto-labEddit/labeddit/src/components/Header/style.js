import styled from "styled-components";

export const HeaderStyle = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
img{
    width: 50px;
    height: 40px;
}
h2{
    margin: 0px 20px 0px 10px;
    color: #000;
}
width: 100%;
height: 6vh;
background-color: #fff;
.home{
    display: flex;
    align-items: center;
}
border-bottom: 1px solid #cccccc;

`
export const StyleInput = styled.div`
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
export const Dropdown = styled.div`

.menu li{
list-style-type: none;
}

.menu li a{
color: #000; 
text-decoration:none; 
padding:5px 10px; 
display:block;
&:hover{
    color:#fff;
}
cursor: pointer;
}

.menu li  ul{
position:absolute;
right:0px;
background-color:#fff;
display:none;
}
.menu li:hover ul, .menu li.over ul{
    display:block; 
    border: 1px solid #cccccc; 
}
.menu li ul li a{
    &:hover{
        background: #ff4500;
    }
}

.menu li ul li{
display:block;
width:150px;
}
`
