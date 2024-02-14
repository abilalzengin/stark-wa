import React from 'react'
import symbol from "../pictures/stark-symbol.png";


const NameImage = () => {
  return (
    <div className="companyLogo">
      <img className='symbol' src={symbol} alt="Company Logo" />
      <div className="owner-name left">İç Mimar Emre ÖZTÜRK</div>
      <div className="owner-name right">İç Mimar Gökhan ERDOĞAN</div>
    </div>
  )
}

export default NameImage