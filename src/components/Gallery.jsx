import React from "react";

function Gallery() {
  return (
    <section>
      <h2>Our Work</h2>
      <div className="gallery">
        <img src="/images/carpet1-before.jpg" alt="Before Cleaning" />
        <img src="/images/carpet1-after.jpg" alt="After Cleaning" />
      </div>
    </section>
  );
}

export default Gallery;
