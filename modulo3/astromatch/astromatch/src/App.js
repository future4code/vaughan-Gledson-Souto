import {useState} from "react";
import styled from "styled-components";
import Global from "./AppStyle"
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <Global /> 
      <Home />
    </>
  );
}

export default App;
