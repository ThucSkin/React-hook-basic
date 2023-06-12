import './Nav.scss'
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";


const Nav = () => {
    return (
        <div className="topnav">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
        </div>

    )
}

export default Nav;