import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import App from "./App.jsx";
import SofaCleaning from "./pages/SofaCleaning";
import MattressCleaning from "./pages/MattressCleaning";
import CarpetCleaning from "./pages/CarpetCleaning";
import HouseCleaning from "./pages/HouseCleaning";
import OfficeCleaning from "./pages/OfficeCleaning";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
         <Route path="/sofa-cleaning" element={<SofaCleaning />} />
    <Route path="/mattress-cleaning" element={<MattressCleaning />} />
    <Route path="/carpet-cleaning" element={<CarpetCleaning />} />
    <Route path="/house-cleaning" element={<HouseCleaning />} />
    <Route path="/office-cleaning" element={<OfficeCleaning />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
