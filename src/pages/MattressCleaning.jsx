import React from "react";
import "../styles/ServiceDetail.css";
import img1 from "../assets/gallery/matress.jpg";
import img2 from "../assets/gallery/Mattress.jpg";

const MattressCleaning = () => {
  return (
    <div className="service-detail">
      <h2>Mattress Deep Cleaning</h2>

      <div className="service-images">
        <img src={img1} alt="" />
        <img src={img2} alt="" />
      </div>

      <div className="price-box">Starting at 10,000 Rwf</div>
      <a className="whatsapp-btn" href="https://wa.me/250792880442">
        Book on WhatsApp
      </a>
    </div>
  );
};

export default MattressCleaning;
