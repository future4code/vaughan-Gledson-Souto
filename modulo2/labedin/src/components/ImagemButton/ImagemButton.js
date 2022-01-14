import React from 'react';
import './ImagemButton.css'
import styled from 'styled-components';

function ImagemButton(props) {
    const ImagemButt = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    border-radius: 50px;
    width: 200px;
    padding: 15px 30px;
    margin: 10px auto;
  `
  const ImagemButtImg = styled.img`
  width: 30px;
  margin-right: 10px;
`
    return (
        <ImagemButt>
            <ImagemButtImg src={ props.imagem }/>
            <p>{ props.texto }</p>
        </ImagemButt>

    )
}

export default ImagemButton;