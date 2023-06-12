import { useEffect, useState } from "react"
import axios from "axios"

const useFetch = (url, isUserData) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const ourRequest = axios.CancelToken.source() // <-- 1st step

        async function fetchData() {
            try {
                let res = await axios.get(url, {
                    cancelToken: ourRequest.token, // <-- 2nd step
                })
                let data = (res && res.data) ? res.data : []; // true, false
                setData(data);
                setLoading(false);
            }
            catch (err) {
                if (axios.isCancel(err)) {
                    console.log('Request canceled', err.message);
                } else {
                    setLoading(false);
                }

            }
        }
        setTimeout(() => {
            fetchData();
        }, 1000)
        return () => {
            ourRequest.cancel();
        }
    }, [url]);

    return {
        data, loading
    }
}

export default useFetch;