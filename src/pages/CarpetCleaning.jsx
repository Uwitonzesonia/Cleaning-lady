import React from "react";
import "../styles/ServiceDetail.css";
import img1 from "../assets/gallery/carpet 1.jpg";


const CarpetCleaning = () => {
  return (
    <div className="service-detail">
      <h2>Carpet Cleaning</h2>

      <div className="service-images">
        <img src={img1} alt="" />
      </div>

      <div className="price-box">Starting at 5,000 Rwf</div>
      <a className="whatsapp-btn" href="https://wa.me/250792880442">
        Book on WhatsApp
      </a>
    </div>
  );
};

export default CarpetCleaning;
