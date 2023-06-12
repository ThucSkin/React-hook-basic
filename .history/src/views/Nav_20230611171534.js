import { Link, NavLink } from 'react-router-dom';
import './Nav.scss'

const Nav = () => {
    return (
        <>
            <div className="topnav">
                <NavLink activeclassName="active" to="/">Home</NavLink>
                <NavLink to="/countdown">CountDown</NavLink>
                <NavLink to="/todo">Todo App</NavLink>
                <NavLink to="/secrect">Secret</NavLink>
            </div>
        </>
    )
}

export default Nav;