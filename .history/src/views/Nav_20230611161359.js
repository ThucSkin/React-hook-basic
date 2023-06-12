import './Nav.scss'
import { Routes, Route } from 'react-router-dom'

const Nav = () => {
    return (
        <><div className="topnav">
            <a className="active" href="#home">Home</a>
            <a href="#news">News</a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
        </div><Routes>
                <Route></Route>
            </Routes></>


    )
}

export default Nav;