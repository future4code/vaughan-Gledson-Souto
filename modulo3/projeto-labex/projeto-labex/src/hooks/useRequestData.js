import axios from "axios";
import { useEffect, useState } from "react";

export function UseRequestData(url, initialState) {
    const [data, setData] = useState(initialState)

    const getData = (url) => {
        const token = window.localStorage.getItem(`token`)
        const axiosConfig = { headers: {auth: token} }
        axios.get(url, axiosConfig)
        .then((res)=>{
            setData(res.data)
        })
        .catch((error)=>{
            alert("erro use request", error.response)
        })
    }
    useEffect(() => {
     getData(url)
    },[])

    return [data, getData]
}