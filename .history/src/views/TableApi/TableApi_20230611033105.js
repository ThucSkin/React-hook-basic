import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function TableApi() {
    const [dataUsers, setDataUsers] = useState([])
    //didmount
    useEffect(() => {
        // khai báo hàm lấy data
        const fetchData = async () => {
            let res = await axios('https://reqres.in/api/users?page=1');
            let data = res.data && res ? res.data : [];
            setDataUsers(data);
        }
        // gọi hàm
        fetchData().catch(console.error);
    }, [])

    return (
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td colSpan={2}>Larry the Bird</td>
                    <td>@twitter</td>
                </tr>
            </tbody>
        </Table>
    );
}

export default TableApi;