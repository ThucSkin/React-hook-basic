import { Link } from "react-router-dom"

const NotFound404 = () => {
    return (
        <div>
            <h1>404</h1>
            <h5>Not found!</h5>
            <Link to={'/'}>
                <button className="btn btn-primary mt-6">
                    Go to hompage
                </button>
            </Link>
        </div>
    )
}

export default NotFound404