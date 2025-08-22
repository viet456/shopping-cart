import { Link } from "react-router-dom"

export function Navbar() {
    return (
        <header>
            <Link to='/'>Home</Link>
            <Link to='/cart'>Cart</Link>
        </header>
    )
}