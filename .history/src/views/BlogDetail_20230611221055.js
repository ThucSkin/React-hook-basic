import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../customize/Fetch";

const DetailBlog = () => {
    let { id } = useParams();
    let navigate = useNavigate();

    const { data: dataUsers, loading }
        = useFetch('https://reqres.in/api/users?page=1', true)


    const handleBackData = () => {
        navigate(-1);
    }

    return (
        <>
            <button onClick={handleBackData}>Back</button>
            <div>cc = {id}</div>
        </>
    )
}

export default DetailBlog