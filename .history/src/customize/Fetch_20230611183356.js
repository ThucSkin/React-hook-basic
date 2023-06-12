import { useEffect, useState } from "react"
import axios from "axios"

const useFetch = (url, isUserData) => {
    const [dataUsers, setDataUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const [dataBlogs, setDataBlogs] = useState([])

    useEffect(() => {
        const ourRequest = axios.CancelToken.source();

        var fetchData = async () => {
            try {
                let res = await axios.get(url, {
                    cancelToken: ourRequest.token,
                });
                let data = (res.data.data && res.data && isUserData === true) ? res.data.data : [];
                setDataUsers(data);
                setLoading(false);
            } catch (err) {
                if (axios.isCancel(err)) {
                    console.log('request cancelled', err.message);
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
        dataUsers, loading
    }
}

export default useFetch;