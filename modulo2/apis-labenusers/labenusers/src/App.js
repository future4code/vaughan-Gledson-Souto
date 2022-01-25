import React from "react"
import axios from "axios"
import ListaDeUsuarios from "./components/Usuarios"
import CriarUsers from "./components/CriarUsuarios"

export default class App extends React.Component{
  state = {
    page: 1
  }

  irParaOutraPage = () => {
    this.setState({page: this.state.page + 1})
  }
  irParaOutraPage1 = () => {
    this.setState({page: this.state.page - 1})
  }
  render() {
      const renderizarPages = () => {
        if(this.state.page === 1){
          return <CriarUsers prosseguir={this.irParaOutraPage}/>
        } else if(this.state.page === 2){
          return <ListaDeUsuarios voltar={this.irParaOutraPage1}/>
        }
      }
    return(
      <div>
          {renderizarPages()}
      </div>
    )
  }
}