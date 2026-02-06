import React from "react";
import "../styles/ServiceDetail.css";
import sofa1 from "../assets/gallery/sofa1.jpg";
import sofa2 from "../assets/gallery/sofa 2.jpg";
import sofa3 from "../assets/gallery/sofa 3.jpg";

const SofaCleaning = () => {
  return (
    <div className="service-detail">
      <h2>Sofa Deep Cleaning</h2>

      <div className="service-images">
        <img src={sofa1} alt="" />
        <img src={sofa2} alt="" />
        <img src={sofa3} alt="" />
      </div>

      <div className="price-box">Starting at 15,000 Rwf</div>
      <a className="whatsapp-btn" href="https://wa.me/250792880442">
        Book on WhatsApp
      </a>
    </div>
  );
};

export default SofaCleaning;
