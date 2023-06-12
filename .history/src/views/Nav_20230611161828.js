import './Nav.scss'
import { Routes, Route } from 'react-router-dom'
import Todo from '../views/Todo';
import TableApi from '../views/TableApi/TableApi';

const Nav = () => {
    return (
        <><div className="topnav">
            <a className="active" href="/">Home</a>
            <a href="/countdown">CountDown</a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
        </div>
        </>
    )
}

export default Nav;