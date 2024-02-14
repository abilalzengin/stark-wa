import React, { useState } from 'react'
import RomaImages from "../pictures/roma-italy/RomaImages"


const Roma = () => {
  const imageCount = 24;
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image+1);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };
  return (
    <div className='imageContainer'>
      {[...Array(imageCount).keys()].map((image, index) => (
        <img onClick={() => handleImageClick(image)} className='projectImage' key={index} src={RomaImages[`(${index + 1})`]} alt={`Image ${index + 1}`} />
      ))}
      {selectedImage && (
        <div className="modal" onClick={handleCloseModal}>
          <img
            src={RomaImages[`(${selectedImage})`]}
            alt={`Image ${selectedImage}`}
            className="modal-image"
          />
        </div>
      )}
    </div>
  )
}

export default Roma