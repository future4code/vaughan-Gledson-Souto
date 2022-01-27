import React from "react"
import ListaDeUsuarios from "./components/ListaDeUsuarios"
import CriarUsers from "./components/CriarUsuarios"
import DetalheUsuario from "./components/DetalheUsuario"

export default class App extends React.Component{
  state = {
    page: 1
  }

  irParaOutraPage = () => {
    this.setState({page: this.state.page + 1})
  }
    voltarPage = () => {
    this.setState({page: this.state.page - 1})
  }
  render() {
      const paginas = () => {
        if(this.state.page === 1){
          return <CriarUsers prosseguir={this.irParaOutraPage}/>
        } else if(this.state.page === 2){
          return <ListaDeUsuarios proximo={this.irParaOutraPage} voltar={this.voltarPage}/>
        } else if (this.state.page === 3){
          return <DetalheUsuario  voltar={this.voltarPage}/>
        }

      }
    return(
      <div>
          {paginas()}
      </div>
    )
  }
}

