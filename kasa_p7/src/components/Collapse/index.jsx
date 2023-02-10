import "../../components/Collapse/index.css";
import React, { useState } from "react";
import arrow from '../../assets/arrow.png';


const style = {
  collapsed: {
    display: "none"
  },
  expanded: {
    display: "block"
  },
  buttonStyle: {
    display: "block",
    width: "100%"
  }
};

function Collapse (props) {
  
  const [isVisible, setVisible] = useState(props.collapsed);

  const toggleCollapse = () => {
    setVisible(!isVisible);
  };

  return (
    <div className ="Collapse">
      <button style={style.buttonStyle} onClick={() => toggleCollapse(!isVisible)}>
        {isVisible ? "Description" :"Équipements"} 
        <img 
            className={isVisible ? "arrow arrow_up" : "arrow arrow_down"} 
            src={arrow} 
            alt="show content" 
        />
      </button>

      <div className={isVisible ? 'collapse_content' : 'collapse_content_hidden'}>
                    
      </div> 

    </div>
  );
}

export default Collapse;


