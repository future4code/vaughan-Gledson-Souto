import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../constants/urls";

export default function UseRequestData(url, initialState) {
    const [data, setData] = useState(initialState)

    useEffect(() => {
        getData()
       },[url])
   
    const getData = () => {
        const token = localStorage.getItem(`token`)
        const axiosConfig = { headers: {auth: token} }
        axios.get(`${BASE_URL}${url}`, axiosConfig)
        .then((res)=>{
            setData(res.data)
        })
        .catch((error)=>{
            alert("erro use request", error.response)
        })
    }

    return [data, getData]
}