import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'Paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
         <Post
          nomeUsuario={'Gledson'}
          fotoUsuario={'https://picsum.photos/200/150'}
          fotoPost={'https://picsum.photos/200/300'}
        />
         <Post
          nomeUsuario={'Lucas'}
          fotoUsuario={'https://picsum.photos/200/300?grayscale'}
          fotoPost={'https://picsum.photos/200/300/?blur'}
        />
      </MainContainer>
    );
  }
}

export default App;
