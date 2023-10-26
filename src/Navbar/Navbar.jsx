import logo from "../assets/sushant-mishra-logo.svg";
import { gsap } from "gsap";
import { useState } from "react";

function Navbar() {
  let [menuClicked, setMenuClicked] = useState(false);
  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }

  function scroll(e) {
    const sectionId = e.target.parentNode.getAttribute("href").substring(1);
    if (sectionId === "about" || sectionId === "projects") {
      e.preventDefault();
      scrollToSection(sectionId);
    }
  }

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

  return (
    <div className="nav-container">
      <nav className="nav" onClick={(e) => scroll(e)}>
        <div className="logo-wrapper">
          <a href="#hero">
            <img className="logo" src={logo} />
          </a>
        </div>
        <div className="nav-items">
          <ul>
            <a href="#about">
              <li>About</li>
            </a>
            <a href="#projects">
              <li>Projects</li>
            </a>
            <a href="https://sushantshash.hashnode.dev/" target="_blank">
              <li>Blogs</li>
            </a>
            <a href="mailto:sushantsgml@gmail.com">
              <li className="bold contact-me">Say Hello</li>
            </a>
          </ul>
        </div>
        <div className="mobile-menu-wrapper" onClick={() => menuOnClick()}>
          <span className="bar-upper"></span>
          <span className="bar-lower"></span>
          <div className="nav-items-menu">
            <ul>
              <a href="#about">
                <li>About</li>
              </a>
              <a href="#projects">
                <li>Projects</li>
              </a>
              <a href="https://sushantshash.hashnode.dev/" target="_blank">
                <li>Blogs</li>
              </a>
              <a href="mailto:sushantsgml@gmail.com">
                <li className="bold contact-me">Say Hello</li>
              </a>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
