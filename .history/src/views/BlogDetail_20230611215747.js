import { useParams, useNavigate } from "react-router-dom"

const DetailBlog = () => {
    let { id } = useParams();
    let history = useNavigate()
    return (
        <>
            <button onClick={() => handleBackData()}>Back</button>
            <div>cc = {id}</div>
        </>
    )
}

export default DetailBlog