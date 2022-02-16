import axios from "axios";
import { useEffect, useState } from "react";

export function UseRequestData(url) {
    const [data, setData] = useState(undefined)

    const getData = (url) => {
        axios.get(url)
        .then((res)=>{
            setData(res.data.trips)
        })
        .catch((error)=>{
            alert(error.reponse.data)
        })
    }
    useEffect(() => {
     getData(url)
    },[])

    return data
}