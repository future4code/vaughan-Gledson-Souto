import styled from "styled-components"
import { primaryColor } from "../../constants/colors"

export const Loading = () => {

    const LoadingStyle = styled.div`
        position: absolute;
        top: 90vh;
        left: 49vw;
        border: 6px solid #000;
        border-top-color: ${primaryColor};
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
    return (
        <LoadingStyle>
        </LoadingStyle>
    )
}