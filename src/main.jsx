import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import SofaCleaning from "./pages/SofaCleaning.jsx";
;

<Route path="/sofa-cleaning" element={<SofaCleaning />} />


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
