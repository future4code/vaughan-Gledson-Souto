import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../constants/urls";

const UseRequestData = (url,initialState) => {
    const [data, setData] = useState(initialState)

    useEffect(()=>{
        getData()
    },[url])

    const getData = () => {
        const token = localStorage.getItem("token")
        const header = {headers: {Authorization: token}}
        axios.get(`${BASE_URL}${url}`, header)
        .then((res)=>{
            setData(res.data)
            console.log(res)
        })
        .catch((err)=>{
            alert(`erro em use Request`, err.response.data)
        })
    }
    
    return [data, getData]
}
export default UseRequestData;