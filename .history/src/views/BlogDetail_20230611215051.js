import { useParams } from "react-router-dom"

const DetailBlog = () => {
    let { id } = useParams();
    return (
        <>
            <div>Back</div>
            <div>cc = {id}</div>
        </>
    )
}

export default DetailBlog