import React from "react";
import "../styles/services.css";

const Services = () => {
  const serviceList = [
    { name: "Sofa Deep Cleaning", link: "/sofa-cleaning" },
    { name: "Mattress Deep Cleaning", link: "/mattress-cleaning" },
    { name: "Carpet Cleaning", link: "/carpet-cleaning" },
    { name: "House Deep Cleaning", link: "/house-cleaning" },
    { name: "Office Cleaning", link: "/office-cleaning" }
  ];

  return (
    <section className="services">
      <h2>Our Cleaning Services</h2>
      <div className="service-grid">
        {serviceList.map((service, index) => (
          <a key={index} href={service.link} className="service-card">
            {service.name}
          </a>
        ))}
      </div>
    </section>
  );
};

export default Services;
