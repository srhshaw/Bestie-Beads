import { Link } from "react-router-dom"
import './Nav.css'

const Nav = () => {
    return (
        <div className="nav">
            <Link to="/">
                <h2 className="navLink">Home</h2>
            </Link>
            <Link to="/about">
                <h2 className="navLink">About Us</h2>
            </Link>
            <Link to="/pieces">
                <h2 className="navLink">Shop</h2>
            </Link>
            <Link to={`/myactivity`}>
                <h2 className="navLink">My Activity</h2>
            </Link>
        </div>
    )
}

export default Nav