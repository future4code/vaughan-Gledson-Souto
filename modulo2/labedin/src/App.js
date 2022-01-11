import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import styled from 'styled-components';
import Gledson from "./imagens/Gledson.jpeg";

function App() {
  
  const StyleApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  `
  const PageContainer = styled.div`
  width: 40vw;
  margin: 10px 0;
  `
  const Tags = styled.h2`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  `
  
  return (
    <StyleApp>
      <PageContainer>
        <Tags>Dados pessoais</Tags>
        <CardGrande 
          imagem={Gledson}
          nome="Gledson Lucas" 
          descricao="Oi, eu sou Gledson Lucas. Tenho 20 anos, e estou há 1 mês estudando programção, tenho os conhecimentos básicos de html e css. Atualmente estudando react."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </PageContainer>

      <PageContainer>  
      <CardPequeno
        email="Email: gledsonlucas@gmail.com"
        endereco="Endereço: Rua balela, casa 000, Timon MA"

      />
      </PageContainer>

      <PageContainer>
        <Tags>Experiências profissionais</Tags>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="R2 gestão em tecnologia e Vestuario Magazine" 
          descricao="Digitalização de documentos, vendedor (pouca experiência) e estoquista" 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="NASA" 
          descricao="Apontando defeitos." 
        />
      </PageContainer>

      <PageContainer>
        <Tags>Minhas redes sociais</Tags>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </PageContainer>
    </StyleApp>
  );
}

export default App;
