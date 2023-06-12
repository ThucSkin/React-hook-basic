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
    console.log('<>>>>>>>check data detail', dataBlogDetail)
    return (
        <>
            <button onClick={handleBackData}>Back</button>
            <div className="blog-detail">
                {dataBlogDetail && dataBlogDetail.data &&
                    <>
                        <div className="id">
                            {dataBlogDetail.id}
                        </div>
                        <div className="email">
                            {dataBlogDetail.email}
                        </div>
                    </>
                }
            </div>
        </>
    )
}

export default DetailBlog