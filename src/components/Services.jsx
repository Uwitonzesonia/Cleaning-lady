import React from "react";
import "../styles/services.css";

const Services = () => {
  const serviceList = [
    "Sofa Deep Cleaning",
    "Mattress Deep Cleaning",
    "Carpet Cleaning",
    "House Deep Cleaning",
    "Office Cleaning",
    "Car Interior Cleaning",
    "Window / Glass Cleaning",
  ];

  return (
    <section className="services" id="services">
      <h2>Our Cleaning Services</h2>
      <div className="service-grid">
        {serviceList.map((service, index) => (
          <div key={index} className="service-card">
            <p>{service}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
