import React from "react";
import sofa1 from "../assets/gallery/sofa 3.jpg";
import sofa2 from "../assets/gallery/sofa 2.jpg";
import sofa3 from "../assets/gallery/sofa1.jpg";
import "../styles/ServiceDetail.css";


function SofaCleaning() {
  return (
    <div className="service-detail">
      <h1>Sofa Deep Cleaning</h1>
      <p>
        We provide professional sofa deep cleaning using eco-friendly products
        ensuring freshness, stain removal and hygiene.
      </p>

      <div className="gallery">
        <img src={sofa1} alt="sofa cleaning" />
        <img src={sofa2} alt="sofa cleaning" />
        <img src={sofa3} alt="sofa cleaning" />
      </div>
    </div>
  );
}

export default SofaCleaning;
