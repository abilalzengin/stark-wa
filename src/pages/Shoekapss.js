import React, { useState } from 'react'
import ShoekapssImages from "../pictures/shoekapss/ShoekapssImages"


const Shoekapss = () => {
  const imageCount = 13;
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
        <img onClick={() => handleImageClick(image)} className='projectImage' key={index} src={ShoekapssImages[`(${index + 1})`]} alt={`Image ${index + 1}`} />
      ))}
      {selectedImage && (
        <div className="modal" onClick={handleCloseModal}>
          <img
            src={ShoekapssImages[`(${selectedImage})`]}
            alt={`Image ${selectedImage}`}
            className="modal-image"
          />
        </div>
      )}
    </div>
  )
}

export default Shoekapss