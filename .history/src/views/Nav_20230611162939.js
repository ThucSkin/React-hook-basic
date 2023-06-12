import { Link } from 'react-router-dom';
import './Nav.scss'

const Nav = () => {
    return (
        <>
            <div className="topnav">
                <a className="active" href="/">Home</a>
                <a href="/countdown">CountDown</a>
                <a href="/todo">Todo App</a>
                <a href="#about">About</a>
            </div>
        </>
    )
}

export default Nav;