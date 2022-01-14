import React from 'react';
import './CardGrande.css'
import styled from 'styled-components';


function CardGrande(props) {
    const BigCard = styled.div`
        display: flex;
        align-items: center;
        border: 1px solid black;
        padding: 20px 10px;
        margin-bottom: 10px;
        height: 200px;
    `
    const BigCardImg = styled.img`
        width: 70px;
        margin-right: 10px;
        border-radius: 30%;
    `
    const BigCardDiv = styled.div`
         display: flex;
         flex-direction: column;
         justify-items: flex-start;
    `
    
    return (
        <BigCard>
            <BigCardImg src={ props.imagem } />
            <BigCardDiv>
                <h4>{ props.nome }</h4>
                <p>{ props.descricao }</p>
            </BigCardDiv>
        </BigCard>
    )
}

export default CardGrande;