import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <>
        <Link to="/">home</Link>
        <Link to="/products">products</Link>
        <Link to="/cart">cart</Link>
        </>
    )
}

export default NavBar