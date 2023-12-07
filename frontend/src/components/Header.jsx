import { Link } from "react-router-dom"

const Header = () => {
    return(
        <div className = "header">
            <div className="bizName">
                <h1>Bestie Beads</h1>
            </div>
            <div className="cartIcon">
                <Link to ="/cart"><i className="fa-solid fa-cart-shopping fa-xl"></i></Link>
            </div>
        </div>
    )
}

export default Header