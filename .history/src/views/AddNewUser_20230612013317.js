import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

const AddNewUser = () => {
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [email, setEmail] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!fname) {
            alert('Empty first name!')
            return
        }
        if (!lname) {
            alert('Empty last name!');
            return
        }
        if (!email) {
            alert('Empty email!');
            return
        }
        let data = {
            fname,
            lname,
            email,
            id: Math.floor(Math.random() * 10000) + 1,
        }
        let res = await axios.post(`https://reqres.in/api/users`, data);

        alert('Add user successfully');
        setFname('');
        setLname('');
        setEmail('');
    }

    return (
        <>
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
