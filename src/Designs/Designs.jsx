import Image1 from "./Design Images/Image-1.png";
import Image2 from "./Design Images/Image-2.png";
import Image3 from "./Design Images/Image-3.png";
import Image4 from "./Design Images/Image-4.png";

import indigoOpenBracket from "../assets/brackets/indigo-opening.svg";
import indigoCloseBracket from "../assets/brackets/indigo-closing.svg";
import useWindowDimensions from "../CustomHooks/useWindowDimensions";

import { gsap } from "gsap";
import { useEffect, useRef } from "react";

export default function Designs() {
  let animation = useRef(null);
  const viewPortWidth = useWindowDimensions().width;
  useEffect(
    function () {
      if (viewPortWidth <= 640) {
        animation.current = null;
        return;
      }
      animation = gsap.fromTo(
        "#designs-title-wrapper",
        {
          fontSize: "3vw",
          opacity: 0,
        },
        {
          scrollTrigger: {
            trigger: "#designs-title-wrapper p",
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

  const designs = [
    { imagePath: Image1 },
    { imagePath: Image2 },
    { imagePath: Image3 },
    { imagePath: Image4 },
  ];

  const designDiv = designs.map((design) => (
    <div className="design-wrapper">
      <div className="design">
        <div className="design-image">
          <img src={design.imagePath} alt="design image" />
        </div>
      </div>
    </div>
  ));

  return (
    <section id="designs" className="designs">
      <div className="title-wrapper" id="designs-title-wrapper">
        <img src={indigoOpenBracket} alt="opening bracket" />
        <p className="title">Designs</p>
        <img src={indigoCloseBracket} alt="closing bracket" />
      </div>
      <div className="designs-wrapper">{designDiv}</div>
    </section>
  );
}
