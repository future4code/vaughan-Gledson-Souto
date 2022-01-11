import React from 'react';
import './CardPequeno.css'
import styled from 'styled-components';

function CardPequeno(props) {
    const SmallCard = styled.div`
      display: flex;
      align-items: center;
      border: 1px solid black;
      padding: 20px 10px;
      margin-bottom: 10px;
      height: 200px;
    `
    const SmallCardDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`
    return (
        <SmallCard>
            <SmallCardDiv>
                <h4>{props.email}</h4>
                <h4>{props.endereco}</h4>
            </SmallCardDiv>
        </SmallCard>
    )
}

export default CardPequeno;