import pinkOpenBracket from "../assets/brackets/pink-opening.svg";
import pinkCloseBracket from "../assets/brackets/pink-closing.svg";
import blueOpenBracket from "../assets/brackets/blue-opening.svg";
import blueCloseBracket from "../assets/brackets/blue-closing.svg";
import arrow from "../assets/brackets/arrow.svg";

function About() {
  return (
    <section className="about">
      <div className="about-wrapper">
        <div className="left-side-wrapper">
          <div className="left-side">
            <div className="left-side-title">
              <img src={pinkOpenBracket} alt="opening bracket" />
              <p>About</p>
              <img src={pinkCloseBracket} alt="closing bracket" />
            </div>
            <div className="left-side-content">
              <p>
                Everyone has their superpower, for some, it's music; for others,
                it's sports; for me, it has always been computers.
              </p>
              <p>
                I don’t know when the simple desire of impressing my teachers
                with my “cool” tech skills, transformed into a full-time passion
                for creating even “cooler” web applications and designs.
              </p>
            </div>
          </div>
        </div>
        <div className="right-side-wrapper">
          <div className="right-side">
            <div className="right-side-title">
              <img src={blueOpenBracket} alt="opening bracket" />
              <p>Toolkit</p>
              <img src={blueCloseBracket} alt="closing bracket" />
            </div>
            <div className="toolkit-list">
              <ul>
                <li>
                  <img src={arrow} className="arrow" alt="bullet-point-arrow-style" />
                  <p>Javascript (ES6+)</p>
                </li>
                <li>
                  <img src={arrow} className="arrow" alt="bullet-point-arrow-style" />
                  <p>React</p>
                </li>
                <li>
                  <img src={arrow} className="arrow" alt="bullet-point-arrow-style" />
                  <p>Tailwind</p>
                </li>
                <li>
                  <img src={arrow} className="arrow" alt="bullet-point-arrow-style" />
                  <p>Figma</p>
                </li>
                <li>
                  <img src={arrow} className="arrow" alt="bullet-point-arrow-style" />
                  <p>Git and GitHub</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
