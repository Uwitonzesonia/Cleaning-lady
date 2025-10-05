import React from "react";

const services = [
  { title: "Carpet Cleaning", desc: "Deep cleaning of rugs and carpets.", price: "From RWF 7,000" },
  { title: "Mattress Cleaning", desc: "Remove dust, stains and allergens.", price: "From RWF 10,000" },
  { title: "House Cleaning", desc: "Full house deep clean services.", price: "From RWF 20,000" },
  { title: "Sofa Cleaning", desc: "Professional upholstery cleaning.", price: "From RWF 15,000" },
];

function Services() {
  return (
    <section id="services">
      <h2>Our Services</h2>
      <div className="service-list">
        {services.map((s, i) => (
          <div key={i} className="service-card">
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
            <strong>{s.price}</strong>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
