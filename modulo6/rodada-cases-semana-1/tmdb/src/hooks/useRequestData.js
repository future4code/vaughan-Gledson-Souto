import { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../constants/urls'

const useRequestData = (initialState, url) => {
    const [data, setData] = useState(initialState)
    const [loading, setLoading] = useState(false)
    
    useEffect(() => {
        setLoading(true)
        axios.get(`${BASE_URL}${url}`)
            .then((response) => {
                setLoading(false)
                setData(response.data)
            })
            .catch((error) => {
                alert(error.message)
            })
    }, [url])

    return [data, loading]
}
export default useRequestData

