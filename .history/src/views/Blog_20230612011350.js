import useFetch from "../customize/Fetch";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import AddNewUser from "./AddNewUser";

const Blog = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { data: dataBlogs, loading }
        = useFetch(`https://reqres.in/api/users?page=2`, false);
    let newData = [];

    if (dataBlogs.length > 0 && dataBlogs) {
        newData = dataBlogs;
    }

    return (
        <>
            <>
                <Button variant="primary" onClick={handleShow}>
                    Launch demo modal
                </Button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add new user</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <AddNewUser />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
            <button>
                <Link to={'/add/user'} >Add new blog</Link>
            </button>
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
