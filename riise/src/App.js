// src/App.js
import React, { useRef } from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Schedule from "./components/Schedule";
import ThemePage from "./components/Themes";
import Navbar from "./components/Navbar";

const App = () => {
  const footerRef = useRef();
  // 

  const scrollToFooter = () => {
    footerRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <Navbar scrollToFooter={scrollToFooter} />
      <Header />
      <ThemePage />
      <Schedule/>
      <Footer footerRef={footerRef}/>
    </div>
  );
};

export default App;
