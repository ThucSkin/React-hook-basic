import { NavLink } from 'react-router-dom';
import './Nav.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

const Nav = () => {
    return (
        <>
            <div className="topnav mb-4">
                <NavLink to="/" activeclassName="active">Home</NavLink>
                <NavLink to="/countdown">CountDown</NavLink>
                <NavLink to="/todo">Todo App</NavLink>
                <Container>
                    <NavLink to="/blog">Blog App</NavLink>
                </Container>
                <NavLink to="/secrect">Secret</NavLink>
            </div>
        </>
    )
}

export default Nav;