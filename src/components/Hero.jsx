import React from "react";

  function Hero() {
    return (
      <section className="hero" style={{ padding: "3rem 1rem", background: "#f7f7f7" }}>
        <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
          <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem", color: "#2c3e50" }}>
            Professional Cleaning Services for Homes & Offices
          </h1>
          <p style={{ fontSize: "1.2rem", marginBottom: "2rem", color: "#34495e" }}>
            We clean carpets, mattresses, sofas, and houses using modern equipment. Reliable, affordable, and fast.
          </p>
          <button
            style={{
              padding: "0.75rem 2rem",
              fontSize: "1rem",
              background: "#27ae60",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              boxShadow: "0 2px 8px rgba(39, 174, 96, 0.15)"
            }}
          >
            Book Now
          </button>
        </div>
      </section>
    );
  }

export default Hero;
