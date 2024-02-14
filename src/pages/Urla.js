import React, { useState } from 'react'
import UrlaImages from "../pictures/urla-gulener/UrlaImages"


const Urla = () => {
  const imageCount = 17;
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
        <img  onClick={() => handleImageClick(image)} className='projectImage' key={index} src={UrlaImages[`(${index + 1})`]} alt={`Image ${index + 1}`} />
      ))}
       {selectedImage && (
        <div className="modal" onClick={handleCloseModal}>
          <img
            src={UrlaImages[`(${selectedImage})`]}
            alt={`Image ${selectedImage}`}
            className="modal-image"
          />
        </div>
      )}
    </div>
  )
}

export default Urla