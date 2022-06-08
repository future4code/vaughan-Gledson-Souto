import styled from "styled-components";
import { mainColor, secudaryColor } from "../../constants/colors";
import Box from '@mui/material/Box';


export const ContainerGenres = styled.div`
width: 100vw;
background-color: ${secudaryColor};

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

`
export const BoxSlogan = styled(Box)`
    display: flex;
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (min-width : 320px) and (max-width : 480px){ 
        justify-content: flex-start;
    }
    @media screen and (min-width : 481px) and (max-width : 636px){ 
        justify-content: flex-start;
    }  
div{
    width: 50%;
    @media screen and (min-width : 320px) and (max-width : 480px){ 
        width: 100%;
    }
    @media screen and (min-width : 481px) and (max-width : 1030px){ 
        width: 100%;
    } 
    p{
        color: ${mainColor};
        font-style: normal;
        font-weight: 700;
        font-size: 48px;
        line-height: 56px;
        text-align: center;
        letter-spacing: -0.005em;

        @media screen and (min-width : 320px) and (max-width : 480px){ 
            font-size: 28px;
            line-height: 35px
        }
        @media screen and (min-width : 481px) and (max-width : 1030px){ 
            font-size: 35px;
            line-height: 56px
        }
    }
}
`
export const BoxGenres = styled(Box)`
display: flex;
align-items: center;
flex-direction: column;

@media screen and (min-width : 320px) and (max-width : 480px){ 
    align-items: flex-start
}
p{
    width: 100%;
    display: flex;
    justify-content: center;
    color: ${mainColor};
    @media screen and (min-width : 320px) and (max-width : 480px){ 
        justify-content: flex-start;
    }
}
div{
    width: 70%;
    
}
`