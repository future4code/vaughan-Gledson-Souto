import './App.css';
import React from 'react'

class App extends React.Component {
  state = {
    mensagens: [],

    inputUsuario: "",
    inputMensagem: "",
  }

  adicionarMensagem = (() => {
    const novaMensagem = {
      usuario: this.state.inputUsuario,
      mensagem: this.state.inputMensagem
    }
    const novasMensagens = [...this.state.mensagens, novaMensagem]

    this.setState({ mensagens: novasMensagens })
    this.setState({ inputMensagem: "" })


  });

  onChangeInputUsuario = (event) => {
    this.setState({ inputUsuario: event.target.value })
  }
  onChangeInputMensagem = (event) => {
    this.setState({ inputMensagem: event.target.value })
  }

  render() {
    const listaDeMensagens = this.state.mensagens.map((chat) => {
      return (
        <div className='chat-geral'>
          <strong>
            <p className='chat-usuario'>
              {chat.usuario}:
            </p>
          </strong>
          <p className='chat-mensagem'>
            {chat.mensagem}
          </p>
        </div>
      );
    });

    return (
      <div className='principal'>

        <div className='main'>

          <div className='mensagens'>
            {listaDeMensagens}
          </div>

          <div className='inputes'>
            
            <input id='botao-usuario'
              value={this.state.inputUsuario}
              onChange={this.onChangeInputUsuario}
              placeholder={"nome"}
            />
            <input id='botao-mensagem'
              value={this.state.inputMensagem}
              onChange={this.onChangeInputMensagem}
              placeholder={"Mensagem"}
            />
            <button id='botao-enviar'
              onClick={this.adicionarMensagem}>Enviar</button>
          </div>
        </div>
      </div>
    );

  }

}

export default App;
