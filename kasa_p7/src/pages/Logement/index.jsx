// Création de la page 'Logement'
import "./index.css";
import logements from "../../Datas/Logements.json"
import Error from "../../pages/Error"
import { useParams } from "react-router-dom"
//import Caroussel from "./components/Caroussel"



function Logement() {

    //
    const { idLogement } = useParams()

    //
    if (!idLogement) {
            return (
                <> 
                <Error message="Le logement n'existe pas." /> 
                </>
            )
    } 

    const listingArray = logements.filter(el => el.id === idLogement);
    const logement = listingArray.shift();
    //const totalStars = 5;
    //const selectedStars = Number(logement.rating);
  
    /*return ( 
    <section className="Logement_section">

        <div className="div_logement">
            <div className="logement_header">
                <div className="div_logement_caroussel">
                Mettre l'image ici + Flèches
                </div>
                <h1 className="logement_title"> {logement.title} </h1>
                <h2 className="logement_location"> {logement.location} </h2>
                <div className="div_logement_tags"> {logement.tags} </div>
            </div>
            
            <div className="div_host_ratings">
                <div className="logement_host"></div>
                <div className="logement_ratings"></div>
            </div>

            <div className="div_description_equipements">
                <div className="logement_description">
                    Mettre ici dropdown open
                </div>
                <div className="logement_equipements">
                    Mettre ici dropdown open
                </div>
            </div>
        </div>
    </section>
    
    ) */
  

   
   
}
 
export default Logement 


