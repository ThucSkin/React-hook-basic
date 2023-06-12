import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url, isUserData) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const ourRequest = axios.CancelToken.source() // <-- 1st step

        async function fetchData() {
            try {
                let res = await axios.get(url, {
                    cancelToken: ourRequest.token, // <-- 2nd step
                })

                let data = (res && res.data) ? res.data.data : []; // true, false
                if (data && data.length > 0 && isUserData === true) {
                    data.map(item => {
                        return item;
                    })
                    data = data.reverse()
                }
                setData(data);
                setIsLoading(false);

            }

            catch (err) {
                if (axios.isCancel(err)) {
                    console.log('Request canceled', err.message);
                } else {
                    setIsLoading(false);
                }

            }
        }

        setTimeout(() => {
            fetchData();
        }, 3000);

        return () => {
            ourRequest.cancel('Operation canceled by the user.') // <-- 3rd step
        }

    }, [url]);

    return {
        data, isLoading
    }

}

export default useFetch;