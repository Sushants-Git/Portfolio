import pinkOpenBracket from "../assets/brackets/pink-opening.svg";
import pinkCloseBracket from "../assets/brackets/pink-closing.svg";
import useWindowDimensions from "../CustomHooks/useWindowDimensions";

import { gsap } from "gsap";
import { useEffect } from "react";

function LeftSide() {
  const viewPortWidth = useWindowDimensions().width;
  useEffect(
    function () {
      let animation = gsap.fromTo(
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
          fontSize: "64px",
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
        <p>I love building stuff, learning new things, meeting new people. I just love tech in general. So, if you have something cool to build feel free to reach out!!</p>
      </div>
    </div>
  );
}

export default LeftSide;
