import React from "react";
import styled from "styled-components";
import CreatePlaylist from "./pages/CreatePlaylist/CreatePlaylist";
import ListPlaylist from "./pages/ListPlaylist/ListPlaylist";
import Detail from "./pages/DetailPlaylist/DetailPlaylist";


const CorFundo = styled.body`
  background-color: white;
`
export default class App extends React.Component {
  state = {
    page: "CreatePlaylist",
    detailUrl: "",
    listId: ""
  }

  
  goPageCreate = () =>{
    this.setState({page: "CreatePlaylist"})
  }
  goList = (url) =>{
    this.setState({page: "ListPlaylist", listId: url})
  }

  goDetail = (url) => {
    this.setState({page: "Detail", detailUrl: url})
  }

  changeScreen = () => {
    switch (this.state.page) {
      case "CreatePlaylist":
        return <CreatePlaylist playlist={this.goList} />
      case "ListPlaylist":
        return <ListPlaylist voltar={this.goPageCreate} goDetail={this.goDetail} id={this.goList}/>
      case "Detail":
        return <Detail url={this.state.detailUrl} voltar={this.goList}/>
      default:
        return <CreatePlaylist/>    
    }
  }

  render() {


    return (
      <CorFundo> 
      {this.changeScreen()}
      </CorFundo>
    );
  }


}

