import logo from "../assets/sushant-mishra-logo.svg";
import mobileMenu from "../assets/mobile-menu.svg";

function Navbar() {
  return (
    <div className="nav-container">
      <nav className="nav">
        <div className="logo-wrapper">
          <img className="logo" src={logo} />
        </div>
        <div className="nav-items">
          <ul>
            <li>About</li>
            <li>Work</li>
            <li>Blog</li>
            <li className="bold contact-me">Contact Me</li>
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
