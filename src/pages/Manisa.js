import React, { useState } from 'react'
import ManisaImages from "../pictures/manisa/ManisaImages"


const Manisa = () => {
  const imageCount = 19;
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
        <img  onClick={() => handleImageClick(image)}  className='projectImage' key={index} src={ManisaImages[`(${index + 1})`]} alt={`Image ${index + 1}`} />
      ))}
      {selectedImage && (
        <div className="modal" onClick={handleCloseModal}>
          <img
            src={ManisaImages[`(${selectedImage})`]}
            alt={`Image ${selectedImage}`}
            className="modal-image"
          />
        </div>
      )}
    </div>
  )
}

export default Manisa