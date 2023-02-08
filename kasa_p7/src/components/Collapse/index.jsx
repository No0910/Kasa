import "../../components/Collapse/index.css";
import { useState } from 'react';


function Collapse ({title, content}) {

    const [dropDown, setDropdown] = useState(false);


    return (
        <div className="Collapse">
            <div className="Collapse_div">
                <h1> {title} </h1>
                <div>Bonjour</div>
            </div>
        </div>
    )
}

export default Collapse
