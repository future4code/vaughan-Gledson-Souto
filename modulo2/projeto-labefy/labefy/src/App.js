import React, { createElement } from "react";
import styled, { createGlobalStyle } from "styled-components";
import CreatePlaylist from "./pages/CreatePlaylist/CreatePlaylist";
import ListPlaylist from "./pages/ListPlaylist/ListPlaylist";
import Detail from "./pages/DetailPlaylist/DetailPlaylist";
import Global from "./StyledApp";


export default class App extends React.Component {
  state = {
    page: "CreatePlaylist",
    detailUrl: "",
    listId: ""
  }


  goPageCreate = () => {
    this.setState({ page: "CreatePlaylist" })
  }
  goList = (id) => {
    this.setState({ page: "ListPlaylist", listId: id })
  }

  goDetail = (url) => {
    this.setState({ page: "Detail", detailUrl: url })
  }

  changeScreen = () => {
    switch (this.state.page) {
      case "CreatePlaylist":
        return <CreatePlaylist playlist={this.goList} />
      case "ListPlaylist":
        return <ListPlaylist voltar={this.goPageCreate} goDetail={this.goDetail} id={this.goList} />
      case "Detail":
        return <Detail url={this.state.detailUrl} voltar={this.goList} />
      default:
        return <CreatePlaylist />
    }
  }

  render() {


    return (
      <>
        <Global />
          {this.changeScreen()}
      </>
    );
  }


}

