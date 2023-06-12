import { Link } from 'react-router-dom';
import './Nav.scss'

const Nav = () => {
    return (
        <>
            <div className="topnav">
                <Link className="active" href="/">Home</Link>
                <Link href="/countdown">CountDown</Link>
                <Link href="/todo">Todo App</Link>
                <Link href="#about">About</Link>
            </div>
        </>
    )
}

export default Nav;