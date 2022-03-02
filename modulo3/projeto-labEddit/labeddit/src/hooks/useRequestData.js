import axios from "axios";
import  { useEffect, useState } from "react";
import { BASE_URL } from "../constants/urls";

const UseRequestData = (url,initialState) => {
    const [data, setData] = useState(initialState)
    const [isLoading, setIsLoading]= useState(false)

    const getData = () => {
        setIsLoading(true)
        const token = localStorage.getItem("token")
        const header = {headers: {Authorization: token}}
        axios.get(`${BASE_URL}${url}`, header)
        .then((res)=>{
            setData(res.data)
            setIsLoading(false)
        })
        .catch((err)=>{
            alert(`erro em use Request`, err.response.data)
        })
    }
    useEffect(()=>{
        getData()
    },[url])
    
    return [data, getData, isLoading]
}
export default UseRequestData;