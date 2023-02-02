import Banner from "../../components/Banner/index";
import Card from "../../components/Card/index"
import "../../pages/Home/index.css"
import logementList from "../../Datas/Logements.json"

function Home() {
  return ( 

  <div className="Home_div">
        <Banner />
        <div className="Cards">
          {logementList.map ((logement, index) => (
            <Card
             key={`${logement.title}-${index}`}
             title={logement.title}
             pictures={logement.pictures}
             cover={logement.cover}
             host={logement.host}
             rating={logement.rating}
             location={logement.location}
             description={logement.description}
             tags={logement.tags}
             equipements={logement.equipements}
             />
            ))}
      </div>     
  </div>
  )
}

export default Home;


