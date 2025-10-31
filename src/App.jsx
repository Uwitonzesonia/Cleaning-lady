import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import Booking from "./components/Booking";
import Gallery from "./components/Gallery";


function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Contacts />
        <Booking />
        <Gallery />
      </main>
      <Footer />
    </>
  );
}

export default App;
