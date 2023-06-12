import { NavLink } from 'react-router-dom';
import './Nav.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const Nav = () => {
    return (
        <>
            <div className="topnav mb-4">
                <NavLink to="/" activeclassName="active">Home</NavLink>
                <NavLink to="/countdown">CountDown</NavLink>
                <NavLink to="/todo">Todo App</NavLink>
                <NavLink to="/blog">Blog App</NavLink>
                <NavLink to="/secrect">Secret</NavLink>
            </div>
        </>
    )
}

export default Nav;