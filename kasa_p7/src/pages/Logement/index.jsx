// Création de la page 'Logement'
import './index.css'
import logements from '../../Datas/Logements.json'
import Error from "../../pages/Error"
import {useParams } from 'react-router-dom'
import greyStar from '../../assets/star_grey.png';
import redStar from '../../assets/star_red.png';
import Collapse from '../../components/Collapse';
import Gallery from '../../components/Gallery';

function Logement() {
  // Récupération des data logements avec useParams()
  const { idLogement } = useParams()

  // Condition si l'id du logement ne correspond pas
  if (!idLogement) {
    return (
        <Error />
    )
  }

  // Condition si l'id du logement ne correspond pas
  let logementsIds = logements.reduce((acc, curVal) => acc.concat(curVal.id), []);

  if(logementsIds.includes(idLogement) === false) {
      return (
        <> 
          <Error /> 
        </>
      )
    }


  // Récupération des logements avec la méthode filter() + la méthode shift()
  const listingArray = logements.filter((el) => el.id === idLogement)
  const logement = listingArray.shift()

  // Récupération des notations logement avec étoiles
  const ratingStars = logement.rating;

  // Récupération des valeurs de l'item collapse 'Description' 
  const description = logement.description;

  // Récupération des valeurs de l'item collapse 'Equipements'
  const equipments = logement.equipments;

  // Récupération des noms et prénoms des hôtes
  const [firstname, lastname] = logement.host.name.split(' ');

  return (
    <main className="Logement_main">
      <div className="div_logement">

        <Gallery 
        items={logement.pictures}
        />


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
                         <div className="logement_content_host_firstname_lastname">
                           <p> { firstname } </p>
                           <p> { lastname } </p>
                         </div>

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

          <div className='logement_collapse'>

            <div className='collapse_container'>
                <Collapse 
                title= "Description"
                content= {description}
                />
            </div>

            <div className='collapse_container'>
                <Collapse 
                title="Équipements"
                content={
                  <ul>{equipments.map((equipment) => 
                    <li key={equipment}>{equipment}</li>)}
                  </ul>}
                />
            </div>
          
          </div>
      </div>
    </main>

  )
}

export default Logement
