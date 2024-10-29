"use client";

import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./Home";

const Homepage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      once: true, // Animates only once
    });
  }, []);

  return (
    <Home />
  );
};

export default Homepage;
