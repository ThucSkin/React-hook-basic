import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const AddNewUser = () => {
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [email, setEmail] = useState('')

    const handleSubmit = () => {

        console.log(fname, lname, email);
    }

    return (
        <>
            <h3>Add new user</h3>
            <Form onSubmit={handleSubmit} className='form-add'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>First name:</Form.Label>
                    <Form.Control onChange={(e) => setFname(e.target.value)}
                        value={fname} type="text" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Last name:</Form.Label>
                    <Form.Control onChange={(e) => setLname(e.target.value)}
                        value={lname} type="text" placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control onChange={(e) => setEmail(e.target.value)} value={email}
                        type="email" placeholder="Password" />
                </Form.Group>
                <Button variant="primary">
                    Submit
                </Button>
            </Form>
        </>
    );
}

export default AddNewUser;