import React from "react";
import NavBar from './Components/NavBar';
import Hero from "./Components/Hero";
import Analytics from "./Components/Analytics";
import NewsLetter from "./Components/NewsLetter";
import Cards from "./Components/Cards";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      < NavBar />
      <Hero />
      <Analytics />
      <NewsLetter />
      <Cards />
      <Footer />
    </div >
  );
};

export default App;
