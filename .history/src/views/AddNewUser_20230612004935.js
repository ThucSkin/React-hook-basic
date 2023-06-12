import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const AddNewUser = () => {
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [email, setEmail] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!fname) {
            alert('Empty first name!')
        }
        if (!lname) alert('Empty last name!');
        if (!email) alert('Empty email!');

        setFname('');
        setLname('');
        setEmail('');
    }

    return (
        <>
            <h3>Add new user</h3>
            <Form onSubmit={handleSubmit} className='form-add'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>First name:</Form.Label>
                    <Form.Control onChange={(e) => setFname(e.target.value)}
                        value={fname} type="text" placeholder="Enter first name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Last name:</Form.Label>
                    <Form.Control onChange={(e) => setLname(e.target.value)}
                        value={lname} type="text" placeholder="Enter last name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control onChange={(e) => setEmail(e.target.value)} value={email}
                        type="email" placeholder="Enter email" />
                </Form.Group>
                <Button variant="primary" type='submit'>
                    Submit
                </Button>
            </Form>
        </>
    );
}

export default AddNewUser;