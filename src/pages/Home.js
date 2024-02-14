import React from "react";
import { useNavigate } from "react-router-dom";
import symbol from "../pictures/symbol.png";
import Gfs from "./Gfs";
import Manhattan from "./Manhattan";
import Manisa from "./Manisa";
import Roma from "./Roma";
import Shoekapss from "./Shoekapss";
import Urla from "./Urla";

import NameImage from "../components/NameImage";
import Footer from "../components/Footer";

const Home = () => {
  const navigate = useNavigate();

  const clickGfs = () => {
    navigate("/gfs");
  };
  const clickManhattan = () => {
    navigate("/manhattan");
  };
  const clickManisa = () => {
    navigate("/manisa");
  };
  const clickRoma = () => {
    navigate("/roma");
  };
  const clickShoekapss = () => {
    navigate("/shoekapss");
  };
  const clickUrla = () => {
    navigate("/urla");
  };
  return (
    <div>
      <div className="image_cont">
        {/* <img className="symbol" src={symbol} alt="stark" /> */}
        <NameImage />
        <h2 class="projets_header">PROJELERİMİZ</h2>
      </div>

      <div class="project_boxes">
        <div onClick={clickGfs} className="pic gfs-sys">
          <h3>Gfs-System</h3>
        </div>
        <div onClick={clickManhattan} className="pic manhattan">
          <h3>Manhattan</h3>
        </div>
        <div onClick={clickManisa} className="pic manisa">
          <h3>Manisa</h3>
        </div>
        <div onClick={clickRoma} className="pic roma">
          <h3>Roma</h3>
        </div>
        <div onClick={clickShoekapss} className="pic shoekapps">
          <h3>Shoekapps</h3>
        </div>
        <div onClick={clickUrla} className="pic urla">
          <h3>Urla</h3>
        </div>
      </div>
    </div>
  );
};

export default Home;
