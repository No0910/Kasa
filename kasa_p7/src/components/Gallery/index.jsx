import React, { useState, useEffect } from 'react';
import './index.css'
import prevArrow from '../../assets/prev_arrow.png'
import nextArrow from '../../assets/next_arrow.png'

const Gallery = ({ items }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex(index === items.length - 1 ? 0 : index + 1);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [index, items.length]);

  const handleNext = () => {
    setIndex(index === items.length - 1 ? 0 : index + 1);
  };

  const handlePrev = () => {
    setIndex(index === 0 ? items.length - 1 : index - 1);
  };

  return (
    <div className='container-gallery'>
      <div className="gallery-item">
        <img className='img_gallery' src={items[index]} alt="" />
        <div className="gallery-number">{index + 1}/{items.length}</div>
      </div>
      <div className='gallery-arrows'>
        <div className='container-arrows'>
          <button className="gallery-button-back" onClick={handlePrev}><img className='arrow' src={prevArrow} alt="prev arrow button" /></button>
        </div>
        <div className='container-arrows'>
          <button className="gallery-button-forward" onClick={handleNext}><img className='arrow' src={nextArrow} alt="next arrow button" /></button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;