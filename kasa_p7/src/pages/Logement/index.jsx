// Création de la page 'Logement'
import "./index.css";
// import {logementList} from "../../Datas/Logements.json"


function Logement(id, cover, title) {
    /*if(id.logement.lenght ===0){
        return ('ERROR')
    }*/
    return (
        /*<Link to ={`/Logement/${id}`}>
            <div className="Logement_div" key={id}>
            <img className="Logement_img" src={cover} alt={title} />
        </div>
        </Link>*/

        //Condition pour vérifier si l'id est correcte
        //Si l'id du logement n'existe pas : Alors renvoyer à la page d'erreur (if id.logement.lenght === 0 return ...)

        // Titre Logement 
        // Tags (Emplacement géographique)
        // Host : Propriètaire du logement (= Hôte)
        // Rating : Note sur 5 étoiles
        // Description + Equipements
      <p>Ceci est une page en cours</p>
    )
        
}
 
export default Logement
