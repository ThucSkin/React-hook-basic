import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../customize/Fetch";
import { Table } from "react-bootstrap";

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

                    <>
                        <tr>
                            <td>{dataBlogDetail.id}</td>
                            <td>{dataBlogDetail.first_name}</td>
                            <td>{dataBlogDetail.last_name}</td>
                            <td>{dataBlogDetail.email}</td>
                            <td>
                                <img className='img-users' alt="" src={dataBlogDetail.avatar}></img>
                            </td>
                        </tr>
                    </>

                    {loading === true &&
                        <tr>
                            <td colSpan={5}>Loading...</td>
                        </tr>
                    }
                </tbody>
            </Table>
        </>
    )
}

export default DetailBlog