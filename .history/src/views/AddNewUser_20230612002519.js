import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const AddNewUser = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    return (
        <>
            <h3>Add new user</h3>
            <Form className='form-add'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address:</Form.Label>
                    <Form.Control onChange={(e) => setTitle(e.target.value)} value={title} type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>First Name:</Form.Label>
                    <Form.Control type="text" placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>last Name:</Form.Label>
                    <Form.Control type="text" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </>
    );
}

export default AddNewUser;