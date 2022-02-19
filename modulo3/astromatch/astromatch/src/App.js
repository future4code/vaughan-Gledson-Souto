import {useState} from "react";
import Global from "./AppStyle"
import Home from "./pages/Home/Home";
import Matches from "./pages/Matches/Matches"

function App(props) {
  const [page, setPage] = useState("Home")

  const goToMatches = () => {
    setPage("Matches")
  }
  const goToHome = () => {
    setPage("Home")
  }
  const changeScren = () => {
    switch (page) {
    case "Home":
      return <Home goToMatches={goToMatches} />
    case "Matches":
      return <Matches goToHome={goToHome}/> 
    default: 
      return <Home/>
  }
 }
  return (
    <>
      <Global /> 
      {changeScren()}
    </>
  );
}

export default App;
