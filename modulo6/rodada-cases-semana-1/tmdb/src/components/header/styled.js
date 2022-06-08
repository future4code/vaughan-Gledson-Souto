import styled from "styled-components";
import { mainColor, primaryColor } from "../../constants/colors";


export const ContainerHeader = styled.div`
width: 100%;
height: 56px;
background-color: ${primaryColor};

.header{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 56px;
    margin-left: 130px;
    gap: 10px;
    
    p{
        color: ${mainColor};
        font-size: 30px;
        font-weight: bolder;
        cursor: pointer;
    }
    div{
        background-color: ${mainColor};
        padding: 13px 30px;
        border-radius: 20px;
        cursor: pointer;
    }
}
`
