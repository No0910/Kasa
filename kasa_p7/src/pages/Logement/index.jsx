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

  //
  if (!idLogement) {
    return (
      <>
        <NavLink replace to="../../pages/Error" />
      </>
    )
  }

  const listingArray = logements.filter((el) => el.id === idLogement)
  const logement = listingArray.shift()
  //const totalStars = 5;
  //const selectedStars = Number(logement.rating);
  const ratingStars = logement.rating;

  return (
    <main className="Logement_main">
      <div className="div_logement">
            <div className="logement_content">

                    <div className="logement_content_infos">
                        <h1 className="logement_title"> {logement.title} </h1>
                        <p className="logement_location"> {logement.location} </p>
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
							<img src={logement.host.picture} alt="Hôte du logement" />
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

                <div className="logement_collapse">
					<div className="logement_collapse_description">
                       {logement.description}
                        Mettre ici menu déroulant composant Collapse 'description
					</div>
					<div className="logement_collapse_equipements">
                       {logement.equipements}
						Mettre ici menu déroulant composant Collapse 'équipements'
					</div>	
				</div>
      </div>
    </main>

  )
}

export default Logement
