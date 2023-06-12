import { NavLink } from 'react-router-dom';
import './Nav.scss'

const Nav = () => {
    return (
        <><div className="topnav">
            <NavLink className="active" href="/">Home</NavLink>
            <a href="/countdown">CountDown</a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
        </div>
        </>
    )
}

export default Nav;