import { Link } from 'react-router-dom';
import './Nav.scss'

const Nav = () => {
    return (
        <>
            <div className="topnav">
                <Link className="active" to="/">Home</Link>
                <Link to="/countdown">CountDown</Link>
                <Link to="/todo">Todo App</Link>
                <Link to="/secrect">Secret</Link>
            </div>
        </>
    )
}

export default Nav;