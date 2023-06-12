import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../customize/Fetch";

const DetailBlog = () => {
    let { id } = useParams();
    let navigate = useNavigate();

    const { data: dataBlogDetail, loading }
        = useFetch(`https://reqres.in/api/users/${id}`, false);


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