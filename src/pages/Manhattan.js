import React, { useState } from 'react'
import ManhattanImages from "../pictures/manhattan/ManhattanImages"

const Manhattan = () => {
  const imageCount = 8;
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
        <img onClick={() => handleImageClick(image)} className='projectImage' key={index} src={ManhattanImages[`(${index + 1})`]} alt={`Image ${index + 1}`} />
      ))}
      {selectedImage && (
        <div className="modal" onClick={handleCloseModal}>
          <img
            src={ManhattanImages[`(${selectedImage})`]}
            alt={`Image ${selectedImage}`}
            className="modal-image"
          />
        </div>
      )}
    </div>
  )
}

export default Manhattan