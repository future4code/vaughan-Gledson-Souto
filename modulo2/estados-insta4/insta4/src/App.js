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
  state = {
    posts: [
      {
        nomeUsuario: "Paulinha",
        fotoUsuario: 'https://picsum.photos/50/50',
        fotoPost: 'https://picsum.photos/200/150'
      },
      {
        nomeUsuario: "Gledson",
        fotoUsuario: 'https://picsum.photos/100/100',
        fotoPost: 'https://picsum.photos/150/150'
      },
      {
        nomeUsuario: "Lucas",
        fotoUsuario: 'https://picsum.photos/150/150',
        fotoPost: 'https://picsum.photos/250/150'
      }
    ],

    inputUsuario: "",
    inputFotoUsuario: "",
    inputPost: ""

  };

  adicionaPessoas = () => {
    const novosPosts = {
      nomeUsuario: this.state.inputUsuario,
      fotoUsuario: this.state.inputFotoUsuario,
      fotoPost: this.state.inputPost
    }
    const publicacoes = [...this.state.posts, novosPosts]

    this.setState({ posts: publicacoes })
  };


  onChangeInputUsuario = (event) => {

    this.setState({ inputUsuario: event.target.value });
  };


  onChangeInputFotoUsuario = (event) => {

    this.setState({ inputFotoUsuario: event.target.value });
  };


  onChangeInputPost = (event) => {

    this.setState({ inputPost: event.target.value });
  };



  render() {
    const listasDePosts = this.state.posts.map((publicacao) => {
      return (
        <Post
          nomeUsuario={publicacao.nomeUsuario}
          fotoPost={publicacao.fotoUsuario}
          fotoUsuario={publicacao.fotoPost}
        />
      );

    });
    return (
      <MainContainer>
        <div>
          <input
            value={this.state.inputUsuario}
            onChange={this.onChangeInputUsuario}
            placeholder='Seu nome'
          />
          <input
            value={this.state.inputFotoUsuario}
            onChange={this.onChangeInputFotoUsuario}
            placeholder='Sua foto'
          />
          <input
            value={this.state.inputPost}
            onChange={this.onChangeInputPost}
            placeholder='Sua postagem'
          />
          <button onClick={this.adicionaPessoas}>Adicionar</button>
        </div>

        <div>
          {listasDePosts}
        </div>

      </MainContainer>
    );
  }
}

export default App;
