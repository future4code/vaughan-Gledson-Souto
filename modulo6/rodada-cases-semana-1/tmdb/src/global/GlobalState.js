import React, { useState } from "react";
import GlobalStateContext from "./GlobalStateContext";

const GlobalState = (props) => {
    const [id, setId] = useState()
    const data = {
        id,
        setId
    }
    
    return(
        <GlobalStateContext.Provider value={ data }>
        {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState;