import Navbar from "./Navbar/Navbar.jsx";
import Hero from "./Hero/Hero.jsx";
import About from "./About/About.jsx";
import Projects from "./Projects/Projects.jsx";
import Footer from "./Footer/Footer.jsx";
import "./App.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

function App() {
  gsap.registerPlugin(ScrollTrigger);
  const navRef = useRef(null);
  const navMenuRef = useRef(null);

  useEffect(function () {
    let prevScrollPos = window.scrollY;
    const navbar = navRef.current;
    const navbarMenu = navMenuRef.current;

    window.onscroll = function () {
      const currentScrollPos = window.scrollY;
      if (prevScrollPos > currentScrollPos) {
        gsap.to(".nav-container", {
          top: "3.8em",
          display: "block",
          opacity: 1,
        });
      } else {
        gsap.to(".nav-container", {
          scrollTrigger: {
            trigger: ".hero",
          },
          display: "none",
          opacity: 0,
        });
      }
      prevScrollPos = currentScrollPos;
    };
  }, []);
  return (
    <>
      <Navbar navRef={navRef} navMenuRef={navMenuRef} />
      <Hero />
      <About />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
