import pinkOpenBracket from "../assets/brackets/pink-opening.svg";
import pinkCloseBracket from "../assets/brackets/pink-closing.svg";
import useWindowDimensions from "../CustomHooks/useWindowDimensions";

import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";

function LeftSide() {
  let animation = useRef(null);
  const viewPortWidth = useWindowDimensions().width;

  useLayoutEffect(
    function () {
      if (viewPortWidth <= 640) {
        animation.current = null;
        return;
      }
      animation.current = gsap.fromTo(
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
        animation.current?.kill();
        animation.current = null;
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
          Everyone has their superpower,
          <br />
          For some, it's <span className="pink-gradient">Music</span>;
          <br />
          For others, it's <span className="blue-gradient">Sports</span>;
          <br />
          For me?
          <br />
          It has always been <span className="green-gradient">Computers</span>.
        </p>
        <br />
        <p>
          I love <span className="pink-gradient">building stuff</span>, <span className="blue-gradient">learning new things</span>, <span className="green-gradient">meeting new people</span>. I just
          love tech in general. So, if you have something cool to build feel
          free to reach out!!
        </p>
      </div>
    </div>
  );
}

export default LeftSide;
