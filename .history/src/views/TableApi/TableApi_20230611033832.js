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
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {dataUsers && dataUsers.length > 0 &&
                    dataUsers.map(item => {
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                    })
                }


            </tbody>
        </Table>
    );
}

export default TableApi;