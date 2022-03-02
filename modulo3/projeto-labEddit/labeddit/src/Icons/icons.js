import styled from "styled-components";
import { ImArrowUp, ImArrowDown } from "react-icons/im"
import { GoComment } from "react-icons/go"
import { SiReddit } from "react-icons/si"
import { IoIosArrowDown } from "react-icons/io"
import { BiExit } from "react-icons/bi"
import { FaUser } from "react-icons/fa"
import { FiSearch } from "react-icons/fi"
import {FaShareSquare} from "react-icons/fa"


export const UserIcon = styled(FaUser)`
font-size: 15px;
object-fit: cover;
font-weight: 600;
color:  #000;
`

export const ArrowUp = styled(ImArrowUp)`
margin-top: 10px;
cursor: pointer;
color: #787c7e;
&:hover{
    color: #ff4500;
    background-color: #e1e2e3;
}
`
export const FullArrowUp = styled(ImArrowUp)`
margin-top: 10px;
cursor: pointer;
color: #ff4500;
&:hover{
    background-color: #e1e2e3;
}
`

export const ArrowDown = styled(ImArrowDown)`
margin-top: 10px;
color: #787c7e;
cursor: pointer;
&:hover{
    color: #7193ff;
    background-color: #e1e2e3;
}
`
export const FullArrowDown = styled(ImArrowDown)`
margin-top: 10px;
color: #7193ff;
cursor: pointer;
&:hover{
    background-color: #e1e2e3;
}
`
export const CommentIcon = styled(GoComment)`
font-size: 20px;
font-weight: 600;
color:  #878a8c;
`
export const RedditIcon = styled(SiReddit)`
padding-left: 20px;
font-size: 50px;
color:  #ff4500;
cursor: pointer;
&:hover{
    font-size: 52px;
}
`

export const IoArrow = styled(IoIosArrowDown)`
font-size: 20px;
font-weight: 600;
color:  #ff4500;
`
export const Search = styled(FiSearch)`
position: absolute;
font-size: 20px;
margin-left: 10px;
font-weight: 600;
color:  #878a8c;
`
export const Exit = styled(BiExit)`
font-size: 20px;
font-weight: 600;
`
export const ShareIcon = styled(FaShareSquare)`
color:  #878a8c;
font-size: 23px;
padding: 0px 5px 5px 0px;

`