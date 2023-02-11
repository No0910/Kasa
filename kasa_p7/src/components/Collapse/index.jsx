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

function Collapse ({title, content}) {
  
  const [isVisible, setVisible] = useState(false);

  const toggleCollapse = () => {
    setVisible(!isVisible);
  };

  return (
    <div className ="Collapse">

        <button className="Collapse_title" style={style.buttonStyle} onClick={() => toggleCollapse()}>
          {title} 
          <img 
              className={isVisible ? "arrow arrow_up" : "arrow arrow_down"} 
              src={arrow} 
              alt="show content" 
          />
        </button>

        <div className="Collapse_content" style={isVisible ? style.expanded : style.collapsed} aria-expanded={isVisible}>
                {Array.isArray(content) ? content.map((item, index) => {
                    return (
                        <p key={index}>{item}</p>
                    )
                }) : content
                }
        </div> 
    </div>
    
  );
}

export default Collapse;