import { useParams } from "react-router-dom"

const DetailBlog = () => {
    let { id } = useParams();
    console.log("================================", useParams());
    return (
        <div>cc = {id}</div>
    )
}

export default DetailBlog