import { useEffect, useState } from "react"
import axios from "axios"

const useFetch = (url) => {
    const [dataUsers, setDataUsers] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const ourRequest = axios.CancelToken.source()
        try {
            var fetchData = async () => {
                let res = await axios.get(url, {
                    cancelToken: ourRequest.token,
                });
                let data = res.data.data && res.data ? res.data.data : [];
                setDataUsers(data);
                setLoading(false);
            }
        } catch (error) {
            alert(error.message);
        }
        setTimeout(() => {
            fetchData();
        }, 1000)
        return () => {
            ourRequest.cancel();
        }
    }, [url]);

    return {
        dataUsers, loading
    }
}

export default useFetch;