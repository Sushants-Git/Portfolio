import logo from "../assets/sushant-mishra-logo.svg";

function Navbar({ menuOnClick }) {
  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }

  function scroll(e) {
    const sectionId = e.target.parentNode.getAttribute("href").substring(1);
    if (
      sectionId === "about" ||
      sectionId === "projects" ||
      sectionId === "designs"
    ) {
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
            <a href="#designs">
              <li>Designs</li>
            </a>
            <a href="https://drive.google.com/file/d/1xG4H3BSXjNGph9ytU6vIrDUyHg113G4z/view?usp=sharing" target="_blank">
              <li>Resume</li>
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
              <a href="#designs">
                <li>Designs</li>
              </a>
              <a href="https://drive.google.com/file/d/1xG4H3BSXjNGph9ytU6vIrDUyHg113G4z/view?usp=sharing" target="_blank">
                <li>Resume</li>
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
