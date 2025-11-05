import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import App from "./App.jsx";
import SofaCleaning from "./pages/SofaCleaning.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/sofa-cleaning" element={<SofaCleaning />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
