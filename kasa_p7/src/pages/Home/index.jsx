import Banner from "../../components/Banner/index";
import Card from "../../components/Card/index"
import "../../pages/Home/index.css"
import logementList from "../../Datas/Logements.json"
import BannerHome from "../../assets/BannerHome.png"

function Home() {
  return ( 

  <div className="Home_div">
        <Banner 
        img = {BannerHome}
        title = "Chez vous, partout et ailleurs"
        />
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
             id={logement.id}
             />
            ))}
      </div>     
  </div>
  )
}

export default Home;


