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
      <button style={style.buttonStyle} onClick={() => toggleCollapse(!isVisible)}>
        {title} 
        <img 
            className={isVisible ? "arrow arrow_up" : "arrow arrow_down"} 
            src={arrow} 
            alt="show content" 
        />
      </button>

      <div className={isVisible ? "Collapse_Show_Content" : "Collapse_Hidden_Content"}>
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


