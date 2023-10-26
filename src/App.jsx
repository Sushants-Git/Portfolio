import Navbar from "./Navbar/Navbar.jsx";
import Hero from "./Hero/Hero.jsx";
import About from "./About/About.jsx";
import Projects from "./Projects/Projects.jsx";
import Footer from "./Footer/Footer.jsx";
import "./App.css";
import { useEffect, useRef } from "react";

function App() {
  const navRef = useRef(null);
  const navMenuRef = useRef(null);

  useEffect(function () {
    let prevScrollPos = window.scrollY;
    const navbar = navRef.current;
    const navbarMenu = navMenuRef.current;

    window.onscroll = function () {
      const currentScrollPos = window.scrollY;
      if (prevScrollPos > currentScrollPos) {
        navbar.style.top = "3.8em";
        navbarMenu.style.display = "block"
      } else {
        navbar.style.top = `-${navbar.offsetHeight}px`;
        navbarMenu.style.display = "none"
      }
      prevScrollPos = currentScrollPos;
    };
  }, []);
  return (
    <>
      <Navbar navRef={navRef} navMenuRef={navMenuRef}/>
      <Hero />
      <About />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
