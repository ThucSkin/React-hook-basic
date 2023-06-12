import { useParams, useHistory } from "react-router-dom"

const DetailBlog = () => {
    let { id } = useParams();
    let useHistory = useHistory()
    return (
        <>
            <button>Back</button>
            <div>cc = {id}</div>
        </>
    )
}

export default DetailBlog