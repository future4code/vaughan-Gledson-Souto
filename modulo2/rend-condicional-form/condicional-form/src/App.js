import React from "react";
import "./styles.css";
import Secao1 from "./components/etapa1";
import Secao2 from "./components/etapa2";
import Secao3 from "./components/etapa3";
import Secao4 from "./components/ultimaEtapa";


export default class App extends React.Component {
  state ={
    etapas: 1
  };

  irParaEtapa2 = () => {
    this.setState({etapas: this.state.etapas + 1})
  }
  irParaEtapa3 = () => {
    this.setState({etapas: this.state.etapas + 1})
  }
  irParaEtapa4 = () => {
    this.setState({etapas: this.state.etapas + 1})
  }

  render() {
    const renderizarEtapas = () => {
      if(this.state.etapas === 1){
        return < Secao1 Etapa2={this.irParaEtapa2}/>
      } else if (this.state.etapas === 2){
        return < Secao2  Etapa3={this.irParaEtapa2}/>
      } else if (this.state.etapas === 3){
        return < Secao3  Etapa4={this.irParaEtapa2}/>
      } else {
        return < Secao4 />
      }
    }

  return (
    <div className="App">
      {renderizarEtapas()}
    </div>
  );
  }
}
