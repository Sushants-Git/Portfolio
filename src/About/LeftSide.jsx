import pinkOpenBracket from "../assets/brackets/pink-opening.svg";
import pinkCloseBracket from "../assets/brackets/pink-closing.svg";

import { gsap } from "gsap";
import { useEffect } from "react";

function LeftSide() {
  useEffect(function () {
    gsap.fromTo(
      ".left-side-title",
      {
        fontSize: "3vw",
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: ".left-side-title",
          toggleActions: "play none none reset",
          start: "top +=90%",
        },
        fontSize: "65px",
        opacity: 1,
      }
    );
  }, []);

  return (
    <div className="left-side">
      <div className="left-side-title">
        <img src={pinkOpenBracket} alt="opening bracket" />
        <p>About</p>
        <img src={pinkCloseBracket} alt="closing bracket" />
      </div>
      <div className="left-side-content">
        <p>
          Everyone has their superpower, for some, it's music; for others, it's
          sports; for me, it has always been computers.
        </p>
        <p>
          I don’t know when the simple desire of impressing my teachers with my
          “cool” tech skills, transformed into a full-time passion for creating
          even “cooler” web applications and designs.
        </p>
      </div>
    </div>
  );
}

export default LeftSide;
