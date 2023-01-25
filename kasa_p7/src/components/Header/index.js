import { Link } from 'react-router-dom'
 
function Header() {
    return (
        <nav>
            <Link to="/">Accueil</Link>
            <Link to="/About">À Propos</Link>
        </nav>
    )
}

export default Header