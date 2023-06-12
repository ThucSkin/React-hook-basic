import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TableUser.scss'
import useFetch from '../../customize/Fetch';
import { Link } from 'react-router-dom';

function TableApi() {
    const { data: dataUsers, loading } = useFetch('https://reqres.in/api/users?page=1', true)

    return (
        <Table striped bordered hover variant="dark" className='mt-4'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th colSpan={2}>Image</th>
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
                                <td>
                                    <button>
                                        <Link to={`/blog/${item.id}`}>Detail</Link>
                                    </button>
                                    <button onClick={() => deletePost(item.id)}>
                                        Delete
                                    </button>
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
    );
}

export default TableApi;