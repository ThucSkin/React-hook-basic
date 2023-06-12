import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './TableUser.scss'

function TableApi() {
    const [dataUsers, setDataUsers] = useState([])
    //didmount
    useEffect(() => {
        // khai báo hàm lấy data
        const fetchData = async () => {
            let res = await axios('https://reqres.in/api/users?page=1');
            let data = res.data.data && res.data ? res.data : [];
            setDataUsers(data.data);
        }
        // gọi hàm
        fetchData().catch(console.error);
    }, [])

    return (
        <Table striped bordered hover variant="dark">
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
                {dataUsers && dataUsers.length > 0 &&
                    dataUsers.map(item => {
                        return (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.first_name}</td>
                                <td>{item.last_name}</td>
                                <td>{item.email}</td>
                                <td>
                                    <img className='img-users' src={item.avatar}></img>
                                </td>
                            </tr>
                        )
                    })
                }


            </tbody>
        </Table>
    );
}

export default TableApi;