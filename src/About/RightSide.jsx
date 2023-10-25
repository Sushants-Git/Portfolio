import blueOpenBracket from "../assets/brackets/blue-opening.svg";
import blueCloseBracket from "../assets/brackets/blue-closing.svg";
import arrow from "../assets/brackets/arrow.svg";
import useWindowDimensions from "../CustomHooks/useWindowDimensions";

import { gsap } from "gsap";
import { useEffect } from "react";

function RightSide() {
  const viewPortWidth = useWindowDimensions().width;
  useEffect(
    function () {
      let animation = gsap.fromTo(
        ".right-side-title p",
        {
          fontSize: "3vw",
          opacity: 0,
        },
        {
          scrollTrigger: {
            trigger: ".right-side-title",
            toggleActions: "play none none reset",
            start: "top +=90%",
          },
          fontSize: "65px",
          opacity: 1,
        }
      );

      return () => {
        animation.kill();
        animation = null;
      };
    },
    [viewPortWidth]
  );

  return (
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
  );
}

export default RightSide;
