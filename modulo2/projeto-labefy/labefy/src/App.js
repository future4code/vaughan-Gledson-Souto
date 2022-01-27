import React from "react";
import styled from "styled-components";
import CreatePlaylist from "./pages/CreatePlaylist/CreatePlaylist";
import ListPlaylist from "./components/ListPlaylist";

export default class App extends React.Component {
  state = {
    page: "ListPlaylist"
  }

  changeScreen = () => {
    switch (this.state.page) {
      case "CreatePlaylist":
        return <CreatePlaylist />
      case "ListPlaylist":
        return <ListPlaylist />
    }
  }

  render() {


    return (
      <div>
        {this.changeScreen()}
      </div>
    );
  }


}

