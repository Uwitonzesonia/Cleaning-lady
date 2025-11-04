import React from "react";

const SofaCleaning = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto">

      <h1 className="text-3xl font-bold text-center mb-6">
        Sofa Deep Cleaning Service
      </h1>

      {/* Amafoto */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <img src="/logo/sofa1.jpg" alt="sofa cleaning" className="rounded-lg shadow" />
        <img src="/logo/sofa2.jpg" alt="sofa cleaning" className="rounded-lg shadow" />
        <img src="/logo/sofa3.jpg" alt="sofa cleaning" className="rounded-lg shadow" />
        <img src="/logo/sofa4.jpg" alt="sofa cleaning" className="rounded-lg shadow" />
      </div>

      {/* Ibyiciro by'ibiciro */}
      <h2 className="text-2xl font-semibold mb-4">Price List</h2>

      <ul className="space-y-2 text-lg">
        <li>🛋 Sofa 3 Seaters: <strong>15,000 RWF</strong></li>
        <li>🛋 Sofa 5 Seaters: <strong>25,000 RWF</strong></li>
        <li>🛋 Sofa L-Shape: <strong>35,000 RWF</strong></li>
        <li>🛋 Single Sofa Chair: <strong>5,000 RWF</strong></li>
      </ul>

      {/* Button ya WhatsApp */}
      <div className="mt-8 text-center">
        <a
          href="https://wa.me/250792880442"
          target="_blank"
          className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg transition font-semibold text-lg"
        >
          <img src="/logo/whatsapp.png" className="w-6" />
          Book Service on WhatsApp
        </a>
      </div>

    </div>
  );
};

export default SofaCleaning;
