// Création de la page 'Logement'
import './index.css'
import logements from '../../Datas/Logements.json'
import { NavLink, useParams } from 'react-router-dom'
import greyStar from '../../assets/star_grey.png';
import redStar from '../../assets/star_red.png';

//import Caroussel from "./components/Caroussel"

function Logement() {
  //
  const { idLogement } = useParams()

  // Condition si l'id du logement ne correspond pas
  if (!idLogement) {
    return (
      <>
        <NavLink replace to="../../pages/Error" />
      </>
    )
  }

  // Récupération des logements avec la méthode filter() + la méthode shift()
  const listingArray = logements.filter((el) => el.id === idLogement)
  const logement = listingArray.shift()

  // Récupération des notations logement avec étoiles
  const ratingStars = logement.rating;

  //const totalStars = 5;
  //const selectedStars = Number(logement.rating);

  return (
    <main className="Logement_main">
      <div className="div_logement">

            <div className="logement_content">

                  <div className="logement_content_infos">
                      <div className="logement_content_title_location">
                          <h1 className="logement_title"> {logement.title} </h1>
                          <p className="logement_location"> {logement.location} </p>
                      </div>
                      <div className="logement_tag">
                          {logement.tags.map((tag, index) => {
                              return (
                                  <button key={index}>{tag}</button>
                              )
                          })}
                      </div> 
                  </div> 
          
                  <div className="logement_content_host">
                
                      <div className="logement_content_host_name">
                          <p>{logement.host.name}</p>
                          <img src={logement.host.picture} alt="Hôte du logement"/>
                      </div>

                      <div className="logement_content_host_stars">
                          {[...Array(5)].map((star, index) => {
                            const ratingValue = index + 1;
                            return (
                              <img key={index} src={ratingValue <= ratingStars ? redStar : greyStar} alt="star" />
                            )
                          })}
                      </div>

                  </div>   
            </div>

              
               

      </div>
    </main>

  )
}

export default Logement
