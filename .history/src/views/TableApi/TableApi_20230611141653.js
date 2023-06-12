import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './TableUser.scss'

function TableApi() {
    const [dataUsers, setDataUsers] = useState([])
    const [loading, setLoading] = useState(true)
    //didmount
    useEffect(() => {
        try {
            // khai báo hàm lấy data
            const fetchData = async () => {
                let res = await axios('https://reqres.in/api/users?page=1');
                let data = res.data.data && res.data ? res.data.data : [];
                setDataUsers(data);
                setLoading(false);
            }
            fetchData();
        } catch (error) {
            alert(error.message);
        }
    }, [])

    return (
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
    );
}

export default TableApi;