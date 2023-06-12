import { useEffect, useState } from "react"
import axios from "axios"

const useFetch = (url) => {
    const [dataUsers, setDataUsers] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const ourRequest = axios.CancelToken.source()
        try {
            const fetchData = async () => {
                let res = await axios.get(url, {
                    cancelToken: ourRequest.token,
                });
                let data = res.data.data && res.data ? res.data.data : [];
                setDataUsers(data);
                setLoading(false);
            }
            setTimeout(() => {
                fetchData();
            }, 1000)
        } catch (error) {
            alert(error.message);
        }
        return () => {
            ourRequest.cancel();
        }
    }, [url]);

    return {
        dataUsers, loading
    }
}

export default useFetch;