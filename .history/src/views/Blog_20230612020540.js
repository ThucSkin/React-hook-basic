import useFetch from "../customize/Fetch";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import AddNewUser from "./AddNewUser";

const Blog = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [newData, setNewData] = useState([])

    const { data: dataBlogs, loading }
        = useFetch(`https://reqres.in/api/users?page=2`, false);

    useEffect(() => {
        if (dataBlogs.length > 0 && dataBlogs) {
            let newDataSimple = dataBlogs;
            setNewData(newDataSimple)
        }

    }, [dataBlogs])
    const handleAddNew = (user) => {
        let data = newData
        data.unshift(user)
        setShow(false);
        setNewData(data)
    }
    const deletePost = (user) => {
        let data = newData;
        data = data.filter(user => user.id !== user.id);
        setNewData(data);
    }

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add new user</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddNewUser handleAddNew={handleAddNew} />
                </Modal.Body>
            </Modal>
            <Table striped bordered hover variant="dark" className='mt-4'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Image</th>
                        <th colSpan={2}></th>
                    </tr>
                </thead>
                <tbody>

                    {loading === false && newData && newData.length > 0 &&
                        newData.map(item => {
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
                                        <button onClik={deletePost(item.id)}>
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
        </>
    );
}

export { Blog };
