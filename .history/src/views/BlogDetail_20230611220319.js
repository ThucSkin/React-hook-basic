import { useParams, useNavigate } from "react-router-dom"

const DetailBlog = () => {
    let { id } = useParams();
    let navigate = useNavigate();

    const handleBackData = () => {
        navigate('/blog');
    }

    return (
        <>
            <button onClick={handleBackData}>Back</button>
            <div>cc = {id}</div>
        </>
    )
}

export default DetailBlog