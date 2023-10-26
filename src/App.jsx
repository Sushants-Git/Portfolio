import Navbar from "./Navbar/Navbar.jsx";
import Hero from "./Hero/Hero.jsx";
import About from "./About/About.jsx";
import Projects from "./Projects/Projects.jsx";
import Footer from "./Footer/Footer.jsx";

import "./App.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useState } from "react";

function App() {
  let animation = null;
  let [menuClicked, setMenuClicked] = useState(false);
  gsap.registerPlugin(ScrollTrigger);

  function menuOnClick() {
    setMenuClicked((preValue) => {
      if (!preValue) {
        gsap.to(".bar-upper", {
          rotation: 45,
          transformOrigin: "50% 50%",
        });

        gsap.to(".bar-lower", {
          rotation: -45,
          width: "47px",
          transformOrigin: "50% 50%",
        });

        gsap.to(".nav-items-menu", {
          display: "flex",
          opacity: 1,
        });
      } else {
        gsap.to(".bar-upper", {
          rotation: 0,
          transformOrigin: "50% 50%",
        });

        gsap.to(".bar-lower", {
          rotation: 0,
          width: "26px",
          transformOrigin: "50% 50%",
        });

        gsap.to(".nav-items-menu", {
          display: "none",
          opacity: 0,
        });
      }

      return !preValue;
    });
  }

  useEffect(function () {
    let prevScrollPos = window.scrollY;

    window.onscroll = function () {
      const currentScrollPos = window.scrollY;
      animation?.kill();
      animation = null;
      if (prevScrollPos > currentScrollPos) {
        animation = gsap.to(".nav-container", {
          top: "3.8em",
          display: "block",
          opacity: 1,
        });
      } else {
        animation = gsap.to(".nav-container", {
          scrollTrigger: {
            trigger: ".hero",
          },
          opacity: 0,
        });

        animation = gsap.to(".nav-container", {
          display: "none",
        });
      }
      prevScrollPos = currentScrollPos;
    };
  }, []);

  return (
    <>
      <Navbar menuClicked={menuClicked} menuOnClick={menuOnClick} />
      <Hero />
      <About />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
