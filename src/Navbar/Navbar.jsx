import logo from "../assets/sushant-mishra-logo.svg";
import mobileMenu from "../assets/mobile-menu.svg";

function Navbar() {
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
        <div className="mobile-menu-wrapper">
          <img className="mobile-menu" src={mobileMenu} alt="menu" />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
