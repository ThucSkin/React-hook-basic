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
                {dataBlogDetail &&
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
            <Table striped bordered hover variant="dark" className='mt-4'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Image</th>
                    </tr>
                </thead>
                <tbody>

                    {loading === false && dataUsers && dataUsers.length > 0 &&
                        dataUsers.map(item => {
                            return (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.first_name}</td>
                                    <td>{item.last_name}</td>
                                    <td>{item.email}</td>
                                    <td>
                                        <img className='img-users' alt="" src={item.avatar}></img>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    {loading === true &&
                        <tr>
                            <td colSpan={5}>Loading...</td>
                        </tr>}
                </tbody>
            </Table>
        </>
    )
}

export default DetailBlog