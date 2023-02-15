import React, { useState, useEffect } from 'react';
import './index.css'
import prevArrow from '../../assets/prev_arrow.png'
import nextArrow from '../../assets/next_arrow.png'

const Gallery = ({ items }) => {
  // Définition de la valeur initiale du tableau
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Automatisation du changement d'images: Toutes les 3 secondes
    const intervalId = setInterval(() => {
      //Fonction setIndex, Quand on arrive à l'index de fin de tabeau, on recommence à 0, sinon on itère +1
      setIndex(index === items.length - 1 ? 0 : index + 1);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [index, items.length]);

  const handleNext = () => {
    // Affichage de la prochaine image au clic: Toutes les 3 secondes
    setIndex(index === items.length - 1 ? 0 : index + 1);
  };

  const handlePrev = () => {
    // Affichage de la précédente image au clic: Toutes les 3 secondes
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
          <button className="gallery-button-back" onClick={handlePrev}><img className='arrowGallery' src={prevArrow} alt="prev arrow button" /></button>
        </div>
        <div className='container-arrows'>
          <button className="gallery-button-forward" onClick={handleNext}><img className='arrowGallery' src={nextArrow} alt="next arrow button" /></button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;