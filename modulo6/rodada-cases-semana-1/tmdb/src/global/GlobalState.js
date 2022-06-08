import React, { useState } from "react";
import GlobalStateContext from "./GlobalStateContext";

const GlobalState = (props) => {
    const [rating, setRating] = useState()
    const data = {
        rating,
        setRating
    }
    
    return(
        <GlobalStateContext.Provider value={ data }>
        {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState;