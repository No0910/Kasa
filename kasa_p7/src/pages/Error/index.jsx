// Création de la page Erreur 404
import { Link } from 'react-router-dom'
import Logo_Error from "../../assets/Logo_Error_404.png"
import "./index.css"


function Error() {
    return (
        <div className="Error_div">
            <img className="Logo_Error_404" src={Logo_Error} alt="Erreur 404"/>
            <h1 className="Error_message">Oups! La page que vous demandez n'existe pas.</h1>
            <Link to="/">Retourner sur la page d'accueil</Link>
        </div>
    )
}
 
export default Error
