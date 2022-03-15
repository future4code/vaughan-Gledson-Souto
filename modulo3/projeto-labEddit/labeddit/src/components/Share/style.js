import styled from "styled-components";

export const ContainerShare = styled.body`
  
`
export const Dropdown = styled.div`
position: relative;
background-color: #fff;
.menu li{
list-style-type: none;
}

.menu li a{
color: #000; 
text-decoration:none; 
padding:5px 10px; 
display:block;

cursor: pointer;
}

.menu li  ul{
position:absolute;
left:0px;
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