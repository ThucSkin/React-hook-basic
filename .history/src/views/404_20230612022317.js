import { Link } from "react-router-dom"

const NotFound404 = () => {
    return (
        <div>
            <h1>404</h1>
            <h5>Not found!</h5>
            <button className="btn btn-primary">
                <Link to={'/'}> Go to hompage</Link>
            </button>
        </div>
    )
}

export default NotFound404