import { useEffect, useState } from "react"
import axios from "axios"

const useFetch = (url) => {

    const [dataUsers, setDataUsers] = useState([])
    const [loading, setLoading] = useState(true)

    const { data, isLoading } = useState('https://reqres.in/api/users?page=1')

    useEffect(() => {
        try {
            setTimeout(() => {
                // khai báo hàm lấy data
                const fetchData = async () => {
                    let res = await axios.get(url);
                    let data = res.data.data && res.data ? res.data.data : [];
                    setDataUsers(data);
                    setLoading(false);
                }
                fetchData();
            }, 1000)
        } catch (error) {
            alert(error.message);
        }
    }, []);

    return {
        data, isLoading
    }
}

export default useFetch;