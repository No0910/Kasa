import "./index.css";
import { Link } from 'react-router-dom';

function Card({id, title, cover}) {

  return (

<ul className="Card_structure">

    <li className="Card_info" key={id}>

        <Link to ={`/Logement/${id}`}>
          <img className="Card_img" src={cover} alt={title} />
          <h2 className="Card_title">{title}</h2>
        </Link>
        
    </li>

</ul>
        
  )}

  export default Card
